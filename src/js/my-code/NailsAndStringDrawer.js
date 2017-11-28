import Victor from 'victor';
import triangulate from './lib/triangulate-image-browser.es6.min';

class NailsAndStringDrawer {
  constructor(svg, srcImage) {
    this.svg = svg;
    this.srcImage = srcImage;
    this.numLines = 5;

    this.buildMenu();
  }

  draw() {
    this.clearSVG();
    const params = {
      blur: Number(this.blur.value),
      accuracy: Number(this.accuracy.value),
      vertexCount: Number(this.vertexCount.value),
    };

    // Draw boring Triangulation
    let triangulatedImage = triangulate(params).fromImage(this.srcImage);
    triangulatedImage.toSVG().then((data) => {
      this.svg.innerHTML = data;

      // Cool Bézier Line calculations with slightly changed Triangulation Options
      params.accuracy += Number(this.lineDeviation.value);
      triangulatedImage = triangulate(params).fromImage(this.srcImage);
      triangulatedImage.toData().then((triangulationData) => {
        let lines = triangulationData.map(triangle => this.generateLines(triangle));
        lines = [].concat(...lines);
        const svgLines = NailsAndStringDrawer.linesToSVGLines(lines);
        svgLines.map(svgLine => this.svg.appendChild(svgLine));
      });
    });
  }


  // render logic inspired by Bezier Curves 
  // https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Quadratic_curves
  generateLines(triangle) {
    // Get Triangle Corners
    // Vector A, B, C
    const a = new Victor(triangle.a.x, triangle.a.y);
    const b = new Victor(triangle.b.x, triangle.b.y);
    const c = new Victor(triangle.c.x, triangle.c.y);

    // Get subvectors between corners dependent on the given Line Count
    // e.g. ABStep = (B - A)/numberOfLines
    const abStepSice = (new Victor(b.x, b.y)
      .subtract(a))
      .divide(new Victor(this.numLines, this.numLines));
    const bcStepSice = (new Victor(c.x, c.y)
      .subtract(b))
      .divide(new Victor(this.numLines, this.numLines));
    const caStepSice = (new Victor(a.x, a.y)
      .subtract(c))
      .divide(new Victor(this.numLines, this.numLines));

    let lines = [];

    // Generate Lines between Triangle Edges
    // e.g. abiLine((A + (ABStep * i), (B + (BCStep * i))
    for (let i = 0; i <= this.numLines; i += 1) {
      lines = [
        ...lines,
        NailsAndStringDrawer.generateLine(
          new Victor(a.x, a.y)
            .add(new Victor(abStepSice.x, abStepSice.y)
              .multiply(new Victor(i, i))),
          new Victor(b.x, b.y)
            .add(new Victor(bcStepSice.x, bcStepSice.y)
              .multiply(new Victor(i, i))),
          triangle.fill,
        ),
        NailsAndStringDrawer.generateLine(
          new Victor(b.x, b.y)
            .add(new Victor(bcStepSice.x, bcStepSice.y)
              .multiply(new Victor(i, i))),
          new Victor(c.x, c.y)
            .add(new Victor(caStepSice.x, caStepSice.y)
              .multiply(new Victor(i, i))),
          triangle.fill,
        ),
        NailsAndStringDrawer.generateLine(
          new Victor(c.x, c.y)
            .add(new Victor(caStepSice.x, caStepSice.y)
              .multiply(new Victor(i, i))),
          new Victor(a.x, a.y)
            .add(new Victor(abStepSice.x, abStepSice.y)
              .multiply(new Victor(i, i))),
          triangle.fill,
        ),
      ];
    }
    return lines;
  }

  // Helper Function to create Line Objects
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

  // Helper Function to convert Line Objects to svg Lines
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

  // Ugly and long code to create the Menu
  buildMenu() {
    const menu = document.querySelector('#menu');
    const myMenu = document.createElement('div');
    myMenu.id = 'nailsAndLinesMenu';
    menu.insertBefore(myMenu, menu.childNodes[0]);

    let element = document.createElement('span');
    element.innerText = 'Hover me for more Options';
    myMenu.appendChild(element);

    const optionsContainer = document.createElement('div');
    optionsContainer.id = 'optionsContainer';
    myMenu.appendChild(optionsContainer);


    // Triangulation Options
    element = document.createElement('h4');
    element.innerText = 'Triangulation Options';
    optionsContainer.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'accuracy');
    element.innerText = 'Accuracy:';
    optionsContainer.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'range');
    element.setAttribute('name', 'accuracy');
    element.setAttribute('min', '0');
    element.setAttribute('max', '1');
    element.setAttribute('step', '0.001');
    element.setAttribute('value', '0.7');
    element.addEventListener('change', () => this.draw());
    this.accuracy = element;
    optionsContainer.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'blur');
    element.innerText = 'Blur:';
    optionsContainer.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'range');
    element.setAttribute('name', 'blur');
    element.setAttribute('min', '0');
    element.setAttribute('max', '30');
    element.setAttribute('value', '15');
    element.setAttribute('step', '1');
    element.addEventListener('change', () => this.draw());
    this.blur = element;
    optionsContainer.appendChild(element);

    element = document.createElement('label');
    element.setAttribute('for', 'vertexCount');
    element.innerText = 'Vertex Count:';
    optionsContainer.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'number');
    element.setAttribute('name', 'vertexCount');
    element.setAttribute('min', '0');
    element.setAttribute('value', '700');
    element.addEventListener('change', () => this.draw());
    this.vertexCount = element;
    optionsContainer.appendChild(element);

    element = document.createElement('hr');
    optionsContainer.appendChild(element);

    element = document.createElement('h4');
    element.innerText = 'Line Options';
    optionsContainer.appendChild(element);
    element = document.createElement('label');
    element.setAttribute('for', 'lineDeviation');
    element.innerText = 'Deviation:';
    optionsContainer.appendChild(element);
    element = document.createElement('input');
    element.setAttribute('type', 'range');
    element.setAttribute('name', 'lineDeviation');
    element.setAttribute('min', '0.0');
    element.setAttribute('max', '0.2');
    element.setAttribute('step', '0.02');
    element.setAttribute('value', '0.02');
    element.addEventListener('change', () => this.draw());
    this.lineDeviation = element;
    optionsContainer.appendChild(element);

    element = document.createElement('hr');
    myMenu.appendChild(element);
  }

  clearSVG() {
    while (this.svg.firstChild) {
      this.svg.removeChild(this.svg.firstChild);
    }
  }
}

export default NailsAndStringDrawer;
