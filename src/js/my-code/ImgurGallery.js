
class ImgurGallery {
  constructor(svg) {
    this.svg = svg;
    this.apiUrlAlbum = 'https://api.imgur.com/3/album';
    this.apiUrlImage = 'https://api.imgur.com/3/image';
    this.imgurAplicationId = 'aa207e17df166f0';
    this.album = 'GOHHC';
    this.albumUploadReference = 'sK95kmHqbqE7HQd';

    this.buildMenu();
    this.fetchAlbumDataAndRedrawGallery();
  }

  fetchAlbumDataAndRedrawGallery() {
    const settings = {
      async: false,
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: `Client-ID ${this.imgurAplicationId}`,
        Accept: 'application/json',
      },
    };

    fetch(`${this.apiUrlAlbum}/${this.album}`, settings)
      .then(response => response.json())
      .then((json) => {
        this.images = json.data.images;
        this.redrawGallery();
      });
  }

  buildPngAndUpload() {
    ImgurGallery.setUploadButtonStatus('loading');

    const canvas = document.createElement('canvas');
    canvas.width = this.svg.getAttribute('width');
    canvas.height = this.svg.getAttribute('height');
    const ctx = canvas.getContext('2d');

    const svgData = (new XMLSerializer()).serializeToString(this.svg);

    const DOMURL = window.URL || window.webkitURL || window;

    const img = new Image();
    const svg = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = DOMURL.createObjectURL(svg);

    // Draw the SVG into an hidden canvas and convert it to a png
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
      this.uploadToImgur(canvas.toDataURL('image/png'));
    };
    img.src = url;
  }

  uploadToImgur(dataurl) {
    // Create Data Blob
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const dataBlob = new Blob([u8arr], { type: mime });

    // Build FormData to upload Image to Imgur
    const formData = new FormData();
    formData.append('type', 'file');
    formData.append('image', dataBlob);
    formData.append('title', this.title.value || '');
    formData.append('album', this.albumUploadReference);

    // Request Settings
    const settings = {
      async: false,
      mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: `Client-ID ${this.imgurAplicationId}`,
        Accept: 'application/json',
      },
      mimeType: 'multipart/form-data',
      body: formData,
    };

    // Upload Image to Imgur
    fetch(this.apiUrlImage, settings).then(() => {
      ImgurGallery.setUploadButtonStatus('done');
      // fetch new Gallery Data
      this.fetchAlbumDataAndRedrawGallery();
    });
  }

  // Ugly and long function to draw the right Gallery
  redrawGallery() {
    const body = document.querySelector('body');
    let imgurGallery = document.querySelector('#imgurGallery');

    if (imgurGallery) {
      body.removeChild(imgurGallery);
    }

    imgurGallery = document.createElement('div');
    imgurGallery.id = 'imgurGallery';
    body.appendChild(imgurGallery);

    let element = document.createElement('h4');
    element.innerText = 'Recent Uploads:';
    imgurGallery.appendChild(element);

    element = document.createElement('p');
    element.innerHTML = 'You find all uploaded Artworks in this <a href="https://imgur.com/a/GOHHC" target="_blank">Imgur Album</a>.';
    imgurGallery.appendChild(element);

    for (let i = 0; (i < this.images.length) && (i < 4); i += 1) {
      const link = document.createElement('a');
      link.setAttribute('href', this.images[this.images.length - (1 + i)].link);
      link.setAttribute('target', '_blank');
      imgurGallery.appendChild(link);
      element = document.createElement('img');
      element.setAttribute('src', this.images[this.images.length - (1 + i)].link);
      link.appendChild(element);

      if (this.images[this.images.length - (1 + i)].title
      && this.images[this.images.length - (1 + i)].title !== '') {
        element = document.createElement('span');
        element.setAttribute('class', 'image-title');
        element.innerText = this.images[this.images.length - (1 + i)].title;
        link.appendChild(element);
      }
    }
  }

  // Ugly and long Menu Logic
  buildMenu() {
    const menu = document.querySelector('#menu');
    const myMenu = document.createElement('div');
    myMenu.id = 'imgurMenu';
    menu.insertBefore(myMenu, menu.childNodes[0]);

    let element = document.createElement('h5');
    element.id = 'titleLabel';
    element.innerText = 'Artwork Title (optional): ';
    element.style.display = 'none';
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.id = 'titleInput';
    element.setAttribute('type', 'text');
    element.setAttribute('name', 'title');
    element.style.display = 'none';
    this.title = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);

    element = document.createElement('a');
    element.id = 'uploadButton';
    element.setAttribute('href', '#');
    element.innerText = 'upload to imgur';
    element.style.display = 'none';
    element.addEventListener('click', () => {
      this.buildPngAndUpload();
    });
    myMenu.appendChild(element);

    element = document.createElement('p');
    element.id = 'uploadingInfo';
    element.innerText = '...waiting for an Image';
    element.style.display = 'initial';
    myMenu.appendChild(element);
  }

  // indicates the current upload State
  static setUploadButtonStatus(status) {
    const titleLabel = document.querySelector('#titleLabel');
    const titleInput = document.querySelector('#titleInput');
    const uploadButton = document.querySelector('#uploadButton');
    const infoText = document.querySelector('#uploadingInfo');

    switch (status) {
      case 'ready':
        uploadButton.style.display = 'block';
        infoText.style.display = 'none';
        titleLabel.style.display = 'initial';
        titleInput.style.display = 'initial';
        break;
      case 'loading':
        uploadButton.style.display = 'none';
        infoText.innerText = '...uploading';
        infoText.style.display = 'initial';
        titleLabel.style.display = 'none';
        titleInput.style.display = 'none';
        break;
      case 'done':
        uploadButton.style.display = 'none';
        infoText.innerText = 'Upload Succesfull';
        infoText.style.display = 'initial';
        titleLabel.style.display = 'none';
        titleInput.style.display = 'none';
        break;
      default:
        uploadButton.style.display = 'none';
        infoText.innerText = 'Uppss...';
        infoText.style.display = 'initial';
        titleLabel.style.display = 'none';
        titleInput.style.display = 'none';
        break;
    }
  }
}

export default ImgurGallery;
