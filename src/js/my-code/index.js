import NailsAndStringDrawer from './NailsAndStringDrawer';
import ImgurGallery from './ImgurGallery';

class Artwork {
  constructor() {
    this.svg = document.querySelector('svg');
    this.srcImage = new Image();

    // Imgur Upload Features
    this.imgurGallery = new ImgurGallery(this.svg);
    // My Art Class, here you find the render logic
    this.nailsAndStringDrawer = new NailsAndStringDrawer(this.svg, this.srcImage);
  }

  init() {
    // add controll Fields to Menu
    this.buildMenu();

    // clear SVG
    this.clearSVG();

    // redraw if new SrcImage
    this.srcImage.onload = () => this.draw();
  }

  draw() {
    // clear SVG
    this.clearSVG();

    // draw Art
    this.nailsAndStringDrawer.draw();
  }

  // Helper Function to clear the SVG
  clearSVG() {
    while (this.svg.firstChild) {
      this.svg.removeChild(this.svg.firstChild);
    }
  }

  // This function loads the Image and scales it to fit inside the SVG
  loadAndScaleImage() {
    this.clearSVG();
    const fr = new FileReader();

    fr.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement('canvas');

        const maxWidth = this.svg.width.baseVal.value;
        const maxHeight = this.svg.height.baseVal.value;
        const maxWidthScaleRatio = maxWidth / img.width;
        const maxheightScaleRatio = maxHeight / img.height;
        const scaleRatio = maxWidthScaleRatio < maxheightScaleRatio ?
          maxWidthScaleRatio : maxheightScaleRatio;
        img.width *= scaleRatio;
        img.height *= scaleRatio;

        this.svg.setAttribute('width', img.width);
        this.svg.setAttribute('height', img.height);

        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        this.srcImage.src = canvas.toDataURL('image/png');

        ImgurGallery.setUploadButtonStatus('ready');
      };
    };
    fr.readAsDataURL(this.inputField.files[0]);
  }

  // Helper Function to build my own Menu
  buildMenu() {
    const menu = document.querySelector('#menu');
    const myMenu = document.createElement('div');
    myMenu.id = 'myMenu';
    menu.insertBefore(myMenu, menu.childNodes[0]);

    // File Input
    let element = document.createElement('h3');
    element.innerText = 'Source Image';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'file');
    element.setAttribute('accept', 'image/*');
    element.addEventListener('change', () => this.loadAndScaleImage());
    this.inputField = element;
    myMenu.appendChild(element);
    element = document.createElement('hr');
    myMenu.appendChild(element);
  }
}

export default Artwork;
