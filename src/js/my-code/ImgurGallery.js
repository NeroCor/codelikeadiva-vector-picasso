import Imgur from './lib/imgur.min.js';

class ImgurGallery {

  constructor(svg) {

    this.svg = svg;
    this.apiUrl = 'https://api.imgur.com/3/album';
    this.imgurAplicationId= 'aa207e17df166f0';
    this.album = 'GOHHC';
    this.albumUploadReference = 'sK95kmHqbqE7HQd';

    this.imgur = Imgur(this.imgurAplicationId);
    console.dir(this.imgur);
    let picassoAlbum = 'gjv5y';

    this.fetchAlbumData();

    this.imgur.album.get(picassoAlbum)
        .then(function(json) {
            console.log(json);
        })
        .catch(function (err) {
            console.error(err.message);
        });
    
  }

  buildPngFromSvg(){

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
      this.img.src=canvas.toDataURL('image/png');
      DOMURL.revokeObjectURL(url);
      this.uploadToImgur(canvas.toDataURL('image/png'));
    }
    
    img.src = url;


    /*
    const canvas = document.createElement('canvas');
    canvas.width = this.svg.getAttribute('width');
    canvas.height = this.svg.getAttribute('height');
    const ctx = canvas.getContext('2d');
    ctx.drawImage(this.svg,0,0);
    console.log(canvas.toDataURL('image/png'));
    */
  }

  fetchAlbumData(){
    var settings = {
      async: false,
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: 'Client-ID ' + this.imgurAplicationId,
        Accept: 'application/json'
      },
    };

    fetch(`${this.apiUrl}/${this.album}`, settings)
    .then((response) => response.json())
    .then((json) =>{
      this.images = json.data.images;
      this.redrawGallery();
    });
  }

  redrawGallery() {

  }

  uploadToImgur(dataurl){
    // Replace ctrlq with your own API key
    var apiUrl = 'https://api.imgur.com/3/image';
    var apiKey = 'aa207e17df166f0';

    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    let dataBlob = new Blob([u8arr], {type:mime});

    var formData = new FormData();
    formData.append("type", "file");
    formData.append("image", dataBlob);
    formData.append("name", "VectorPicasoTest");
    formData.append("album", this.albumUploadReference);

    var settings = {
      async: false,
      mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: 'Client-ID ' + apiKey,
        Accept: 'application/json',
        pragma: 'no-cache',
        'cache-control': 'no-cache',
      },
      mimeType: 'multipart/form-data',
      body: formData,
    };



    fetch(apiUrl, settings).then((response) =>{
      console.dir(response);
      console.dir(Promise.resolve(response));
    });

  }

    // Ugly and long code to create the Menu
    buildMenu() {
      const menu = document.querySelector('#menu');
      const myMenu = document.createElement('div');
      myMenu.id = 'imgurMenu';
      menu.insertBefore(myMenu, menu.childNodes[0]);
      
  
  
      let element = document.createElement('a');
      element.setAttribute('href', '#');
      element.innerText = 'Upload to Gallery';
      element.addEventListener('click', () => {
        this.buildPngFromSvg();
      });
      myMenu.appendChild(element);

      element = document.createElement('img');
      this.img= element;
      myMenu.appendChild(element);
    }
}

export default ImgurGallery;
