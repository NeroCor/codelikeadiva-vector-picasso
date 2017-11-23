
class ImgurGallery {

  constructor(svg) {
    this.svg = svg;
    this.apiUrlAlbum = 'https://api.imgur.com/3/album';
    this.apiUrlImage = 'https://api.imgur.com/3/image';
    this.imgurAplicationId= 'aa207e17df166f0';
    this.album = 'GOHHC';
    this.albumUploadReference = 'sK95kmHqbqE7HQd';

    this.fetchAlbumDataAndRedrawGallery();
  }

  fetchAlbumDataAndRedrawGallery(){
    var settings = {
      async: false,
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: 'Client-ID ' + this.imgurAplicationId,
        Accept: 'application/json',
      },
    };

    fetch(`${this.apiUrlAlbum}/${this.album}`, settings)
    .then((response) => response.json())
    .then((json) =>{
      this.images = json.data.images;
      this.redrawGallery();
    });
  }

  buildPngAndUpload(){

    this.setUploadButtonStatus('loading');

    var canvas = document.createElement('canvas');
    canvas.width=this.svg.getAttribute('width');
    canvas.height=this.svg.getAttribute('height');
    var ctx = canvas.getContext('2d');
    
    const svgData = (new XMLSerializer()).serializeToString(this.svg);
    
    var DOMURL = window.URL || window.webkitURL || window;
    
    var img = new Image();
    var svg = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
    var url = DOMURL.createObjectURL(svg);
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      DOMURL.revokeObjectURL(url);
      this.uploadToImgur(canvas.toDataURL('image/png'));
    }
    img.src = url;
  }

  uploadToImgur(dataurl){
    // Create Data Blob
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    let dataBlob = new Blob([u8arr], {type:mime});

    // Build FormData to upload Image to Imgur
    var formData = new FormData();
    formData.append("type", "file");
    formData.append("image", dataBlob);
    formData.append("name", "VectorPicasoTest");
    formData.append("album", this.albumUploadReference);

    // Request Settings
    var settings = {
      async: false,
      mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: 'Client-ID ' + this.imgurAplicationId,
        Accept: 'application/json',
      },
      mimeType: 'multipart/form-data',
      body: formData,
    };

    // Upload Image to Imgur
    fetch(this.apiUrlImage, settings).then((response) =>{
      this.setUploadButtonStatus('done');
      // fetch new Gallery Data
      this.fetchAlbumDataAndRedrawGallery();
    });
  }

  redrawGallery() {
    const body = document.querySelector('body');
    let imgurGallery = document.querySelector('#imgurGallery');

    if(imgurGallery) {
      body.removeChild(imgurGallery);
    }

    imgurGallery = document.createElement('div');
    imgurGallery.id = 'imgurGallery';
    body.appendChild(imgurGallery);

    let element = document.createElement('h4');
    element.innerText = 'Recent Uploads:';
    imgurGallery.appendChild(element);

    element = document.createElement('p');
    element.innerHTML = 'You find all uploaded Artworks in this <a href="https://imgur.com/a/GOHHC" target="_blank">Imgur Album</a>.'
    imgurGallery.appendChild(element);
    
    for(let i = 0; (i < this.images.length) && (i < 4); i+=1){
      element = document.createElement('img');
      element.setAttribute('src', this.images[this.images.length - (1 + i)].link);
      imgurGallery.appendChild(element);
    }
  }

    // Ugly and long code to create the Menu
    buildMenu() {
      const menu = document.querySelector('#menu');
      const myMenu = document.createElement('div');
      myMenu.id = 'imgurMenu';
      menu.insertBefore(myMenu, menu.childNodes[0]);
  
      let element = document.createElement('a');
      element.id = 'uploadButton';
      element.setAttribute('href', '#');
      element.innerText = 'upload to imgur';
      element.style.display='none';
      element.addEventListener('click', () => {
        this.buildPngAndUpload();
      });
      myMenu.appendChild(element);

      element = document.createElement('p');
      element.id = 'uploadingInfo';
      element.innerText = '...waiting for an Image';
      element.style.display='initial';
      myMenu.appendChild(element);
    }

    setUploadButtonStatus(status){
      const uploadButton = document.querySelector('#uploadButton');
      const infoText = document.querySelector('#uploadingInfo');

      switch(status){
        case 'ready':
          uploadButton.style.display='block';
          infoText.style.display='none';
        break;
        case 'loading':
          uploadButton.style.display='none';
          infoText.innerText = '...uploading';
          infoText.style.display='initial';
        break;
        case 'done':
          uploadButton.style.display='none';
          infoText.innerText = 'Upload Succesfull';
          infoText.style.display='initial';
        break;
        case 'error':
          uploadButton.style.display='none';
          infoText.innerText = 'Uppss...';
          infoText.style.display='initial';
        break;
      }

    }


}

export default ImgurGallery;
