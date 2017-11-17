import triangulate from 'triangulate-image';
import Victor from 'victor';

class Artwork {
  constructor() {
    console.log('fn: constructor');
    this.svg = document.querySelector('svg');
    console.log(this.svg.width.baseVal.value)

    this.srcImage = new Image();

    this.numLines = 5;
  }

  init() {
    console.log('fn: init');
    // add controll Fields to Menu
    this.buildMenu();

    // clear SVG
    this.clearSVG();

    // redraw if new SrcImage
    this.srcImage.onload = () => this.draw();
  }

  draw() {
    console.log('fn: draw');
    const params = {
      blur: Number(this.blur.value),
      accuracy: Number(this.accuracy.value),
      threshold: Number(this.threshold.value),
      vertexCount: Number(this.vertexCount.value),
    };
    console.dir(params);
    const triangulatedImage = triangulate(params).fromImage(this.srcImage);

    this.clearSVG();

    if (this.showPreview.checked) {
      // Preview Mode for Development
      triangulatedImage.toSVG().then((data) => {
        this.svg.innerHTML = data;
      });
    } else {
      // Normal Mode
      triangulatedImage.toData().then((data) => {
        let lines = data.map(triangle => this.generateLines(triangle));
        lines = [].concat(...lines);
        const svgLines = Artwork.linesToSVGLines(lines);
        svgLines.map(svgLine => this.svg.appendChild(svgLine));
      });
    }
  }

  generateLines(triangle) {
    const a = new Victor(triangle.a.x, triangle.a.y);
    const b = new Victor(triangle.b.x, triangle.b.y);
    const c = new Victor(triangle.c.x, triangle.c.y);

    const abStepSice = (new Victor(b.x, b.y).subtract(a)).divide(new Victor(this.numLines, this.numLines));
    const bcStepSice = (new Victor(c.x, c.y).subtract(b)).divide(new Victor(this.numLines, this.numLines));
    const caStepSice = (new Victor(a.x, a.y).subtract(c)).divide(new Victor(this.numLines, this.numLines));

    let lines = [];

    for (let i = 0; i <= this.numLines; i += 1) {
      lines = [
        ...lines,
        Artwork.generateLine(
          new Victor(a.x, a.y).add(new Victor(abStepSice.x, abStepSice.y).multiply(new Victor(i, i))),
          new Victor(b.x, b.y).add(new Victor(bcStepSice.x, bcStepSice.y).multiply(new Victor(i, i))),
          triangle.fill,
        ),
        Artwork.generateLine(
          new Victor(b.x, b.y).add(new Victor(bcStepSice.x, bcStepSice.y).multiply(new Victor(i, i))),
          new Victor(c.x, c.y).add(new Victor(caStepSice.x, caStepSice.y).multiply(new Victor(i, i))),
          triangle.fill,
        ),
        Artwork.generateLine(
          new Victor(c.x, c.y).add(new Victor(caStepSice.x, caStepSice.y).multiply(new Victor(i, i))),
          new Victor(a.x, a.y).add(new Victor(abStepSice.x, abStepSice.y).multiply(new Victor(i, i))),
          triangle.fill,
        ),
      ];
    }
    return lines;
  }

  static generateLine(vic1, vic2, color) {
    return {
      a: {
        x: vic1.x,
        y: vic1.y,
      },
      b: {
        x: vic2.x,
        y: vic2.y,
      },
      color,
    };
  }

  static linesToSVGLines(lines) {
    return lines.map((line) => {
      const svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'line'); // Create a line in SVG's namespace
      svgLine.setAttribute('x1', line.a.x);
      svgLine.setAttribute('y1', line.a.y);
      svgLine.setAttribute('x2', line.b.x);
      svgLine.setAttribute('y2', line.b.y);
      svgLine.style.stroke = line.color;
      return svgLine;
    });
  }

  clearSVG() {
    console.log('fn: clearSVG');
    while (this.svg.firstChild) {
      this.svg.removeChild(this.svg.firstChild);
    }
  }

  loadAndScaleImage() {
    this.clearSVG();
    console.log('fn: loadImage');
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
        const scaleRatio = maxWidthScaleRatio < maxheightScaleRatio ? maxWidthScaleRatio : maxheightScaleRatio;
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
      };
    };
    fr.readAsDataURL(this.inputField.files[0]);
  }

  buildMenu() {
    console.log('fn: buildMenu');
    const menu = document.querySelector('#menu');
    const myMenu = document.createElement('div');
    myMenu.id = 'myMenu';
    menu.insertBefore(myMenu, menu.childNodes[0]);

    // File Input
    let element = document.createElement('h4');
    element.innerText = 'Source Image';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'file');
    element.addEventListener('change', () => this.loadAndScaleImage());
    this.inputField = element;
    myMenu.appendChild(element);
    element = document.createElement('hr');
    myMenu.appendChild(element);

    // Triangulation Options
    element = document.createElement('h4');
    element.innerText = 'Triangulation Options';
    myMenu.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'accuracy');
    element.innerText = 'Accuracy:';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'range');
    element.setAttribute('name', 'accuracy');
    element.setAttribute('min', '0');
    element.setAttribute('max', '1');
    element.setAttribute('step', '0.001');
    element.setAttribute('value', '0.7');
    element.addEventListener('change', () => this.draw());
    this.accuracy = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'blur');
    element.innerText = 'Blur:';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'number');
    element.setAttribute('name', 'blur');
    element.setAttribute('min', '0');
    element.setAttribute('value', '40');
    element.addEventListener('change', () => this.draw());
    this.blur = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'threshold');
    element.innerText = 'Threshold:';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'range');
    element.setAttribute('name', 'threshold');
    element.setAttribute('min', '0');
    element.setAttribute('max', '100');
    element.setAttribute('value', '50');
    element.setAttribute('step', '1');
    element.addEventListener('change', () => this.draw());
    this.threshold = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'vertexCount');
    element.innerText = 'Vertex Count:';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'number');
    element.setAttribute('name', 'vertexCount');
    element.setAttribute('min', '0');
    element.setAttribute('value', '700');
    element.addEventListener('change', () => this.draw());
    this.vertexCount = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'preview');
    element.innerText = 'Triangulation Preview:';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'checkbox');
    element.setAttribute('name', 'preview');
    element.setAttribute('value', false);
    element.addEventListener('change', () => this.draw());
    this.showPreview = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);

    element = document.createElement('hr');
    myMenu.appendChild(element);

    // File Input
    element = document.createElement('h4');
    element.innerText = 'Line Options';
    myMenu.appendChild(element);
    element = document.createElement('label');
    element.setAttribute('for', 'lineCount');
    element.innerText = 'Line Count:';
    myMenu.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'number');
    element.setAttribute('name', 'vertexCount');
    element.setAttribute('min', '0');
    element.setAttribute('value', '5');
    element.addEventListener('change', () => this.draw());
    this.lineCount = element;
    myMenu.appendChild(element);
    element = document.createElement('br');
    myMenu.appendChild(element);


    element = document.createElement('hr');
    myMenu.appendChild(element);
  }
}

export default Artwork;
