/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _project = __webpack_require__(2);

var _project2 = _interopRequireDefault(_project);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  // general project code [PLEASE KEEP THAT CODE!]
  new _project2.default().init();

  // EXECUTE YOUR CODE HERE...
  new _index2.default().init();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(3);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function () {
  function Project() {
    _classCallCheck(this, Project);

    this.outputTitle = '"' + _config2.default.title + '"';
    this.downloadLink = null;
  }

  _createClass(Project, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.generateMenu();
      this.generateOverlay();
      this.updateCredits();

      document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode || event.which;
        var printKey = 'p';
        var keyCodePrint = printKey.charCodeAt(0) - 32;

        if (keyCode === keyCodePrint) {
          _this.saveArtwork();
          _this.triggerSaveArtwork();
        }
      });
    }
  }, {
    key: 'updateCredits',
    value: function updateCredits() {
      document.querySelector('#credits .title').innerText = this.outputTitle;
      document.querySelector('#credits .artist').innerText = _config2.default.author;
    }
  }, {
    key: 'generateMenu',
    value: function generateMenu() {
      var _this2 = this;

      var menu = '<div id="menu"><a href="#">save artwork</a><p>or press key: <span class="key">P</span></p></div>';
      document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', menu);

      this.downloadLink = document.querySelector('#menu a');
      this.downloadLink.addEventListener('click', function () {
        _this2.saveArtwork();
      });
    }
  }, {
    key: 'generateOverlay',
    value: function generateOverlay() {
      var _this3 = this;

      var overlay = '<div id="overlay"><div class="box"><button></button><span class="title">' + this.outputTitle + '</span><span class="author">' + _config2.default.author + '</span><div><span class="instruction">Instructions:</span><p>' + _config2.default.instructions + '</p></div></div></div>';
      document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', overlay);

      document.querySelector('#overlay button').addEventListener('click', function (event) {
        event.preventDefault();
        _this3.closeOverlay();
      });

      document.addEventListener('keydown', function (event) {
        var keyCode = event.keyCode || event.which;

        if (keyCode === 27) {
          _this3.closeOverlay();
        }
      });
    }
  }, {
    key: 'closeOverlay',
    value: function closeOverlay() {
      document.querySelector('#overlay').classList.add('closed');
    }
  }, {
    key: 'getFilename',
    value: function getFilename() {
      var date = new Date();
      var timestamp = '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() + '-' + date.getHours() + date.getMinutes() + date.getSeconds();
      return 'artwork_' + _config2.default.author + '_' + timestamp + '.svg';
    }
  }, {
    key: 'saveArtwork',
    value: function saveArtwork() {
      var svgDOM = document.querySelector('#artwork-wrapper svg');
      var svgData = new XMLSerializer().serializeToString(svgDOM);
      var svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      var url = URL.createObjectURL(svgBlob);

      this.downloadLink.setAttribute('download', this.getFilename());
      this.downloadLink.setAttribute('href', url);
      this.downloadLink.setAttribute('target', '_blank');
    }
  }, {
    key: 'triggerSaveArtwork',
    value: function triggerSaveArtwork() {
      this.downloadLink.click();
    }
  }]);

  return Project;
}();

exports.default = Project;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  author: "Andreas Wolf",
  title: "Bezier Abstraction",
  instructions: "After an Image gets uploaded, a triangulation this will be used as a Background. Another triangulation is performet with slightly different parameters, these Triangles will be used to create a Web of Lines. The Algorithm which generates these Lines is the same to generate B&eacute;zier-Curves"
};

exports.default = config;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NailsAndStringDrawer = __webpack_require__(5);

var _NailsAndStringDrawer2 = _interopRequireDefault(_NailsAndStringDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Artwork = function () {
  function Artwork() {
    _classCallCheck(this, Artwork);

    this.svg = document.querySelector('svg');

    this.srcImage = new Image();

    // My Art Class in it you find the render logic
    this.nailsAndStringDrawer = new _NailsAndStringDrawer2.default(this.svg, this.srcImage);
  }

  _createClass(Artwork, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // add controll Fields to Menu
      this.nailsAndStringDrawer.buildMenu();
      this.buildMenu();

      // clear SVG
      this.clearSVG();

      // redraw if new SrcImage
      this.srcImage.onload = function () {
        return _this.draw();
      };
    }
  }, {
    key: 'draw',
    value: function draw() {
      // clear SVG
      this.clearSVG();

      // draw Art
      this.nailsAndStringDrawer.draw();
    }

    // Helper Function to clear the SVG

  }, {
    key: 'clearSVG',
    value: function clearSVG() {
      while (this.svg.firstChild) {
        this.svg.removeChild(this.svg.firstChild);
      }
    }

    // This function loads the Image and scales it to fit inside the SVG

  }, {
    key: 'loadAndScaleImage',
    value: function loadAndScaleImage() {
      var _this2 = this;

      this.clearSVG();
      var fr = new FileReader();

      fr.onload = function (e) {
        var img = new Image();
        img.src = e.target.result;

        img.onload = function () {
          var canvas = document.createElement('canvas');

          var maxWidth = _this2.svg.width.baseVal.value;
          var maxHeight = _this2.svg.height.baseVal.value;
          var maxWidthScaleRatio = maxWidth / img.width;
          var maxheightScaleRatio = maxHeight / img.height;
          var scaleRatio = maxWidthScaleRatio < maxheightScaleRatio ? maxWidthScaleRatio : maxheightScaleRatio;
          img.width *= scaleRatio;
          img.height *= scaleRatio;

          _this2.svg.setAttribute('width', img.width);
          _this2.svg.setAttribute('height', img.height);

          var ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          _this2.srcImage.src = canvas.toDataURL('image/png');
        };
      };
      fr.readAsDataURL(this.inputField.files[0]);
    }

    // Helper Function to build my own Menu

  }, {
    key: 'buildMenu',
    value: function buildMenu() {
      var _this3 = this;

      var menu = document.querySelector('#menu');
      var myMenu = document.createElement('div');
      myMenu.id = 'myMenu';
      menu.insertBefore(myMenu, menu.childNodes[0]);

      // File Input
      var element = document.createElement('h4');
      element.innerText = 'Source Image';
      myMenu.appendChild(element);
      element = document.createElement('input');
      element.setAttribute('type', 'file');
      element.setAttribute('accept', 'image/*');
      element.addEventListener('change', function () {
        return _this3.loadAndScaleImage();
      });
      this.inputField = element;
      myMenu.appendChild(element);
      element = document.createElement('hr');
      myMenu.appendChild(element);
    }
  }]);

  return Artwork;
}();

exports.default = Artwork;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _triangulateImage = __webpack_require__(6);

var _triangulateImage2 = _interopRequireDefault(_triangulateImage);

var _victor = __webpack_require__(8);

var _victor2 = _interopRequireDefault(_victor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NailsAndStringDrawer = function () {
  function NailsAndStringDrawer(svg, srcImage) {
    _classCallCheck(this, NailsAndStringDrawer);

    this.svg = svg;

    this.srcImage = srcImage;

    this.numLines = 5;
  }

  _createClass(NailsAndStringDrawer, [{
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.clearSVG();
      var params = {
        blur: Number(this.blur.value),
        accuracy: Number(this.accuracy.value),
        threshold: Number(this.threshold.value),
        vertexCount: Number(this.vertexCount.value)
      };

      // Draw boring Triangulation
      var triangulatedImage = (0, _triangulateImage2.default)(params).fromImage(this.srcImage);
      triangulatedImage.toSVG().then(function (data) {
        _this.svg.innerHTML = data;

        params = {
          blur: params.blur,
          accuracy: params.accuracy + Number(_this.lineDeviation.value),
          threshold: params.threshold,
          vertexCount: params.vertexCount
        };

        // Cool Bézier Line calculations with slightly changed Triangulation Options
        triangulatedImage = (0, _triangulateImage2.default)(params).fromImage(_this.srcImage);
        triangulatedImage.toData().then(function (dataDeviated) {
          var _ref;

          var lines = dataDeviated.map(function (triangle) {
            return _this.generateLines(triangle);
          });
          lines = (_ref = []).concat.apply(_ref, _toConsumableArray(lines));
          var svgLines = NailsAndStringDrawer.linesToSVGLines(lines);
          svgLines.map(function (svgLine) {
            return _this.svg.appendChild(svgLine);
          });
        });
      });
    }
  }, {
    key: 'generateLines',
    value: function generateLines(triangle) {
      // Get Triangle Corners
      var a = new _victor2.default(triangle.a.x, triangle.a.y);
      var b = new _victor2.default(triangle.b.x, triangle.b.y);
      var c = new _victor2.default(triangle.c.x, triangle.c.y);

      // Get subvectors between corners dependent on the given Line Count
      var abStepSice = new _victor2.default(b.x, b.y).subtract(a).divide(new _victor2.default(this.numLines, this.numLines));
      var bcStepSice = new _victor2.default(c.x, c.y).subtract(b).divide(new _victor2.default(this.numLines, this.numLines));
      var caStepSice = new _victor2.default(a.x, a.y).subtract(c).divide(new _victor2.default(this.numLines, this.numLines));

      var lines = [];

      // Generate Lines between Triangle Edges
      for (var i = 0; i <= this.numLines; i += 1) {
        lines = [].concat(_toConsumableArray(lines), [NailsAndStringDrawer.generateLine(new _victor2.default(a.x, a.y).add(new _victor2.default(abStepSice.x, abStepSice.y).multiply(new _victor2.default(i, i))), new _victor2.default(b.x, b.y).add(new _victor2.default(bcStepSice.x, bcStepSice.y).multiply(new _victor2.default(i, i))), triangle.fill), NailsAndStringDrawer.generateLine(new _victor2.default(b.x, b.y).add(new _victor2.default(bcStepSice.x, bcStepSice.y).multiply(new _victor2.default(i, i))), new _victor2.default(c.x, c.y).add(new _victor2.default(caStepSice.x, caStepSice.y).multiply(new _victor2.default(i, i))), triangle.fill), NailsAndStringDrawer.generateLine(new _victor2.default(c.x, c.y).add(new _victor2.default(caStepSice.x, caStepSice.y).multiply(new _victor2.default(i, i))), new _victor2.default(a.x, a.y).add(new _victor2.default(abStepSice.x, abStepSice.y).multiply(new _victor2.default(i, i))), triangle.fill)]);
      }
      return lines;
    }

    // Helper Function to create Line Objects 

  }, {
    key: 'buildMenu',


    // Ugly and long code to create the Menu
    value: function buildMenu() {
      var _this2 = this;

      var menu = document.querySelector('#menu');
      var myMenu = document.createElement('div');
      myMenu.id = 'nailsAndLinesMenu';
      menu.insertBefore(myMenu, menu.childNodes[0]);

      // Triangulation Options
      var element = document.createElement('h4');
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
      this.accuracy = element;
      myMenu.appendChild(element);

      element = document.createElement('label');
      element.setAttribute('for', 'blur');
      element.innerText = 'Blur:';
      myMenu.appendChild(element);
      element = document.createElement('input');
      element.setAttribute('type', 'range');
      element.setAttribute('name', 'blur');
      element.setAttribute('min', '0');
      element.setAttribute('max', '30');
      element.setAttribute('value', '15');
      element.setAttribute('step', '1');
      element.addEventListener('change', function () {
        return _this2.draw();
      });
      this.blur = element;
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
      this.threshold = element;
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
      this.vertexCount = element;
      myMenu.appendChild(element);

      element = document.createElement('hr');
      myMenu.appendChild(element);

      // File Input
      element = document.createElement('h4');
      element.innerText = 'Line Options';
      myMenu.appendChild(element);
      element = document.createElement('label');
      element.setAttribute('for', 'lineDeviation');
      element.innerText = 'Line to Triangle deviation:';
      myMenu.appendChild(element);
      element = document.createElement('input');
      element.setAttribute('type', 'range');
      element.setAttribute('name', 'lineDeviation');
      element.setAttribute('min', '0.0');
      element.setAttribute('max', '0.2');
      element.setAttribute('step', '0.02');
      element.setAttribute('value', '0.02');
      element.addEventListener('change', function () {
        return _this2.draw();
      });
      this.lineDeviation = element;
      myMenu.appendChild(element);
      element = document.createElement('br');
      myMenu.appendChild(element);

      element = document.createElement('hr');
      myMenu.appendChild(element);
    }
  }, {
    key: 'clearSVG',
    value: function clearSVG() {
      while (this.svg.firstChild) {
        this.svg.removeChild(this.svg.firstChild);
      }
    }
  }], [{
    key: 'generateLine',
    value: function generateLine(vic1, vic2, color) {
      return {
        a: {
          x: vic1.x,
          y: vic1.y
        },
        b: {
          x: vic2.x,
          y: vic2.y
        },
        color: color
      };
    }

    // Helper Function to convert Line Objects to svg Lines

  }, {
    key: 'linesToSVGLines',
    value: function linesToSVGLines(lines) {
      return lines.map(function (line) {
        var svgLine = document.createElementNS('http://www.w3.org/2000/svg', 'line'); // Create a line in SVG's namespace
        svgLine.setAttribute('x1', line.a.x);
        svgLine.setAttribute('y1', line.a.y);
        svgLine.setAttribute('x2', line.b.x);
        svgLine.setAttribute('y2', line.b.y);
        svgLine.style.stroke = line.color;
        return svgLine;
      });
    }
  }]);

  return NailsAndStringDrawer;
}();

exports.default = NailsAndStringDrawer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.triangulate = factory());
}(this, (function () { 'use strict';

var clamp = function ( value, min, max ) {
	return value < min ? min : value > max ? max : value;
};

var clone = function (obj) {
	var result = false;
	
	if ( typeof obj !== 'undefined' ) {
		try {
			result = JSON.parse( JSON.stringify( obj ) );
		} catch ( e ) { }
	}
	
	return result;
};

var Canvas$1 = function Canvas ( width, height ) {
	if ( width === void 0 ) width = 300;
	if ( height === void 0 ) height = 150;

	if ( typeof window === 'undefined' ) {
		this.canvasEl = { width: width, height: height };
		this.ctx = null;
	} else {
		this.canvasEl = document.createElement( 'canvas' );
		this.canvasEl.width = width;
		this.canvasEl.height = height;
		this.ctx = this.canvasEl.getContext( '2d' );
	} 
};

var prototypeAccessors = { width: { configurable: true },height: { configurable: true } };

Canvas$1.prototype.getContext = function getContext () {
	return this.ctx;
};

Canvas$1.prototype.toDataURL = function toDataURL ( type, encoderOptions, cb ) {
	if ( typeof cb === 'function' ) {
		cb( this.canvasEl.toDataURL( type, encoderOptions ) );
	} else {
		return this.canvasEl.toDataURL( type, encoderOptions );
	}
};
	
prototypeAccessors.width.get = function () {
	return this.canvasEl.width;
};
	
prototypeAccessors.width.set = function ( newWidth ) {
	this.canvasEl.width = newWidth;
};

prototypeAccessors.height.get = function () {
	return this.canvasEl.height;
};

prototypeAccessors.height.set = function ( newHeight ) {
	this.canvasEl.height = newHeight;
};

Object.defineProperties( Canvas$1.prototype, prototypeAccessors );

if ( typeof window !== 'undefined' ) {
	Canvas$1.Image = Image;
}

// import Canvas from 'canvas';
// import Canvas from './browser.js';

var makeCanvasAndContext = function ( size, options, dpr, format ) {
	var backgroundColor = options && options.backgroundColor ? options.backgroundColor : false;
	var canvas = new Canvas$1( size.width * dpr, size.height * dpr, format );
	var ctx = canvas.getContext( '2d' );

	if ( backgroundColor ) {
		ctx.fillStyle = backgroundColor;
		ctx.fillRect( 0, 0, size.width * dpr, size.height * dpr );
		ctx.fillStyle = 'transparent';
	}

	return {
		canvas: canvas,
		ctx: ctx
	};
};

/**
 * Transform CSS color definition to RGBA
 * @param  {String} color CSS color (name,HSL,RGB,HEX..)
 * @return {Object}       RGBA color object
 */
var toColor = function (color) {
	var size = 1;		// single pixel
	var ctx = makeCanvasAndContext( { width: size, height: size }, { }, 1, true ).ctx;
	ctx.fillStyle = color;
	ctx.fillRect( 0, 0, size, size );
	
	// Read the pixel, and get RGBA values
	var data = ctx.getImageData( 0, 0, size, size ).data;
	
	return {
		r: data[0],
		g: data[1],
		b: data[2],
		a: data[3] / 255		// For alpha we scale to 0..1 float
	};
};

var defaultParams = {
	accuracy: 0.7,
	blur: 4,
	fill: true,
	stroke: true,
	strokeWidth: 0.5,
	lineJoin: 'miter',
	vertexCount: 700,
	threshold: 50,
	transparentColor: false
};

var allowedLineJoins = [ 'miter', 'round', 'bevel' ];

var sanitizeInput = function (params) {
	
	params = clone( params );

	if ( typeof params !== 'object' ) {
		params = { };
	}

	if ( typeof params.accuracy !== 'number' || isNaN( params.accuracy ) ) {
		params.accuracy = defaultParams.accuracy;
	} else {
		params.accuracy = clamp( params.accuracy, 0, 1 );
	}

	if ( typeof params.blur !== 'number' || isNaN( params.blur ) ) {
		params.blur = defaultParams.blur;	
	}

	if ( params.blur <= 0 ) {
		params.blur = 1;
	}

	if ( typeof params.fill !== 'string' && typeof params.fill !== 'boolean' ) {
		params.fill = defaultParams.fill;
	}

	if ( typeof params.stroke !== 'string' && typeof params.stroke !== 'boolean' ) {
		params.stroke = defaultParams.stroke;
	}

	if ( typeof params.strokeWidth !== 'number' || isNaN( params.strokeWidth ) ) {
		params.strokeWidth = defaultParams.strokeWidth;
	}

	if ( typeof params.threshold !== 'number' || isNaN( params.threshold ) ) {
		params.threshold = defaultParams.threshold;
	} else {
		params.threshold = clamp( params.threshold, 1, 100 );
	}

	if ( typeof params.lineJoin !== 'string' || allowedLineJoins.indexOf( params.lineJoin ) === -1 ) {
		params.lineJoin = defaultParams.lineJoin;
	}

	if ( params.gradients && params.fill ) {
		params.gradients = true;
	} else {
		params.gradients = false;
	}

	if ( params.gradients ) {
		if (
			typeof params.gradientStops !== 'number' ||
			isNaN( params.gradientStops ) ||
			params.gradientStops < 2
		) {
			params.gradientStops = 2;
		}

		params.gradientStops = Math.round( params.gradientStops );
	}

	if ( typeof params.vertexCount !== 'number' || isNaN( params.vertexCount ) ) {
		params.vertexCount = defaultParams.vertexCount;
	}

	if ( params.vertexCount <= 0 ) {
		params.vertexCount = 1;
	}

	if ( typeof params.transparentColor !== 'string' && typeof params.transparentColor !== 'boolean' ) {
		params.transparentColor = defaultParams.transparentColor;
	}

	// "transparentColor=true" is meaningless
	if ( typeof params.transparentColor === true ) {
		params.transparentColor = false;
	}

	// Transform `transparentColor` string to RGBA color object
	if ( typeof params.transparentColor === 'string' ) {
		params.transparentColor = toColor( params.transparentColor );
	}

	return params;
};

var fromImageToImageData = function (image) {
	if ( image instanceof HTMLImageElement ) {
		// http://stackoverflow.com/a/3016076/229189
		if ( ! image.naturalWidth || ! image.naturalHeight || image.complete === false ) {
			throw new Error( "This this image hasn't finished loading: " + image.src );
		}

		var canvas = new Canvas$1( image.naturalWidth, image.naturalHeight );
		var ctx = canvas.getContext( '2d' );
		
		ctx.drawImage( image, 0, 0, canvas.width, canvas.height );

		var imageData = ctx.getImageData( 0, 0, canvas.width, canvas.height );

		if ( imageData.data && imageData.data.length ) {
			if ( typeof imageData.width === 'undefined' ) {
				imageData.width = image.naturalWidth;
			}

			if ( typeof imageData.height === 'undefined' ) {
				imageData.height = image.naturalHeight;
			}
		}
		
		return imageData;
	} else {
		throw new Error( 'This object does not seem to be an image.' );
		return;
	}
};

// import objectAssign from 'object-assign'
var objectAssign = Object.assign;

/**
 * Transform color object to rgb/a
 * @param  {Object} colorObj RGB(A) color object
 * @return {String}       	 rgba css string
 */

var toRGBA = function (colorObj) {
	var c = objectAssign( { a: 1 }, colorObj );	// rgb-to-rgba:  alpha is optionally set to 1
	return ("rgba(" + (c.r) + ", " + (c.g) + ", " + (c.b) + ", " + (c.a) + ")")
};

var drawPolygonsOnContext = function ( ctx, polygons, size, dpr ) {
	dpr = dpr || 1;

	polygons.forEach( function ( polygon, index ) {
		ctx.beginPath();
		ctx.moveTo( polygon.a.x * dpr, polygon.a.y * dpr );
		ctx.lineTo( polygon.b.x * dpr, polygon.b.y * dpr );
		ctx.lineTo( polygon.c.x * dpr, polygon.c.y * dpr );
		ctx.lineTo( polygon.a.x * dpr, polygon.a.y * dpr );
		
		// http://weblogs.asp.net/dwahlin/rendering-linear-gradients-using-the-html5-canvas
		if ( polygon.gradient ) {
			var gradient = ctx.createLinearGradient(
				polygon.gradient.x1 * dpr,
				polygon.gradient.y1 * dpr,
				polygon.gradient.x2 * dpr,
				polygon.gradient.y2 * dpr
			);

			var lastColorIndex = polygon.gradient.colors.length - 1;
			
			polygon.gradient.colors.forEach( function ( color, index ) {
				var rgb = toRGBA( color );
				gradient.addColorStop( index / lastColorIndex, rgb );
			} );

			ctx.fillStyle = gradient;
			ctx.fill();

			if ( polygon.strokeWidth > 0 ) {
				ctx.strokeStyle = gradient;
				ctx.lineWidth = polygon.strokeWidth * dpr;
				ctx.lineJoin = polygon.lineJoin;
				ctx.stroke();
			}
		} else {
			if ( polygon.fill ) {
				ctx.fillStyle = polygon.fill;
				ctx.fill();
			}

			if ( polygon.strokeColor ) {
				ctx.strokeStyle = polygon.strokeColor;
				ctx.lineWidth = polygon.strokeWidth * dpr;
				ctx.lineJoin = polygon.lineJoin;
				ctx.stroke();
			}
		}

		ctx.closePath();
	} );

	return ctx;
};

var polygonsToImageData = function ( polygons, size, options ) {
	var dpr = options && options.dpr ? options.dpr : 1;	
	var ctx = makeCanvasAndContext( size, options, dpr, true ).ctx;
	
	drawPolygonsOnContext( ctx, polygons, size, dpr );

	return ctx.getImageData( 0, 0, size.width * dpr, size.height * dpr );
};

var polygonsToDataURL = function ( polygons, size, options ) {
	var dpr = options && options.dpr ? options.dpr : 1;	
	var canvasData = makeCanvasAndContext( size, options, dpr );

	drawPolygonsOnContext( canvasData.ctx, polygons, size, dpr );

	return canvasData.canvas.toDataURL();
};

// http://stackoverflow.com/questions/6918597/convert-canvas-or-control-points-to-svg
// https://developer.mozilla.org/en-US/docs/SVG/Element/polygon
var polygonsToSVG = function ( polygons, size ) {
	var defStr = '';

	if ( polygons.length && polygons[0].gradient ) {
		defStr = '<defs>';
	}

	var polygonStr = '';

	polygons.forEach( function ( polygon, index ) {
		var a = polygon.a;
		var b = polygon.b;
		var c = polygon.c;

		polygonStr += "<polygon points=\"" + (a.x) + "," + (a.y) + " " + (b.x) + "," + (b.y) + " " + (c.x) + "," + (c.y) + "\"";

		if ( polygon.gradient ) {
			var bb = polygon.boundingBox;
			var x1 = ( ( polygon.gradient.x1 - bb.x ) / bb.width * 100 ).toFixed( 3 );
			var y1 = ( ( polygon.gradient.y1 - bb.y ) / bb.height * 100 ).toFixed( 3 );
			var x2 = ( ( polygon.gradient.x2 - bb.x ) / bb.width * 100 ).toFixed( 3 );
			var y2 = ( ( polygon.gradient.y2 - bb.y ) / bb.height * 100 ).toFixed( 3 );

			defStr += "\n\t<linearGradient id=\"gradient-" + index + "\" x1=\"" + x1 + "%\" y1=\"" + y1 + "%\" x2=\"" + x2 + "%\" y2=\"" + y2 + "%\">";

			var lastColorIndex = polygon.gradient.colors.length - 1;
			
			polygon.gradient.colors.forEach( function ( color, index ) {
				var rgb = toRGBA( color );
				var offset = ( ( index / lastColorIndex ) * 100 ).toFixed( 3 );
				defStr += "\n\t\t\t\t\t<stop offset=\"" + offset + "%\" stop-color=\"" + rgb + "\"/>\n\t\t\t\t";
			} );
	
			defStr += "</linearGradient>";
			polygonStr += " fill=\"url(#gradient-" + index + ")\"";

			if ( polygon.strokeWidth > 0 ) {
				polygonStr += " stroke=\"url(#gradient-" + index + ")\" stroke-width=\"" + (polygon.strokeWidth) + "\" stroke-linejoin=\"" + (polygon.lineJoin) + "\"";
			}

		} else {
			if ( polygon.fill ) {
				polygonStr += " fill=\"" + (polygon.fill) + "\"";
			} else {
				polygonStr += " fill=\"transparent\"";
			}

			if ( polygon.strokeColor ) {
				polygonStr += " stroke=\"" + (polygon.strokeColor) + "\" stroke-width=\"" + (polygon.strokeWidth) + "\" stroke-linejoin=\"" + (polygon.lineJoin) + "\"";
			}
		}


		polygonStr += "/>\n\t";
	} );

	if ( defStr.length ) {
		defStr += "\n\t\t</defs>";
	}

	var svg = "<?xml version=\"1.0\" standalone=\"yes\"?>\n<svg width=\"" + (size.width) + "\" height=\"" + (size.height) + "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" >\n\t" + defStr + "\n\t" + polygonStr + "\n</svg>";

	return svg;
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var delaunay = createCommonjsModule(function (module) {
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;

  var A = b.x - a.x,
      B = b.y - a.y,
      C = c.x - a.x,
      D = c.y - a.y,
      E = A * (a.x + b.x) + B * (a.y + b.y),
      F = C * (a.x + c.x) + D * (a.y + c.y),
      G = 2 * (A * (c.y - b.y) - B * (c.x - b.x)),
      minx, miny, dx, dy;

  /* If the points of the triangle are collinear, then just find the
   * extremes and use the midpoint as the center of the circumcircle. */
  if(Math.abs(G) < 0.000001) {
    minx = Math.min(a.x, b.x, c.x);
    miny = Math.min(a.y, b.y, c.y);
    dx   = (Math.max(a.x, b.x, c.x) - minx) * 0.5;
    dy   = (Math.max(a.y, b.y, c.y) - miny) * 0.5;

    this.x = minx + dx;
    this.y = miny + dy;
    this.r = dx * dx + dy * dy;
  }

  else {
    this.x = (D*E - B*F) / G;
    this.y = (A*F - C*E) / G;
    dx = this.x - a.x;
    dy = this.y - a.y;
    this.r = dx * dx + dy * dy;
  }
}

Triangle.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(this.a.x, this.a.y);
  ctx.lineTo(this.b.x, this.b.y);
  ctx.lineTo(this.c.x, this.c.y);
  ctx.closePath();
  ctx.stroke();
};

function byX(a, b) {
  return b.x - a.x
}

function dedup(edges) {
  var j = edges.length,
      a, b, i, m, n;

  outer: while(j) {
    b = edges[--j];
    a = edges[--j];
    i = j;
    while(i) {
      n = edges[--i];
      m = edges[--i];
      if((a === m && b === n) || (a === n && b === m)) {
        edges.splice(j, 2);
        edges.splice(i, 2);
        j -= 2;
        continue outer
      }
    }
  }
}

function triangulate(vertices) {
  /* Bail if there aren't enough vertices to form any triangles. */
  if(vertices.length < 3)
    { return [] }

  /* Ensure the vertex array is in order of descending X coordinate
   * (which is needed to ensure a subquadratic runtime), and then find
   * the bounding box around the points. */
  vertices.sort(byX);

  var i    = vertices.length - 1,
      xmin = vertices[i].x,
      xmax = vertices[0].x,
      ymin = vertices[i].y,
      ymax = ymin;

  while(i--) {
    if(vertices[i].y < ymin) { ymin = vertices[i].y; }
    if(vertices[i].y > ymax) { ymax = vertices[i].y; }
  }

  /* Find a supertriangle, which is a triangle that surrounds all the
   * vertices. This is used like something of a sentinel value to remove
   * cases in the main algorithm, and is removed before we return any
   * results.
   *
   * Once found, put it in the "open" list. (The "open" list is for
   * triangles who may still need to be considered; the "closed" list is
   * for triangles which do not.) */
  var dx     = xmax - xmin,
      dy     = ymax - ymin,
      dmax   = (dx > dy) ? dx : dy,
      xmid   = (xmax + xmin) * 0.5,
      ymid   = (ymax + ymin) * 0.5,
      open   = [
        new Triangle(
          {x: xmid - 20 * dmax, y: ymid -      dmax, __sentinel: true},
          {x: xmid            , y: ymid + 20 * dmax, __sentinel: true},
          {x: xmid + 20 * dmax, y: ymid -      dmax, __sentinel: true}
        )
      ],
      closed = [],
      edges = [],
      j, a, b;

  /* Incrementally add each vertex to the mesh. */
  i = vertices.length;
  while(i--) {
    /* For each open triangle, check to see if the current point is
     * inside it's circumcircle. If it is, remove the triangle and add
     * it's edges to an edge list. */
    edges.length = 0;
    j = open.length;
    while(j--) {
      /* If this point is to the right of this triangle's circumcircle,
       * then this triangle should never get checked again. Remove it
       * from the open list, add it to the closed list, and skip. */
      dx = vertices[i].x - open[j].x;
      if(dx > 0 && dx * dx > open[j].r) {
        closed.push(open[j]);
        open.splice(j, 1);
        continue
      }

      /* If not, skip this triangle. */
      dy = vertices[i].y - open[j].y;
      if(dx * dx + dy * dy > open[j].r)
        { continue }

      /* Remove the triangle and add it's edges to the edge list. */
      edges.push(
        open[j].a, open[j].b,
        open[j].b, open[j].c,
        open[j].c, open[j].a
      );
      open.splice(j, 1);
    }

    /* Remove any doubled edges. */
    dedup(edges);

    /* Add a new triangle for each edge. */
    j = edges.length;
    while(j) {
      b = edges[--j];
      a = edges[--j];
      open.push(new Triangle(a, b, vertices[i]));
    }
  }

  /* Copy any remaining open triangles to the closed list, and then
   * remove any triangles that share a vertex with the supertriangle. */
  Array.prototype.push.apply(closed, open);

  i = closed.length;
  while(i--)
    { if(closed[i].a.__sentinel ||
       closed[i].b.__sentinel ||
       closed[i].c.__sentinel)
      { closed.splice(i, 1); } }

  /* Yay, we're done! */
  return closed
}

{
    module.exports = {
        Triangle: Triangle,
        triangulate: triangulate
    };
}
});

var delaunay_2 = delaunay.triangulate;

var sobel = createCommonjsModule(function (module, exports) {
(function(root) {
  'use strict';

  function Sobel(imageData) {
    if (!(this instanceof Sobel)) {
      return new Sobel(imageData);
    }

    var width = imageData.width;
    var height = imageData.height;

    var kernelX = [
      [-1,0,1],
      [-2,0,2],
      [-1,0,1]
    ];

    var kernelY = [
      [-1,-2,-1],
      [0,0,0],
      [1,2,1]
    ];

    var sobelData = [];
    var grayscaleData = [];

    function bindPixelAt(data) {
      return function(x, y, i) {
        i = i || 0;
        return data[((width * y) + x) * 4 + i];
      };
    }

    var data = imageData.data;
    var pixelAt = bindPixelAt(data);
    var x, y;

    for (y = 0; y < height; y++) {
      for (x = 0; x < width; x++) {
        var r = pixelAt(x, y, 0);
        var g = pixelAt(x, y, 1);
        var b = pixelAt(x, y, 2);

        var avg = (r + g + b) / 3;
        grayscaleData.push(avg, avg, avg, 255);
      }
    }

    pixelAt = bindPixelAt(grayscaleData);

    for (y = 0; y < height; y++) {
      for (x = 0; x < width; x++) {
        var pixelX = (
            (kernelX[0][0] * pixelAt(x - 1, y - 1)) +
            (kernelX[0][1] * pixelAt(x, y - 1)) +
            (kernelX[0][2] * pixelAt(x + 1, y - 1)) +
            (kernelX[1][0] * pixelAt(x - 1, y)) +
            (kernelX[1][1] * pixelAt(x, y)) +
            (kernelX[1][2] * pixelAt(x + 1, y)) +
            (kernelX[2][0] * pixelAt(x - 1, y + 1)) +
            (kernelX[2][1] * pixelAt(x, y + 1)) +
            (kernelX[2][2] * pixelAt(x + 1, y + 1))
        );

        var pixelY = (
          (kernelY[0][0] * pixelAt(x - 1, y - 1)) +
          (kernelY[0][1] * pixelAt(x, y - 1)) +
          (kernelY[0][2] * pixelAt(x + 1, y - 1)) +
          (kernelY[1][0] * pixelAt(x - 1, y)) +
          (kernelY[1][1] * pixelAt(x, y)) +
          (kernelY[1][2] * pixelAt(x + 1, y)) +
          (kernelY[2][0] * pixelAt(x - 1, y + 1)) +
          (kernelY[2][1] * pixelAt(x, y + 1)) +
          (kernelY[2][2] * pixelAt(x + 1, y + 1))
        );

        var magnitude = Math.sqrt((pixelX * pixelX) + (pixelY * pixelY))>>>0;

        sobelData.push(magnitude, magnitude, magnitude, 255);
      }
    }

    var clampedArray = sobelData;

    if (typeof Uint8ClampedArray === 'function') {
      clampedArray = new Uint8ClampedArray(sobelData);
    }

    clampedArray.toImageData = function() {
      return Sobel.toImageData(clampedArray, width, height);
    };

    return clampedArray;
  }

  Sobel.toImageData = function toImageData(data, width, height) {
    if (typeof ImageData === 'function' && Object.prototype.toString.call(data) === '[object Uint16Array]') {
      return new ImageData(data, width, height);
    } else {
      if (typeof window === 'object' && typeof window.document === 'object') {
        var canvas = document.createElement('canvas');

        if (typeof canvas.getContext === 'function') {
          var context = canvas.getContext('2d');
          var imageData = context.createImageData(width, height);
          imageData.data.set(data);
          return imageData;
        } else {
          return new FakeImageData(data, width, height);
        }
      } else {
        return new FakeImageData(data, width, height);
      }
    }
  };

  function FakeImageData(data, width, height) {
    return {
      width: width,
      height: height,
      data: data
    };
  }

  {
    if ('object' !== 'undefined' && module.exports) {
      exports = module.exports = Sobel;
    }
    exports.Sobel = Sobel;
  }

})(commonjsGlobal);
});

var isImageData = function (imageData) {
	return (
		imageData && 
		typeof imageData.width === 'number' &&
		typeof imageData.height === 'number' &&
		imageData.data &&
		typeof imageData.data.length === 'number' &&
		typeof imageData.data === 'object'
	);
};

var copyImageData = function (imageData) {
	if ( isImageData ( imageData ) ) {
		if ( typeof Uint8ClampedArray === 'undefined' ) {
			if ( typeof window === 'undefined' ) {
				throw new Error( "Can't copy imageData in webworker without Uint8ClampedArray support." );
				return imageData;
			} else {
				return copyImageDataWithCanvas( imageData );
			}
		} else {
			var clampedArray = new Uint8ClampedArray( imageData.data );

			if ( typeof ImageData === 'undefined' ) {
				// http://stackoverflow.com/a/15238036/229189
				return {
					width: imageData.width,
					height: imageData.height,
					data: clampedArray
				};
			} else {
				// http://stackoverflow.com/a/15908922/229189#comment57192591_15908922
				var result;

				try {
					result = new ImageData( clampedArray, imageData.width, imageData.height );
				} catch ( err ) {
					if ( typeof window === 'undefined' ) {
						throw new Error( "Can't copy imageData in webworker without proper ImageData() support." );
						result = imageData;
					} else {
						result = copyImageDataWithCanvas( imageData );
					}
				}

				return result;
			}
		}
	} else {
		throw new Error( 'Given imageData object is not useable.' );
		return;
	}
};

// http://stackoverflow.com/a/11918126/229189
function copyImageDataWithCanvas ( imageData ) {
	var canvas = new Canvas$1( imageData.width, imageData.height );
	var ctx = canvas.getContext( '2d' );

	ctx.putImageData( imageData, 0, 0 );
				
	return ctx.getImageData( 0, 0, imageData.width, imageData.height );
}

/*
    StackBlur - a fast almost Gaussian Blur For Canvas

    Version:     0.5
    Author:        Mario Klingemann
    Contact:     mario@quasimondo.com
    Website:    http://www.quasimondo.com/StackBlurForCanvas
    Twitter:    @quasimondo

    In case you find this class useful - especially in commercial projects -
    I am not totally unhappy for a small donation to my PayPal account
    mario@quasimondo.de

    Or support me on flattr:
    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

    Copyright (c) 2010 Mario Klingemann

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    */

var mul_table = [
    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];


var shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

function BlurStack () {
	this.r = 0;
	this.g = 0;
	this.b = 0;
	this.a = 0;
	this.next = null;
}

var stackblur = function ( imageData, top_x, top_y, width, height, radius ) {
	var pixels = imageData.data;

	var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
		r_out_sum, g_out_sum, b_out_sum, a_out_sum,
		r_in_sum, g_in_sum, b_in_sum, a_in_sum,
		pr, pg, pb, pa, rbs;

	var div = radius + radius + 1;
	var widthMinus1  = width - 1;
	var heightMinus1 = height - 1;
	var radiusPlus1  = radius + 1;
	var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;

	var stackStart = new BlurStack();
	var stack = stackStart;
	
	for ( i = 1; i < div; i++ ) {
		stack = stack.next = new BlurStack();
		if (i == radiusPlus1) { var stackEnd = stack; }
	}
	stack.next = stackStart;
	
	var stackIn = null;
	var stackOut = null;

	yw = yi = 0;

	var mul_sum = mul_table[radius];
	var shg_sum = shg_table[radius];

	for ( y = 0; y < height; y++ ) {
		r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

		r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
		g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
		b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
		a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );

		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		a_sum += sumFactor * pa;

		stack = stackStart;

		for ( i = 0; i < radiusPlus1; i++ ) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}

		for ( i = 1; i < radiusPlus1; i++ ) {
			p = yi + ( ( widthMinus1 < i ? widthMinus1 : i ) << 2 );
			r_sum += ( stack.r = ( pr = pixels[p] ) ) * ( rbs = radiusPlus1 - i );
			g_sum += ( stack.g = ( pg = pixels[p+1] ) ) * rbs;
			b_sum += ( stack.b = ( pb = pixels[p+2] ) ) * rbs;
			a_sum += ( stack.a = ( pa = pixels[p+3] ) ) * rbs;

			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			a_in_sum += pa;

			stack = stack.next;
		}


		stackIn = stackStart;
		stackOut = stackEnd;

		for (x = 0; x < width; x++) {
			pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
			
			if (pa != 0) {
				pa = 255 / pa;
				pixels[yi]   = ( ( r_sum * mul_sum ) >> shg_sum ) * pa;
				pixels[yi+1] = ( ( g_sum * mul_sum ) >> shg_sum ) * pa;
				pixels[yi+2] = ( ( b_sum * mul_sum ) >> shg_sum ) * pa;
			} else {
				pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
			}

			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			a_sum -= a_out_sum;

			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			a_out_sum -= stackIn.a;

			p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;

			r_in_sum += ( stackIn.r = pixels[p] );
			g_in_sum += ( stackIn.g = pixels[p+1] );
			b_in_sum += ( stackIn.b = pixels[p+2] );
			a_in_sum += ( stackIn.a = pixels[p+3] );

			r_sum += r_in_sum;
			g_sum += g_in_sum;
			b_sum += b_in_sum;
			a_sum += a_in_sum;

			stackIn = stackIn.next;

			r_out_sum += ( pr = stackOut.r );
			g_out_sum += ( pg = stackOut.g );
			b_out_sum += ( pb = stackOut.b );
			a_out_sum += ( pa = stackOut.a );

			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			a_in_sum -= pa;

			stackOut = stackOut.next;

			yi += 4;
		}
		yw += width;
	}


	for ( x = 0; x < width; x++ ) {
		g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

		yi = x << 2;
		r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
		g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
		b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
		a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );

		r_sum += sumFactor * pr;
		g_sum += sumFactor * pg;
		b_sum += sumFactor * pb;
		a_sum += sumFactor * pa;

		stack = stackStart;

		for ( i = 0; i < radiusPlus1; i++) {
			stack.r = pr;
			stack.g = pg;
			stack.b = pb;
			stack.a = pa;
			stack = stack.next;
		}

		yp = width;

		for ( i = 1; i <= radius; i++ ) {
			yi = ( yp + x ) << 2;

			r_sum += ( stack.r = ( pr = pixels[yi] ) ) * (rbs = radiusPlus1 - i);
			g_sum += ( stack.g = ( pg = pixels[yi+1] ) ) * rbs;
			b_sum += ( stack.b = ( pb = pixels[yi+2] ) ) * rbs;
			a_sum += ( stack.a = ( pa = pixels[yi+3] ) ) * rbs;

			r_in_sum += pr;
			g_in_sum += pg;
			b_in_sum += pb;
			a_in_sum += pa;

			stack = stack.next;

			if ( i < heightMinus1 ) {
				yp += width;
			}
		}

		yi = x;
		stackIn = stackStart;
		stackOut = stackEnd;

		for ( y = 0; y < height; y++ ) {
			p = yi << 2;
			pixels[p+3] = pa = ( a_sum * mul_sum ) >> shg_sum;
			
			if ( pa > 0 ) {
				pa = 255 / pa;
				pixels[p]   = ( ( r_sum * mul_sum ) >> shg_sum) * pa;
				pixels[p+1] = ( ( g_sum * mul_sum ) >> shg_sum) * pa;
				pixels[p+2] = ( ( b_sum * mul_sum ) >> shg_sum) * pa;
			} else {
				pixels[p] = pixels[p+1] = pixels[p+2] = 0;
			}

			r_sum -= r_out_sum;
			g_sum -= g_out_sum;
			b_sum -= b_out_sum;
			a_sum -= a_out_sum;

			r_out_sum -= stackIn.r;
			g_out_sum -= stackIn.g;
			b_out_sum -= stackIn.b;
			a_out_sum -= stackIn.a;

			p = ( x + ( ( ( p = y + radiusPlus1 ) < heightMinus1 ? p : heightMinus1 ) * width ) ) << 2;

			r_sum += ( r_in_sum += ( stackIn.r = pixels[p] ) );
			g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1] ) );
			b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2] ) );
			a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3] ) );

			stackIn = stackIn.next;

			r_out_sum += ( pr = stackOut.r );
			g_out_sum += ( pg = stackOut.g );
			b_out_sum += ( pb = stackOut.b );
			a_out_sum += ( pa = stackOut.a );

			r_in_sum -= pr;
			g_in_sum -= pg;
			b_in_sum -= pb;
			a_in_sum -= pa;

			stackOut = stackOut.next;

			yi += width;
		}
	}

	return imageData;
};

var greyscale = function (imageData) {
	var len = imageData.data.length;
	var brightness;

	for ( var i = 0; i < len; i += 4 ) {
		brightness = 0.34 * imageData.data[i] + 0.5 * imageData.data[i + 1] + 0.16 * imageData.data[i + 2];

		imageData.data[i] = brightness;
		imageData.data[i + 1] = brightness;
		imageData.data[i + 2] = brightness;
	}
		
	return imageData;
};

// most parts taken from http://jsdo.it/akm2/xoYx
// (starting line 293++)
var getEdgePoints = function ( imageData, threshold ) {
	// only check every 2nd pixel in imageData to save some time.
	var multiplier = 2;
	var width = imageData.width;
	var height = imageData.height;
	var data = imageData.data;
	var points = [ ];
	var x, y, row, col, sx, sy, step, sum, total;

	for ( y = 0; y < height; y += multiplier ) {
		for ( x = 0; x < width; x += multiplier ) {
			sum = total = 0;

			for ( row = -1; row <= 1; row++ ) {
				sy = y + row;
				step = sy * width;

				if ( sy >= 0 && sy < height ) {
					for ( col = -1; col <= 1; col++ ) {
						sx = x + col;

						if ( sx >= 0 && sx < width ) {
							sum += data[( sx + step ) << 2];
							total++;
						}
					}
				}
			}

			if ( total ) {
				sum /= total;
			}

			if ( sum > threshold ) {
				points.push( { x: x, y: y } );
			}
		}
	}

	return points;
};

function addVertex ( x, y, hash ) {
	var resultKey = x + '|' + y;

	if ( ! hash[resultKey] ) {
		hash[resultKey] = { x: x, y: y };
	}

	resultKey = null;
}

var getVerticesFromPoints = function ( points, maxPointCount, accuracy, width, height ) {
	// using hash for all points to make sure we have a set of unique vertices.
	var resultHash = {};

	// use 25% of max point count to create a background grid.
	// this avoids having too many "big" triangles in areas of the image with low contrast 
	// next to very small ones in areas with high contrast
	// for every other row, start the x value at > 0, so the grid doesn't look too regular
	var gridPointCount = Math.max( ~~( maxPointCount * ( 1 - accuracy ) ), 5 );

	// http://stackoverflow.com/a/4107092/229189
	var gridColumns = Math.round( Math.sqrt( gridPointCount ) );
	var gridRows = Math.round( Math.ceil( gridPointCount / gridColumns ) );
	
	var xIncrement = ~~( width / gridColumns );
	var yIncrement = ~~( height / gridRows );

	var rowIndex = 0;
	var startX = 0;

	var x = 0;
	var y = 0;

	for ( y = 0; y < height; y+= yIncrement ){
		rowIndex++;

		startX = rowIndex % 2 === 0 ? ~~( xIncrement / 2 ) : 0; 

		for ( x = startX; x < width; x += xIncrement ) {
			if ( x < width && y < height ) {
				// "distorting" the grid a little bit so that the
				// background vertices don't appear to be on a straight line (which looks boring)
				addVertex(
					~~( x + ( Math.cos( y ) * ( yIncrement ) ) ),
					~~( y + ( Math.sin( x ) * ( xIncrement ) ) ),
					resultHash
				);
			}
		}
	}
	
	// add points in the corners
	addVertex( 0, 0, resultHash );
	addVertex( width - 1, 0, resultHash );
	addVertex( width - 1, height - 1, resultHash );
	addVertex( 0, height - 1, resultHash );

	// add points from all edge points
	var remainingPointCount = maxPointCount - Object.keys( resultHash ).length;
	var edgePointCount = points.length;
	var increment = ~~( edgePointCount / remainingPointCount );

	if ( maxPointCount > 0 && increment > 0 ) {
		var i = 0;

		for ( i = 0; i < edgePointCount; i += increment ) {
			addVertex( points[i].x, points[i].y, resultHash );
		}
	}

	points = null;

	return Object.keys( resultHash ).map( function (key) {
		return resultHash[key];
	} );
};

var getBoundingBox = function (points) {
	var xMin = Infinity;
	var xMax = -Infinity;
	var yMin = Infinity;
	var yMax = -Infinity;

	points.forEach( function (p) {
		if ( p.x < xMin ) {
			xMin = p.x;
		}

		if ( p.y < yMin ) {
			yMin = p.y;
		}

		if ( p.x > xMax ) {
			xMax = p.x;
		}

		if ( p.y > yMax ) {
			yMax = p.y;
		}
	} );

	return {
		x: xMin,
		y: yMin,
		width: xMax - xMin,
		height: yMax - yMin
	};
};

var addBoundingBoxesToPolygons = function ( polygons, colorData, params ) {
	polygons.forEach( function (polygon) {
		polygon.boundingBox = getBoundingBox( [ polygon.a, polygon.b, polygon.c ] );
	} );

	return polygons.filter( function (polygon) {
		return polygon.boundingBox.width > 0 && polygon.boundingBox.height > 0;
	} );
};

/**
 * Get color object by position
 * @param  {Object} pos         {x,y} object
 * @param  {Object} colorData   Image color data object
 * @param  {Object} [transparentColor] (optional) RGBA color object. Used to set specific color to transparent pixels
 * @return {Object}             RGBA color object
 */
var getColorByPos = function ( pos, colorData, transparentColor ) {
	var x = clamp( pos.x, 1, colorData.width - 2 );
	var y = clamp( pos.y, 1, colorData.height - 2 );
	var index = ( ( x | 0 ) + ( y | 0 ) * colorData.width ) << 2;

	if ( index >= colorData.data.length ) {
		index = colorData.data.length - 5;
	}

	var alpha = colorData.data[index + 3] / 255;

	// Return RGBA color object
	return ( transparentColor && alpha === 0 ) ? transparentColor : {
		r: colorData.data[index],
		g: colorData.data[index + 1],
		b: colorData.data[index + 2],
		a: alpha
	};
};

/**
 * Get polygon's center point
 * @param  {Object} polygon Polygon object
 * @return {Object}         Point coordinates {x,y}
 */
var polygonCenter = function (polygon) {
	return {
		x: ( polygon.a.x + polygon.b.x + polygon.c.x ) * 0.33333,
		y: ( polygon.a.y + polygon.b.y + polygon.c.y ) * 0.33333
	};
};

/**
 * Is color transparent ?
 * @param  {Object} color Color object
 * @return {Boolean}      Is transparent?
 */
var isTransparent = function (color) {
	return color.a === 0;
};

var addColorToPolygons = function ( polygons, colorData, params ) {
	var fill = params.fill;
	var stroke = params.stroke;
	var strokeWidth = params.strokeWidth;
	var lineJoin = params.lineJoin;
	var transparentColor = params.transparentColor;
	var fillColor = typeof fill === 'string' ? fill : false;
	var strokeColor = typeof stroke === 'string' ? stroke : false;

	/**
	 * Color override logic
	 * @param  {Object} color    Color object
	 * @param  {String} override Override color (fillColor/strokeColor)
	 * @return {String}          CSS formatted color (rgba,..)
	 */
	var getColor = function ( color, override ) {
		var t = ( isTransparent(color) && transparentColor );	// Color is transparent, and transparentColor override is defined
		var c = t ? transparentColor : color;
		return ( override && !t ) ? override : toRGBA( c );		// Priority: transparentColor -> override -> supplied color
	};

	polygons.forEach( function (polygon) {
		var color = getColorByPos( polygonCenter( polygon ), colorData );

		if ( fill ) {
			polygon.fill = getColor( color, fillColor );
		}

		if ( stroke ) {
			polygon.strokeColor = getColor(color, strokeColor);
			polygon.strokeWidth = strokeWidth;
			polygon.lineJoin = lineJoin;
		}
	} );

	return polygons;
};

//  http://stackoverflow.com/a/9733420/229189
var luminance = function (color) {
	var a = [ color.r, color.g, color.b ].map( function (v) {
		v /= 255;
		return ( v <= 0.03928 ) ? v / 12.92 : Math.pow( ( ( v + 0.055 ) / 1.055 ), 2.4 );
	} );

	return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

var distance = function ( a, b ) {
	var dx = b.x - a.x;
	var dy = b.y - a.y;

	return Math.sqrt( ( dx * dx ) + ( dy * dy ) );
};

var addGradientsToPolygons = function ( polygons, colorData, params ) {
	polygons.forEach( function (polygon) {
		var data = { };

		'abc'.split( '' ).forEach( function (key) {
			var color = getColorByPos( polygon[key], colorData, params.transparentColor );
			
			data[key] = {
				key: key,
				color: color,
				x: polygon[key].x,
				y: polygon[key].y
			};

			data[key].luminance = luminance( data[key].color );

			var otherKeys = 'abc'.replace( key, '' ).split( '' );

			data[key].median = {
				x: ( polygon[otherKeys[0]].x + polygon[otherKeys[1]].x ) / 2,
				y: ( polygon[otherKeys[0]].y + polygon[otherKeys[1]].y ) / 2
			};

			data[key].medianColor = getColorByPos( data[key].median, colorData, params.transparentColor );
			data[key].medianLuminance = luminance( data[key].medianColor );
		} );

		// sort by axis of most difference in luminance
		var pointsByDeltaInLuminance = [ data.a, data.b, data.c ].sort( function ( u, v ) {
			return Math.abs( u.luminance - u.medianLuminance ) - Math.abs( v.luminance - v.medianLuminance );
		} );

		var pointWithMostDeltaInLuminance = pointsByDeltaInLuminance[0];
		var startPoint = pointsByDeltaInLuminance[0];
		var endPoint = pointWithMostDeltaInLuminance.median;

		var gradienStopPositions = [ startPoint ];

		var startToEndDistance = distance( startPoint, endPoint );

		for ( var i = 1, len = params.gradientStops - 2; i < len; i++ ) {
			var pointDistance = i * ( startToEndDistance / params.gradientStops );
			var pointPercent = pointDistance / startToEndDistance;
			
			var point = {
				x: startPoint.x + pointPercent * ( endPoint.x - startPoint.x ), 
				y: startPoint.y + pointPercent * ( endPoint.y - startPoint.y )
			};

			gradienStopPositions.push( point );
		}

		gradienStopPositions.push( endPoint );

		polygon.gradient = {
			x1: pointWithMostDeltaInLuminance.x,
			y1: pointWithMostDeltaInLuminance.y,
			x2: pointWithMostDeltaInLuminance.median.x,
			y2: pointWithMostDeltaInLuminance.median.y,
			colors: gradienStopPositions.map( function (pos) {
				return getColorByPos( pos, colorData, params.transparentColor );
			} )
		};

		if ( params.stroke ) {
			polygon.strokeWidth = params.strokeWidth;
			polygon.lineJoin = params.lineJoin;
		}

		data = null;
	} );

	return polygons;
};

/**
 * Filter polygons with transparent color
 * @param  {Array} polygons    Polygons array
 * @param  {Object} colorData  Color data
 * @return {Array}             Filtered polygons array
 */
var filterTransparentPolygons = function ( polygons, colorData ) {
	return polygons.filter( function (polygon) {
		var color = getColorByPos( polygonCenter( polygon ), colorData );
		return ! isTransparent( color );
	});
};

var imageDataToPolygons = function ( imageData, params ) {
	if ( isImageData( imageData ) ) {
		var imageSize = { width: imageData.width, height: imageData.height };
		var tmpImageData = copyImageData( imageData );
		var colorImageData = copyImageData( imageData );
		var blurredImageData = stackblur( tmpImageData, 0, 0, imageSize.width, imageSize.height, params.blur );
		var greyscaleImageData = greyscale( blurredImageData );
		var edgesImageData = sobel( greyscaleImageData ).toImageData();
		var edgePoints = getEdgePoints( edgesImageData, params.threshold );
		var edgeVertices = getVerticesFromPoints( edgePoints, params.vertexCount, params.accuracy, imageSize.width, imageSize.height );
		var polygons = delaunay_2( edgeVertices );
		
		polygons = addBoundingBoxesToPolygons( polygons );
		
		if ( ! params.transparentColor ) {
			polygons = filterTransparentPolygons( polygons, colorImageData );
		}
		
		if ( params.fill === true && params.gradients === true ) {
			polygons = addGradientsToPolygons( polygons, colorImageData, params );
		} else {
			polygons = addColorToPolygons( polygons, colorImageData, params );
		}

		return polygons;
	} else {
		throw new Error( "Can't work with the imageData provided. It seems to be corrupt." );
		return;
	}
};

// import work from 'webworkify';
// import triangulationWorker from './workers/triangulationWorker'

// constructing an object that allows for a chained interface.
// for example stuff like:
// 
// triangulate( params )
//     .fromImage( img )
//     .toImageData()
// 
// etc...

var browser = function ( params ) {
	params = sanitizeInput( params );

	var isInputSync = false;
	var isOutputSync = false;

	var worker = new Worker( URL.createObjectURL(new Blob(["var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};\n\n\n\n\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar delaunay = createCommonjsModule(function (module) {\nfunction Triangle(a, b, c) {\n  this.a = a;\n  this.b = b;\n  this.c = c;\n\n  var A = b.x - a.x,\n      B = b.y - a.y,\n      C = c.x - a.x,\n      D = c.y - a.y,\n      E = A * (a.x + b.x) + B * (a.y + b.y),\n      F = C * (a.x + c.x) + D * (a.y + c.y),\n      G = 2 * (A * (c.y - b.y) - B * (c.x - b.x)),\n      minx, miny, dx, dy;\n\n  /* If the points of the triangle are collinear, then just find the\n   * extremes and use the midpoint as the center of the circumcircle. */\n  if(Math.abs(G) < 0.000001) {\n    minx = Math.min(a.x, b.x, c.x);\n    miny = Math.min(a.y, b.y, c.y);\n    dx   = (Math.max(a.x, b.x, c.x) - minx) * 0.5;\n    dy   = (Math.max(a.y, b.y, c.y) - miny) * 0.5;\n\n    this.x = minx + dx;\n    this.y = miny + dy;\n    this.r = dx * dx + dy * dy;\n  }\n\n  else {\n    this.x = (D*E - B*F) / G;\n    this.y = (A*F - C*E) / G;\n    dx = this.x - a.x;\n    dy = this.y - a.y;\n    this.r = dx * dx + dy * dy;\n  }\n}\n\nTriangle.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.moveTo(this.a.x, this.a.y);\n  ctx.lineTo(this.b.x, this.b.y);\n  ctx.lineTo(this.c.x, this.c.y);\n  ctx.closePath();\n  ctx.stroke();\n};\n\nfunction byX(a, b) {\n  return b.x - a.x\n}\n\nfunction dedup(edges) {\n  var j = edges.length,\n      a, b, i, m, n;\n\n  outer: while(j) {\n    b = edges[--j];\n    a = edges[--j];\n    i = j;\n    while(i) {\n      n = edges[--i];\n      m = edges[--i];\n      if((a === m && b === n) || (a === n && b === m)) {\n        edges.splice(j, 2);\n        edges.splice(i, 2);\n        j -= 2;\n        continue outer\n      }\n    }\n  }\n}\n\nfunction triangulate(vertices) {\n  /* Bail if there aren't enough vertices to form any triangles. */\n  if(vertices.length < 3)\n    { return [] }\n\n  /* Ensure the vertex array is in order of descending X coordinate\n   * (which is needed to ensure a subquadratic runtime), and then find\n   * the bounding box around the points. */\n  vertices.sort(byX);\n\n  var i    = vertices.length - 1,\n      xmin = vertices[i].x,\n      xmax = vertices[0].x,\n      ymin = vertices[i].y,\n      ymax = ymin;\n\n  while(i--) {\n    if(vertices[i].y < ymin) { ymin = vertices[i].y; }\n    if(vertices[i].y > ymax) { ymax = vertices[i].y; }\n  }\n\n  /* Find a supertriangle, which is a triangle that surrounds all the\n   * vertices. This is used like something of a sentinel value to remove\n   * cases in the main algorithm, and is removed before we return any\n   * results.\n   *\n   * Once found, put it in the \"open\" list. (The \"open\" list is for\n   * triangles who may still need to be considered; the \"closed\" list is\n   * for triangles which do not.) */\n  var dx     = xmax - xmin,\n      dy     = ymax - ymin,\n      dmax   = (dx > dy) ? dx : dy,\n      xmid   = (xmax + xmin) * 0.5,\n      ymid   = (ymax + ymin) * 0.5,\n      open   = [\n        new Triangle(\n          {x: xmid - 20 * dmax, y: ymid -      dmax, __sentinel: true},\n          {x: xmid            , y: ymid + 20 * dmax, __sentinel: true},\n          {x: xmid + 20 * dmax, y: ymid -      dmax, __sentinel: true}\n        )\n      ],\n      closed = [],\n      edges = [],\n      j, a, b;\n\n  /* Incrementally add each vertex to the mesh. */\n  i = vertices.length;\n  while(i--) {\n    /* For each open triangle, check to see if the current point is\n     * inside it's circumcircle. If it is, remove the triangle and add\n     * it's edges to an edge list. */\n    edges.length = 0;\n    j = open.length;\n    while(j--) {\n      /* If this point is to the right of this triangle's circumcircle,\n       * then this triangle should never get checked again. Remove it\n       * from the open list, add it to the closed list, and skip. */\n      dx = vertices[i].x - open[j].x;\n      if(dx > 0 && dx * dx > open[j].r) {\n        closed.push(open[j]);\n        open.splice(j, 1);\n        continue\n      }\n\n      /* If not, skip this triangle. */\n      dy = vertices[i].y - open[j].y;\n      if(dx * dx + dy * dy > open[j].r)\n        { continue }\n\n      /* Remove the triangle and add it's edges to the edge list. */\n      edges.push(\n        open[j].a, open[j].b,\n        open[j].b, open[j].c,\n        open[j].c, open[j].a\n      );\n      open.splice(j, 1);\n    }\n\n    /* Remove any doubled edges. */\n    dedup(edges);\n\n    /* Add a new triangle for each edge. */\n    j = edges.length;\n    while(j) {\n      b = edges[--j];\n      a = edges[--j];\n      open.push(new Triangle(a, b, vertices[i]));\n    }\n  }\n\n  /* Copy any remaining open triangles to the closed list, and then\n   * remove any triangles that share a vertex with the supertriangle. */\n  Array.prototype.push.apply(closed, open);\n\n  i = closed.length;\n  while(i--)\n    { if(closed[i].a.__sentinel ||\n       closed[i].b.__sentinel ||\n       closed[i].c.__sentinel)\n      { closed.splice(i, 1); } }\n\n  /* Yay, we're done! */\n  return closed\n}\n\n{\n    module.exports = {\n        Triangle: Triangle,\n        triangulate: triangulate\n    };\n}\n});\n\nvar delaunay_2 = delaunay.triangulate;\n\nvar sobel = createCommonjsModule(function (module, exports) {\n(function(root) {\n  'use strict';\n\n  function Sobel(imageData) {\n    if (!(this instanceof Sobel)) {\n      return new Sobel(imageData);\n    }\n\n    var width = imageData.width;\n    var height = imageData.height;\n\n    var kernelX = [\n      [-1,0,1],\n      [-2,0,2],\n      [-1,0,1]\n    ];\n\n    var kernelY = [\n      [-1,-2,-1],\n      [0,0,0],\n      [1,2,1]\n    ];\n\n    var sobelData = [];\n    var grayscaleData = [];\n\n    function bindPixelAt(data) {\n      return function(x, y, i) {\n        i = i || 0;\n        return data[((width * y) + x) * 4 + i];\n      };\n    }\n\n    var data = imageData.data;\n    var pixelAt = bindPixelAt(data);\n    var x, y;\n\n    for (y = 0; y < height; y++) {\n      for (x = 0; x < width; x++) {\n        var r = pixelAt(x, y, 0);\n        var g = pixelAt(x, y, 1);\n        var b = pixelAt(x, y, 2);\n\n        var avg = (r + g + b) / 3;\n        grayscaleData.push(avg, avg, avg, 255);\n      }\n    }\n\n    pixelAt = bindPixelAt(grayscaleData);\n\n    for (y = 0; y < height; y++) {\n      for (x = 0; x < width; x++) {\n        var pixelX = (\n            (kernelX[0][0] * pixelAt(x - 1, y - 1)) +\n            (kernelX[0][1] * pixelAt(x, y - 1)) +\n            (kernelX[0][2] * pixelAt(x + 1, y - 1)) +\n            (kernelX[1][0] * pixelAt(x - 1, y)) +\n            (kernelX[1][1] * pixelAt(x, y)) +\n            (kernelX[1][2] * pixelAt(x + 1, y)) +\n            (kernelX[2][0] * pixelAt(x - 1, y + 1)) +\n            (kernelX[2][1] * pixelAt(x, y + 1)) +\n            (kernelX[2][2] * pixelAt(x + 1, y + 1))\n        );\n\n        var pixelY = (\n          (kernelY[0][0] * pixelAt(x - 1, y - 1)) +\n          (kernelY[0][1] * pixelAt(x, y - 1)) +\n          (kernelY[0][2] * pixelAt(x + 1, y - 1)) +\n          (kernelY[1][0] * pixelAt(x - 1, y)) +\n          (kernelY[1][1] * pixelAt(x, y)) +\n          (kernelY[1][2] * pixelAt(x + 1, y)) +\n          (kernelY[2][0] * pixelAt(x - 1, y + 1)) +\n          (kernelY[2][1] * pixelAt(x, y + 1)) +\n          (kernelY[2][2] * pixelAt(x + 1, y + 1))\n        );\n\n        var magnitude = Math.sqrt((pixelX * pixelX) + (pixelY * pixelY))>>>0;\n\n        sobelData.push(magnitude, magnitude, magnitude, 255);\n      }\n    }\n\n    var clampedArray = sobelData;\n\n    if (typeof Uint8ClampedArray === 'function') {\n      clampedArray = new Uint8ClampedArray(sobelData);\n    }\n\n    clampedArray.toImageData = function() {\n      return Sobel.toImageData(clampedArray, width, height);\n    };\n\n    return clampedArray;\n  }\n\n  Sobel.toImageData = function toImageData(data, width, height) {\n    if (typeof ImageData === 'function' && Object.prototype.toString.call(data) === '[object Uint16Array]') {\n      return new ImageData(data, width, height);\n    } else {\n      if (typeof window === 'object' && typeof window.document === 'object') {\n        var canvas = document.createElement('canvas');\n\n        if (typeof canvas.getContext === 'function') {\n          var context = canvas.getContext('2d');\n          var imageData = context.createImageData(width, height);\n          imageData.data.set(data);\n          return imageData;\n        } else {\n          return new FakeImageData(data, width, height);\n        }\n      } else {\n        return new FakeImageData(data, width, height);\n      }\n    }\n  };\n\n  function FakeImageData(data, width, height) {\n    return {\n      width: width,\n      height: height,\n      data: data\n    };\n  }\n\n  {\n    if ('object' !== 'undefined' && module.exports) {\n      exports = module.exports = Sobel;\n    }\n    exports.Sobel = Sobel;\n  }\n\n})(commonjsGlobal);\n});\n\nvar isImageData = function (imageData) {\n\treturn (\n\t\timageData && \n\t\ttypeof imageData.width === 'number' &&\n\t\ttypeof imageData.height === 'number' &&\n\t\timageData.data &&\n\t\ttypeof imageData.data.length === 'number' &&\n\t\ttypeof imageData.data === 'object'\n\t);\n};\n\nvar Canvas$1 = function Canvas ( width, height ) {\n\tif ( width === void 0 ) width = 300;\n\tif ( height === void 0 ) height = 150;\n\n\tif ( typeof window === 'undefined' ) {\n\t\tthis.canvasEl = { width: width, height: height };\n\t\tthis.ctx = null;\n\t} else {\n\t\tthis.canvasEl = document.createElement( 'canvas' );\n\t\tthis.canvasEl.width = width;\n\t\tthis.canvasEl.height = height;\n\t\tthis.ctx = this.canvasEl.getContext( '2d' );\n\t} \n};\n\nvar prototypeAccessors = { width: { configurable: true },height: { configurable: true } };\n\nCanvas$1.prototype.getContext = function getContext () {\n\treturn this.ctx;\n};\n\nCanvas$1.prototype.toDataURL = function toDataURL ( type, encoderOptions, cb ) {\n\tif ( typeof cb === 'function' ) {\n\t\tcb( this.canvasEl.toDataURL( type, encoderOptions ) );\n\t} else {\n\t\treturn this.canvasEl.toDataURL( type, encoderOptions );\n\t}\n};\n\t\nprototypeAccessors.width.get = function () {\n\treturn this.canvasEl.width;\n};\n\t\nprototypeAccessors.width.set = function ( newWidth ) {\n\tthis.canvasEl.width = newWidth;\n};\n\nprototypeAccessors.height.get = function () {\n\treturn this.canvasEl.height;\n};\n\nprototypeAccessors.height.set = function ( newHeight ) {\n\tthis.canvasEl.height = newHeight;\n};\n\nObject.defineProperties( Canvas$1.prototype, prototypeAccessors );\n\nif ( typeof window !== 'undefined' ) {\n\tCanvas$1.Image = Image;\n}\n\n// import Canvas from 'canvas';\n// import Canvas from './browser.js';\n\nvar copyImageData = function (imageData) {\n\tif ( isImageData ( imageData ) ) {\n\t\tif ( typeof Uint8ClampedArray === 'undefined' ) {\n\t\t\tif ( typeof window === 'undefined' ) {\n\t\t\t\tthrow new Error( \"Can't copy imageData in webworker without Uint8ClampedArray support.\" );\n\t\t\t\treturn imageData;\n\t\t\t} else {\n\t\t\t\treturn copyImageDataWithCanvas( imageData );\n\t\t\t}\n\t\t} else {\n\t\t\tvar clampedArray = new Uint8ClampedArray( imageData.data );\n\n\t\t\tif ( typeof ImageData === 'undefined' ) {\n\t\t\t\t// http://stackoverflow.com/a/15238036/229189\n\t\t\t\treturn {\n\t\t\t\t\twidth: imageData.width,\n\t\t\t\t\theight: imageData.height,\n\t\t\t\t\tdata: clampedArray\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\t// http://stackoverflow.com/a/15908922/229189#comment57192591_15908922\n\t\t\t\tvar result;\n\n\t\t\t\ttry {\n\t\t\t\t\tresult = new ImageData( clampedArray, imageData.width, imageData.height );\n\t\t\t\t} catch ( err ) {\n\t\t\t\t\tif ( typeof window === 'undefined' ) {\n\t\t\t\t\t\tthrow new Error( \"Can't copy imageData in webworker without proper ImageData() support.\" );\n\t\t\t\t\t\tresult = imageData;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tresult = copyImageDataWithCanvas( imageData );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn result;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tthrow new Error( 'Given imageData object is not useable.' );\n\t\treturn;\n\t}\n};\n\n// http://stackoverflow.com/a/11918126/229189\nfunction copyImageDataWithCanvas ( imageData ) {\n\tvar canvas = new Canvas$1( imageData.width, imageData.height );\n\tvar ctx = canvas.getContext( '2d' );\n\n\tctx.putImageData( imageData, 0, 0 );\n\t\t\t\t\n\treturn ctx.getImageData( 0, 0, imageData.width, imageData.height );\n}\n\n/*\n    StackBlur - a fast almost Gaussian Blur For Canvas\n\n    Version:     0.5\n    Author:        Mario Klingemann\n    Contact:     mario@quasimondo.com\n    Website:    http://www.quasimondo.com/StackBlurForCanvas\n    Twitter:    @quasimondo\n\n    In case you find this class useful - especially in commercial projects -\n    I am not totally unhappy for a small donation to my PayPal account\n    mario@quasimondo.de\n\n    Or support me on flattr:\n    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript\n\n    Copyright (c) 2010 Mario Klingemann\n\n    Permission is hereby granted, free of charge, to any person\n    obtaining a copy of this software and associated documentation\n    files (the \"Software\"), to deal in the Software without\n    restriction, including without limitation the rights to use,\n    copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the\n    Software is furnished to do so, subject to the following\n    conditions:\n\n    The above copyright notice and this permission notice shall be\n    included in all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n    OTHER DEALINGS IN THE SOFTWARE.\n    */\n\nvar mul_table = [\n    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,\n    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,\n    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,\n    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,\n    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,\n    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,\n    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,\n    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,\n    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,\n    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,\n    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,\n    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,\n    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,\n    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,\n    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,\n    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];\n\n\nvar shg_table = [\n    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,\n    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,\n    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,\n    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,\n    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,\n    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,\n    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,\n    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,\n    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,\n    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,\n    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,\n    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];\n\nfunction BlurStack () {\n\tthis.r = 0;\n\tthis.g = 0;\n\tthis.b = 0;\n\tthis.a = 0;\n\tthis.next = null;\n}\n\nvar stackblur = function ( imageData, top_x, top_y, width, height, radius ) {\n\tvar pixels = imageData.data;\n\n\tvar x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,\n\t\tr_out_sum, g_out_sum, b_out_sum, a_out_sum,\n\t\tr_in_sum, g_in_sum, b_in_sum, a_in_sum,\n\t\tpr, pg, pb, pa, rbs;\n\n\tvar div = radius + radius + 1;\n\tvar widthMinus1  = width - 1;\n\tvar heightMinus1 = height - 1;\n\tvar radiusPlus1  = radius + 1;\n\tvar sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;\n\n\tvar stackStart = new BlurStack();\n\tvar stack = stackStart;\n\t\n\tfor ( i = 1; i < div; i++ ) {\n\t\tstack = stack.next = new BlurStack();\n\t\tif (i == radiusPlus1) { var stackEnd = stack; }\n\t}\n\tstack.next = stackStart;\n\t\n\tvar stackIn = null;\n\tvar stackOut = null;\n\n\tyw = yi = 0;\n\n\tvar mul_sum = mul_table[radius];\n\tvar shg_sum = shg_table[radius];\n\n\tfor ( y = 0; y < height; y++ ) {\n\t\tr_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;\n\n\t\tr_out_sum = radiusPlus1 * ( pr = pixels[yi] );\n\t\tg_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );\n\t\tb_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );\n\t\ta_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );\n\n\t\tr_sum += sumFactor * pr;\n\t\tg_sum += sumFactor * pg;\n\t\tb_sum += sumFactor * pb;\n\t\ta_sum += sumFactor * pa;\n\n\t\tstack = stackStart;\n\n\t\tfor ( i = 0; i < radiusPlus1; i++ ) {\n\t\t\tstack.r = pr;\n\t\t\tstack.g = pg;\n\t\t\tstack.b = pb;\n\t\t\tstack.a = pa;\n\t\t\tstack = stack.next;\n\t\t}\n\n\t\tfor ( i = 1; i < radiusPlus1; i++ ) {\n\t\t\tp = yi + ( ( widthMinus1 < i ? widthMinus1 : i ) << 2 );\n\t\t\tr_sum += ( stack.r = ( pr = pixels[p] ) ) * ( rbs = radiusPlus1 - i );\n\t\t\tg_sum += ( stack.g = ( pg = pixels[p+1] ) ) * rbs;\n\t\t\tb_sum += ( stack.b = ( pb = pixels[p+2] ) ) * rbs;\n\t\t\ta_sum += ( stack.a = ( pa = pixels[p+3] ) ) * rbs;\n\n\t\t\tr_in_sum += pr;\n\t\t\tg_in_sum += pg;\n\t\t\tb_in_sum += pb;\n\t\t\ta_in_sum += pa;\n\n\t\t\tstack = stack.next;\n\t\t}\n\n\n\t\tstackIn = stackStart;\n\t\tstackOut = stackEnd;\n\n\t\tfor (x = 0; x < width; x++) {\n\t\t\tpixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;\n\t\t\t\n\t\t\tif (pa != 0) {\n\t\t\t\tpa = 255 / pa;\n\t\t\t\tpixels[yi]   = ( ( r_sum * mul_sum ) >> shg_sum ) * pa;\n\t\t\t\tpixels[yi+1] = ( ( g_sum * mul_sum ) >> shg_sum ) * pa;\n\t\t\t\tpixels[yi+2] = ( ( b_sum * mul_sum ) >> shg_sum ) * pa;\n\t\t\t} else {\n\t\t\t\tpixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;\n\t\t\t}\n\n\t\t\tr_sum -= r_out_sum;\n\t\t\tg_sum -= g_out_sum;\n\t\t\tb_sum -= b_out_sum;\n\t\t\ta_sum -= a_out_sum;\n\n\t\t\tr_out_sum -= stackIn.r;\n\t\t\tg_out_sum -= stackIn.g;\n\t\t\tb_out_sum -= stackIn.b;\n\t\t\ta_out_sum -= stackIn.a;\n\n\t\t\tp =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;\n\n\t\t\tr_in_sum += ( stackIn.r = pixels[p] );\n\t\t\tg_in_sum += ( stackIn.g = pixels[p+1] );\n\t\t\tb_in_sum += ( stackIn.b = pixels[p+2] );\n\t\t\ta_in_sum += ( stackIn.a = pixels[p+3] );\n\n\t\t\tr_sum += r_in_sum;\n\t\t\tg_sum += g_in_sum;\n\t\t\tb_sum += b_in_sum;\n\t\t\ta_sum += a_in_sum;\n\n\t\t\tstackIn = stackIn.next;\n\n\t\t\tr_out_sum += ( pr = stackOut.r );\n\t\t\tg_out_sum += ( pg = stackOut.g );\n\t\t\tb_out_sum += ( pb = stackOut.b );\n\t\t\ta_out_sum += ( pa = stackOut.a );\n\n\t\t\tr_in_sum -= pr;\n\t\t\tg_in_sum -= pg;\n\t\t\tb_in_sum -= pb;\n\t\t\ta_in_sum -= pa;\n\n\t\t\tstackOut = stackOut.next;\n\n\t\t\tyi += 4;\n\t\t}\n\t\tyw += width;\n\t}\n\n\n\tfor ( x = 0; x < width; x++ ) {\n\t\tg_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;\n\n\t\tyi = x << 2;\n\t\tr_out_sum = radiusPlus1 * ( pr = pixels[yi] );\n\t\tg_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );\n\t\tb_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );\n\t\ta_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );\n\n\t\tr_sum += sumFactor * pr;\n\t\tg_sum += sumFactor * pg;\n\t\tb_sum += sumFactor * pb;\n\t\ta_sum += sumFactor * pa;\n\n\t\tstack = stackStart;\n\n\t\tfor ( i = 0; i < radiusPlus1; i++) {\n\t\t\tstack.r = pr;\n\t\t\tstack.g = pg;\n\t\t\tstack.b = pb;\n\t\t\tstack.a = pa;\n\t\t\tstack = stack.next;\n\t\t}\n\n\t\typ = width;\n\n\t\tfor ( i = 1; i <= radius; i++ ) {\n\t\t\tyi = ( yp + x ) << 2;\n\n\t\t\tr_sum += ( stack.r = ( pr = pixels[yi] ) ) * (rbs = radiusPlus1 - i);\n\t\t\tg_sum += ( stack.g = ( pg = pixels[yi+1] ) ) * rbs;\n\t\t\tb_sum += ( stack.b = ( pb = pixels[yi+2] ) ) * rbs;\n\t\t\ta_sum += ( stack.a = ( pa = pixels[yi+3] ) ) * rbs;\n\n\t\t\tr_in_sum += pr;\n\t\t\tg_in_sum += pg;\n\t\t\tb_in_sum += pb;\n\t\t\ta_in_sum += pa;\n\n\t\t\tstack = stack.next;\n\n\t\t\tif ( i < heightMinus1 ) {\n\t\t\t\typ += width;\n\t\t\t}\n\t\t}\n\n\t\tyi = x;\n\t\tstackIn = stackStart;\n\t\tstackOut = stackEnd;\n\n\t\tfor ( y = 0; y < height; y++ ) {\n\t\t\tp = yi << 2;\n\t\t\tpixels[p+3] = pa = ( a_sum * mul_sum ) >> shg_sum;\n\t\t\t\n\t\t\tif ( pa > 0 ) {\n\t\t\t\tpa = 255 / pa;\n\t\t\t\tpixels[p]   = ( ( r_sum * mul_sum ) >> shg_sum) * pa;\n\t\t\t\tpixels[p+1] = ( ( g_sum * mul_sum ) >> shg_sum) * pa;\n\t\t\t\tpixels[p+2] = ( ( b_sum * mul_sum ) >> shg_sum) * pa;\n\t\t\t} else {\n\t\t\t\tpixels[p] = pixels[p+1] = pixels[p+2] = 0;\n\t\t\t}\n\n\t\t\tr_sum -= r_out_sum;\n\t\t\tg_sum -= g_out_sum;\n\t\t\tb_sum -= b_out_sum;\n\t\t\ta_sum -= a_out_sum;\n\n\t\t\tr_out_sum -= stackIn.r;\n\t\t\tg_out_sum -= stackIn.g;\n\t\t\tb_out_sum -= stackIn.b;\n\t\t\ta_out_sum -= stackIn.a;\n\n\t\t\tp = ( x + ( ( ( p = y + radiusPlus1 ) < heightMinus1 ? p : heightMinus1 ) * width ) ) << 2;\n\n\t\t\tr_sum += ( r_in_sum += ( stackIn.r = pixels[p] ) );\n\t\t\tg_sum += ( g_in_sum += ( stackIn.g = pixels[p+1] ) );\n\t\t\tb_sum += ( b_in_sum += ( stackIn.b = pixels[p+2] ) );\n\t\t\ta_sum += ( a_in_sum += ( stackIn.a = pixels[p+3] ) );\n\n\t\t\tstackIn = stackIn.next;\n\n\t\t\tr_out_sum += ( pr = stackOut.r );\n\t\t\tg_out_sum += ( pg = stackOut.g );\n\t\t\tb_out_sum += ( pb = stackOut.b );\n\t\t\ta_out_sum += ( pa = stackOut.a );\n\n\t\t\tr_in_sum -= pr;\n\t\t\tg_in_sum -= pg;\n\t\t\tb_in_sum -= pb;\n\t\t\ta_in_sum -= pa;\n\n\t\t\tstackOut = stackOut.next;\n\n\t\t\tyi += width;\n\t\t}\n\t}\n\n\treturn imageData;\n};\n\nvar greyscale = function (imageData) {\n\tvar len = imageData.data.length;\n\tvar brightness;\n\n\tfor ( var i = 0; i < len; i += 4 ) {\n\t\tbrightness = 0.34 * imageData.data[i] + 0.5 * imageData.data[i + 1] + 0.16 * imageData.data[i + 2];\n\n\t\timageData.data[i] = brightness;\n\t\timageData.data[i + 1] = brightness;\n\t\timageData.data[i + 2] = brightness;\n\t}\n\t\t\n\treturn imageData;\n};\n\n// most parts taken from http://jsdo.it/akm2/xoYx\n// (starting line 293++)\nvar getEdgePoints = function ( imageData, threshold ) {\n\t// only check every 2nd pixel in imageData to save some time.\n\tvar multiplier = 2;\n\tvar width = imageData.width;\n\tvar height = imageData.height;\n\tvar data = imageData.data;\n\tvar points = [ ];\n\tvar x, y, row, col, sx, sy, step, sum, total;\n\n\tfor ( y = 0; y < height; y += multiplier ) {\n\t\tfor ( x = 0; x < width; x += multiplier ) {\n\t\t\tsum = total = 0;\n\n\t\t\tfor ( row = -1; row <= 1; row++ ) {\n\t\t\t\tsy = y + row;\n\t\t\t\tstep = sy * width;\n\n\t\t\t\tif ( sy >= 0 && sy < height ) {\n\t\t\t\t\tfor ( col = -1; col <= 1; col++ ) {\n\t\t\t\t\t\tsx = x + col;\n\n\t\t\t\t\t\tif ( sx >= 0 && sx < width ) {\n\t\t\t\t\t\t\tsum += data[( sx + step ) << 2];\n\t\t\t\t\t\t\ttotal++;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif ( total ) {\n\t\t\t\tsum /= total;\n\t\t\t}\n\n\t\t\tif ( sum > threshold ) {\n\t\t\t\tpoints.push( { x: x, y: y } );\n\t\t\t}\n\t\t}\n\t}\n\n\treturn points;\n};\n\nvar clamp = function ( value, min, max ) {\n\treturn value < min ? min : value > max ? max : value;\n};\n\nfunction addVertex ( x, y, hash ) {\n\tvar resultKey = x + '|' + y;\n\n\tif ( ! hash[resultKey] ) {\n\t\thash[resultKey] = { x: x, y: y };\n\t}\n\n\tresultKey = null;\n}\n\nvar getVerticesFromPoints = function ( points, maxPointCount, accuracy, width, height ) {\n\t// using hash for all points to make sure we have a set of unique vertices.\n\tvar resultHash = {};\n\n\t// use 25% of max point count to create a background grid.\n\t// this avoids having too many \"big\" triangles in areas of the image with low contrast \n\t// next to very small ones in areas with high contrast\n\t// for every other row, start the x value at > 0, so the grid doesn't look too regular\n\tvar gridPointCount = Math.max( ~~( maxPointCount * ( 1 - accuracy ) ), 5 );\n\n\t// http://stackoverflow.com/a/4107092/229189\n\tvar gridColumns = Math.round( Math.sqrt( gridPointCount ) );\n\tvar gridRows = Math.round( Math.ceil( gridPointCount / gridColumns ) );\n\t\n\tvar xIncrement = ~~( width / gridColumns );\n\tvar yIncrement = ~~( height / gridRows );\n\n\tvar rowIndex = 0;\n\tvar startX = 0;\n\n\tvar x = 0;\n\tvar y = 0;\n\n\tfor ( y = 0; y < height; y+= yIncrement ){\n\t\trowIndex++;\n\n\t\tstartX = rowIndex % 2 === 0 ? ~~( xIncrement / 2 ) : 0; \n\n\t\tfor ( x = startX; x < width; x += xIncrement ) {\n\t\t\tif ( x < width && y < height ) {\n\t\t\t\t// \"distorting\" the grid a little bit so that the\n\t\t\t\t// background vertices don't appear to be on a straight line (which looks boring)\n\t\t\t\taddVertex(\n\t\t\t\t\t~~( x + ( Math.cos( y ) * ( yIncrement ) ) ),\n\t\t\t\t\t~~( y + ( Math.sin( x ) * ( xIncrement ) ) ),\n\t\t\t\t\tresultHash\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}\n\t\n\t// add points in the corners\n\taddVertex( 0, 0, resultHash );\n\taddVertex( width - 1, 0, resultHash );\n\taddVertex( width - 1, height - 1, resultHash );\n\taddVertex( 0, height - 1, resultHash );\n\n\t// add points from all edge points\n\tvar remainingPointCount = maxPointCount - Object.keys( resultHash ).length;\n\tvar edgePointCount = points.length;\n\tvar increment = ~~( edgePointCount / remainingPointCount );\n\n\tif ( maxPointCount > 0 && increment > 0 ) {\n\t\tvar i = 0;\n\n\t\tfor ( i = 0; i < edgePointCount; i += increment ) {\n\t\t\taddVertex( points[i].x, points[i].y, resultHash );\n\t\t}\n\t}\n\n\tpoints = null;\n\n\treturn Object.keys( resultHash ).map( function (key) {\n\t\treturn resultHash[key];\n\t} );\n};\n\nvar getBoundingBox = function (points) {\n\tvar xMin = Infinity;\n\tvar xMax = -Infinity;\n\tvar yMin = Infinity;\n\tvar yMax = -Infinity;\n\n\tpoints.forEach( function (p) {\n\t\tif ( p.x < xMin ) {\n\t\t\txMin = p.x;\n\t\t}\n\n\t\tif ( p.y < yMin ) {\n\t\t\tyMin = p.y;\n\t\t}\n\n\t\tif ( p.x > xMax ) {\n\t\t\txMax = p.x;\n\t\t}\n\n\t\tif ( p.y > yMax ) {\n\t\t\tyMax = p.y;\n\t\t}\n\t} );\n\n\treturn {\n\t\tx: xMin,\n\t\ty: yMin,\n\t\twidth: xMax - xMin,\n\t\theight: yMax - yMin\n\t};\n};\n\nvar addBoundingBoxesToPolygons = function ( polygons, colorData, params ) {\n\tpolygons.forEach( function (polygon) {\n\t\tpolygon.boundingBox = getBoundingBox( [ polygon.a, polygon.b, polygon.c ] );\n\t} );\n\n\treturn polygons.filter( function (polygon) {\n\t\treturn polygon.boundingBox.width > 0 && polygon.boundingBox.height > 0;\n\t} );\n};\n\n/**\n * Get color object by position\n * @param  {Object} pos         {x,y} object\n * @param  {Object} colorData   Image color data object\n * @param  {Object} [transparentColor] (optional) RGBA color object. Used to set specific color to transparent pixels\n * @return {Object}             RGBA color object\n */\nvar getColorByPos = function ( pos, colorData, transparentColor ) {\n\tvar x = clamp( pos.x, 1, colorData.width - 2 );\n\tvar y = clamp( pos.y, 1, colorData.height - 2 );\n\tvar index = ( ( x | 0 ) + ( y | 0 ) * colorData.width ) << 2;\n\n\tif ( index >= colorData.data.length ) {\n\t\tindex = colorData.data.length - 5;\n\t}\n\n\tvar alpha = colorData.data[index + 3] / 255;\n\n\t// Return RGBA color object\n\treturn ( transparentColor && alpha === 0 ) ? transparentColor : {\n\t\tr: colorData.data[index],\n\t\tg: colorData.data[index + 1],\n\t\tb: colorData.data[index + 2],\n\t\ta: alpha\n\t};\n};\n\n/**\n * Get polygon's center point\n * @param  {Object} polygon Polygon object\n * @return {Object}         Point coordinates {x,y}\n */\nvar polygonCenter = function (polygon) {\n\treturn {\n\t\tx: ( polygon.a.x + polygon.b.x + polygon.c.x ) * 0.33333,\n\t\ty: ( polygon.a.y + polygon.b.y + polygon.c.y ) * 0.33333\n\t};\n};\n\n/**\n * Is color transparent ?\n * @param  {Object} color Color object\n * @return {Boolean}      Is transparent?\n */\nvar isTransparent = function (color) {\n\treturn color.a === 0;\n};\n\n// import objectAssign from 'object-assign'\nvar objectAssign = Object.assign;\n\n/**\n * Transform color object to rgb/a\n * @param  {Object} colorObj RGB(A) color object\n * @return {String}       \t rgba css string\n */\n\nvar toRGBA = function (colorObj) {\n\tvar c = objectAssign( { a: 1 }, colorObj );\t// rgb-to-rgba:  alpha is optionally set to 1\n\treturn (\"rgba(\" + (c.r) + \", \" + (c.g) + \", \" + (c.b) + \", \" + (c.a) + \")\")\n};\n\nvar addColorToPolygons = function ( polygons, colorData, params ) {\n\tvar fill = params.fill;\n\tvar stroke = params.stroke;\n\tvar strokeWidth = params.strokeWidth;\n\tvar lineJoin = params.lineJoin;\n\tvar transparentColor = params.transparentColor;\n\tvar fillColor = typeof fill === 'string' ? fill : false;\n\tvar strokeColor = typeof stroke === 'string' ? stroke : false;\n\n\t/**\n\t * Color override logic\n\t * @param  {Object} color    Color object\n\t * @param  {String} override Override color (fillColor/strokeColor)\n\t * @return {String}          CSS formatted color (rgba,..)\n\t */\n\tvar getColor = function ( color, override ) {\n\t\tvar t = ( isTransparent(color) && transparentColor );\t// Color is transparent, and transparentColor override is defined\n\t\tvar c = t ? transparentColor : color;\n\t\treturn ( override && !t ) ? override : toRGBA( c );\t\t// Priority: transparentColor -> override -> supplied color\n\t};\n\n\tpolygons.forEach( function (polygon) {\n\t\tvar color = getColorByPos( polygonCenter( polygon ), colorData );\n\n\t\tif ( fill ) {\n\t\t\tpolygon.fill = getColor( color, fillColor );\n\t\t}\n\n\t\tif ( stroke ) {\n\t\t\tpolygon.strokeColor = getColor(color, strokeColor);\n\t\t\tpolygon.strokeWidth = strokeWidth;\n\t\t\tpolygon.lineJoin = lineJoin;\n\t\t}\n\t} );\n\n\treturn polygons;\n};\n\n//  http://stackoverflow.com/a/9733420/229189\nvar luminance = function (color) {\n\tvar a = [ color.r, color.g, color.b ].map( function (v) {\n\t\tv /= 255;\n\t\treturn ( v <= 0.03928 ) ? v / 12.92 : Math.pow( ( ( v + 0.055 ) / 1.055 ), 2.4 );\n\t} );\n\n\treturn a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;\n};\n\nvar distance = function ( a, b ) {\n\tvar dx = b.x - a.x;\n\tvar dy = b.y - a.y;\n\n\treturn Math.sqrt( ( dx * dx ) + ( dy * dy ) );\n};\n\nvar addGradientsToPolygons = function ( polygons, colorData, params ) {\n\tpolygons.forEach( function (polygon) {\n\t\tvar data = { };\n\n\t\t'abc'.split( '' ).forEach( function (key) {\n\t\t\tvar color = getColorByPos( polygon[key], colorData, params.transparentColor );\n\t\t\t\n\t\t\tdata[key] = {\n\t\t\t\tkey: key,\n\t\t\t\tcolor: color,\n\t\t\t\tx: polygon[key].x,\n\t\t\t\ty: polygon[key].y\n\t\t\t};\n\n\t\t\tdata[key].luminance = luminance( data[key].color );\n\n\t\t\tvar otherKeys = 'abc'.replace( key, '' ).split( '' );\n\n\t\t\tdata[key].median = {\n\t\t\t\tx: ( polygon[otherKeys[0]].x + polygon[otherKeys[1]].x ) / 2,\n\t\t\t\ty: ( polygon[otherKeys[0]].y + polygon[otherKeys[1]].y ) / 2\n\t\t\t};\n\n\t\t\tdata[key].medianColor = getColorByPos( data[key].median, colorData, params.transparentColor );\n\t\t\tdata[key].medianLuminance = luminance( data[key].medianColor );\n\t\t} );\n\n\t\t// sort by axis of most difference in luminance\n\t\tvar pointsByDeltaInLuminance = [ data.a, data.b, data.c ].sort( function ( u, v ) {\n\t\t\treturn Math.abs( u.luminance - u.medianLuminance ) - Math.abs( v.luminance - v.medianLuminance );\n\t\t} );\n\n\t\tvar pointWithMostDeltaInLuminance = pointsByDeltaInLuminance[0];\n\t\tvar startPoint = pointsByDeltaInLuminance[0];\n\t\tvar endPoint = pointWithMostDeltaInLuminance.median;\n\n\t\tvar gradienStopPositions = [ startPoint ];\n\n\t\tvar startToEndDistance = distance( startPoint, endPoint );\n\n\t\tfor ( var i = 1, len = params.gradientStops - 2; i < len; i++ ) {\n\t\t\tvar pointDistance = i * ( startToEndDistance / params.gradientStops );\n\t\t\tvar pointPercent = pointDistance / startToEndDistance;\n\t\t\t\n\t\t\tvar point = {\n\t\t\t\tx: startPoint.x + pointPercent * ( endPoint.x - startPoint.x ), \n\t\t\t\ty: startPoint.y + pointPercent * ( endPoint.y - startPoint.y )\n\t\t\t};\n\n\t\t\tgradienStopPositions.push( point );\n\t\t}\n\n\t\tgradienStopPositions.push( endPoint );\n\n\t\tpolygon.gradient = {\n\t\t\tx1: pointWithMostDeltaInLuminance.x,\n\t\t\ty1: pointWithMostDeltaInLuminance.y,\n\t\t\tx2: pointWithMostDeltaInLuminance.median.x,\n\t\t\ty2: pointWithMostDeltaInLuminance.median.y,\n\t\t\tcolors: gradienStopPositions.map( function (pos) {\n\t\t\t\treturn getColorByPos( pos, colorData, params.transparentColor );\n\t\t\t} )\n\t\t};\n\n\t\tif ( params.stroke ) {\n\t\t\tpolygon.strokeWidth = params.strokeWidth;\n\t\t\tpolygon.lineJoin = params.lineJoin;\n\t\t}\n\n\t\tdata = null;\n\t} );\n\n\treturn polygons;\n};\n\n/**\n * Filter polygons with transparent color\n * @param  {Array} polygons    Polygons array\n * @param  {Object} colorData  Color data\n * @return {Array}             Filtered polygons array\n */\nvar filterTransparentPolygons = function ( polygons, colorData ) {\n\treturn polygons.filter( function (polygon) {\n\t\tvar color = getColorByPos( polygonCenter( polygon ), colorData );\n\t\treturn ! isTransparent( color );\n\t});\n};\n\nvar imageDataToPolygons = function ( imageData, params ) {\n\tif ( isImageData( imageData ) ) {\n\t\tvar imageSize = { width: imageData.width, height: imageData.height };\n\t\tvar tmpImageData = copyImageData( imageData );\n\t\tvar colorImageData = copyImageData( imageData );\n\t\tvar blurredImageData = stackblur( tmpImageData, 0, 0, imageSize.width, imageSize.height, params.blur );\n\t\tvar greyscaleImageData = greyscale( blurredImageData );\n\t\tvar edgesImageData = sobel( greyscaleImageData ).toImageData();\n\t\tvar edgePoints = getEdgePoints( edgesImageData, params.threshold );\n\t\tvar edgeVertices = getVerticesFromPoints( edgePoints, params.vertexCount, params.accuracy, imageSize.width, imageSize.height );\n\t\tvar polygons = delaunay_2( edgeVertices );\n\t\t\n\t\tpolygons = addBoundingBoxesToPolygons( polygons );\n\t\t\n\t\tif ( ! params.transparentColor ) {\n\t\t\tpolygons = filterTransparentPolygons( polygons, colorImageData );\n\t\t}\n\t\t\n\t\tif ( params.fill === true && params.gradients === true ) {\n\t\t\tpolygons = addGradientsToPolygons( polygons, colorImageData, params );\n\t\t} else {\n\t\t\tpolygons = addColorToPolygons( polygons, colorImageData, params );\n\t\t}\n\n\t\treturn polygons;\n\t} else {\n\t\tthrow new Error( \"Can't work with the imageData provided. It seems to be corrupt.\" );\n\t\treturn;\n\t}\n};\n\nonmessage = function (msg) {\n\tif ( msg.data.imageData && msg.data.params ) {\n\t\ttry {\n\t\t\tvar imageData = msg.data.imageData;\n\n\t\t\t// phantomjs seems to have some memory loss so we need to make sure\n\t\t\tif ( typeof imageData.width === 'undefined' && typeof msg.data.imageDataWidth === 'number' ) {\n\t\t\t\timageData.width = msg.data.imageDataWidth;\n\t\t\t}\n\n\t\t\tif ( typeof imageData.height === 'undefined' && typeof msg.data.imageDataHeight === 'number' ) {\n\t\t\t\timageData.height = msg.data.imageDataHeight;\n\t\t\t}\n\t\t\t\n\t\t\tvar polygons = imageDataToPolygons( msg.data.imageData, msg.data.params );\n\t\t\t\t\t\t\n\t\t\tself.postMessage( {\n\t\t\t\tpolygonJSONStr: JSON.stringify( polygons )\n\t\t\t} );\n\t\t} catch ( err ) {\n\t\t\tself.postMessage( { err: err.message || err } );\n\t\t}\n\n\t} else {\n\t\tif ( msg.data.imageData ) {\n\t\t\tself.postMessage( { err: 'Parameters are missing.' } );\n\t\t} else {\n\t\t\tself.postMessage( { err: 'ImageData is missing.' } );\n\t\t}\n\t}\n\t\n\tself.close();\n};\n"],{type:'text/javascript'})) );

	var inputFn;
	var outputFn;
	
	var api = {
		getParams: getParams,
		getInput: getInput,
		getOutput: getOutput
	};

	var inputMethods = {
		fromImage: fromImage,
		fromImageSync: fromImageSync,
		fromImageData: fromImageData,
		fromImageDataSync: fromImageDataSync
	};

	var outputMethods = {
		toData: toData,
		toDataSync: toDataSync,
		toDataURL: toDataURL,
		toDataURLSync: toDataURLSync,
		toImageData: toImageData,
		toImageDataSync: toImageDataSync,
		toSVG: toSVG,
		toSVGSync: toSVGSync
	};

	function getParams () {
		return params;
	}

	function getInput () {
		var result = objectAssign( { }, api );

		if ( ! inputFn ) {
			objectAssign( result, inputMethods );
		}

		return result;
	}

	function getOutput () {
		var result = objectAssign( { }, api );

		if ( ! outputFn ) {
			objectAssign( result, outputMethods );
		}

		return result;
	}

	function fromImage ( inputParams ) { return setInput( fromImageToImageData, inputParams ); }
	function fromImageSync ( inputParams ) { return setInput( fromImageToImageData, inputParams, true ); }
	function fromImageData ( inputParams ) { return setInput( function (i) { return i; }, inputParams ); }
	function fromImageDataSync ( inputParams ) { return setInput( function (i) { return i; }, inputParams, true ); }

	function toData ( outputParams ) { return setOutput( function (i) { return i; }, outputParams ); }
	function toDataSync ( outputParams ) { return setOutput( function (i) { return i; }, outputParams, true ); }
	function toDataURL ( outputParams ) { return setOutput( polygonsToDataURL, outputParams ); }
	function toDataURLSync ( outputParams ) { return setOutput( polygonsToDataURL, outputParams, true ); }
	function toImageData ( outputParams ) { return setOutput( polygonsToImageData, outputParams ); }
	function toImageDataSync ( outputParams ) { return setOutput( polygonsToImageData, outputParams, true ); }
	function toSVG ( outputParams ) { return setOutput( polygonsToSVG, outputParams ); }
	function toSVGSync ( outputParams ) { return setOutput( polygonsToSVG, outputParams, true ); }

	function setInput ( fn, inputParams, isSync ) {
		isInputSync = !! isSync;
		
		inputFn = function () {
			if ( isInputSync ) {
				return fn( inputParams );
			} else {
				return new Promise( function ( resolve, reject ) {
					try {
						var imageData = fn( inputParams );
						resolve( imageData );
					} catch ( err ) {
						reject( err );
					}
				} );
			}
		};

		if ( isReady() ) {
			return getResult();
		} else {
			return getOutput();
		}
	}

	function setOutput ( fn, outputpParams, isSync ) {
		isOutputSync = !! isSync;

		outputFn = function ( polygons, size ) {
			if ( isOutputSync ) {
				return fn( polygons, size, outputpParams );
			} else {
				return new Promise( function ( resolve, reject ) {
					try {
						var outputData = fn( polygons, size, outputpParams );
						resolve( outputData );
					} catch ( err ) {
						reject( err );
					}
				} );
			}
		};

		if ( isReady() ) {
			return getResult();
		} else {
			return getInput();
		}
	}

	function isReady () {
		return inputFn && outputFn;
	}

	function getResult () {
		if ( isInputSync && isOutputSync ) {
			var imageData = inputFn( params );
			var polygonData = imageDataToPolygons( imageData, params );
			var outputData = outputFn( polygonData, imageData );

			return outputData;
		} else {
			return new Promise( function ( resolve, reject ) {
				var imageData;
				
				makeInput()
					.then( function (imgData) {
						imageData = imgData;
						return makePolygonsInWorker( imageData, params );
					}, reject )
					.then( function (polygonData) {
						return makeOutput( polygonData, imageData );
					}, reject )
					.then( function (outputData) {
						resolve( outputData );
					}, reject );
			} );
		}
	}

	function makeInput ( inputParams ) {
		return new Promise( function ( resolve, reject ) {
			if ( isInputSync ) {
				try {
					var imageData = inputFn( inputParams );
					resolve( imageData );
				} catch ( err ) {
					reject( err );
				}
			} else {
				inputFn( inputParams )
					.then( resolve, reject );
			}
		} );
	}

	function makePolygonsInWorker ( imageData, params ) {
		return new Promise( function ( resolve, reject ) {
			worker.addEventListener( 'message', function (event) {
				if ( event.data && event.data.polygonJSONStr ) {
					var polygonData = JSON.parse( event.data.polygonJSONStr );
					
					resolve( polygonData );
				} else {
					if ( event.data && event.data.err ) {
						reject( event.data.err );
					} else {
						reject( event );
					}
				}
			} );

			worker.postMessage( {
				params: params,
				imageData: imageData,
				// phantomjs tends to forget about those two
				// so we send them separately
				imageDataWidth: imageData.width,
				imageDataHeight: imageData.height
			} );
		} );
	}

	function makeOutput ( polygonData, imageData ) {
		return new Promise( function ( resolve, reject ) {
			if ( isOutputSync ) {
				try {
					var outputData = outputFn( polygonData, imageData );
					resolve( outputData );
				} catch ( e ) {
					reject( e );
				}
			} else {
				outputFn( polygonData, imageData )
					.then( resolve, reject );
			}
		} );
	}

	return getInput();
};

return browser;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

exports = module.exports = Victor;

/**
 * # Victor - A JavaScript 2D vector class with methods for common vector operations
 */

/**
 * Constructor. Will also work without the `new` keyword
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = Victor(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @return {Victor}
 * @api public
 */
function Victor (x, y) {
	if (!(this instanceof Victor)) {
		return new Victor(x, y);
	}

	/**
	 * The X axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.x;
	 *     // => 42
	 *
	 * @api public
	 */
	this.x = x || 0;

	/**
	 * The Y axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.y;
	 *     // => 21
	 *
	 * @api public
	 */
	this.y = y || 0;
};

/**
 * # Static
 */

/**
 * Creates a new instance from an array
 *
 * ### Examples:
 *     var vec = Victor.fromArray([42, 21]);
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromArray
 * @param {Array} array Array with the x and y values at index 0 and 1 respectively
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromArray = function (arr) {
	return new Victor(arr[0] || 0, arr[1] || 0);
};

/**
 * Creates a new instance from an object
 *
 * ### Examples:
 *     var vec = Victor.fromObject({ x: 42, y: 21 });
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromObject
 * @param {Object} obj Object with the values for x and y
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromObject = function (obj) {
	return new Victor(obj.x || 0, obj.y || 0);
};

/**
 * # Manipulation
 *
 * These functions are chainable.
 */

/**
 * Adds another vector's X axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addX(vec2);
 *     vec1.toString();
 *     // => x:30, y:10
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addX = function (vec) {
	this.x += vec.x;
	return this;
};

/**
 * Adds another vector's Y axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addY(vec2);
 *     vec1.toString();
 *     // => x:10, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addY = function (vec) {
	this.y += vec.y;
	return this;
};

/**
 * Adds another vector to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.add(vec2);
 *     vec1.toString();
 *     // => x:30, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

/**
 * Adds the given scalar to both vector axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalar(2);
 *     vec.toString();
 *     // => x: 3, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalar = function (scalar) {
	this.x += scalar;
	this.y += scalar;
	return this;
};

/**
 * Adds the given scalar to the X axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarX(2);
 *     vec.toString();
 *     // => x: 3, y: 2
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarX = function (scalar) {
	this.x += scalar;
	return this;
};

/**
 * Adds the given scalar to the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarY(2);
 *     vec.toString();
 *     // => x: 1, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarY = function (scalar) {
	this.y += scalar;
	return this;
};

/**
 * Subtracts the X axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractX(vec2);
 *     vec1.toString();
 *     // => x:80, y:50
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractX = function (vec) {
	this.x -= vec.x;
	return this;
};

/**
 * Subtracts the Y axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractY(vec2);
 *     vec1.toString();
 *     // => x:100, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractY = function (vec) {
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtract(vec2);
 *     vec1.toString();
 *     // => x:80, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtract = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts the given scalar from both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalar(20);
 *     vec.toString();
 *     // => x: 80, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalar = function (scalar) {
	this.x -= scalar;
	this.y -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarX(20);
 *     vec.toString();
 *     // => x: 80, y: 200
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarX = function (scalar) {
	this.x -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarY(20);
 *     vec.toString();
 *     // => x: 100, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarY = function (scalar) {
	this.y -= scalar;
	return this;
};

/**
 * Divides the X axis by the x component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.divideX(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideX = function (vector) {
	this.x /= vector.x;
	return this;
};

/**
 * Divides the Y axis by the y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.divideY(vec2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideY = function (vector) {
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by a axis values of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.divide(vec2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Victor} vector The vector to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divide = function (vector) {
	this.x /= vector.x;
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalar(2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalar = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
		this.y /= scalar;
	} else {
		this.x = 0;
		this.y = 0;
	}

	return this;
};

/**
 * Divides the X axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarX(2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarX = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
	} else {
		this.x = 0;
	}
	return this;
};

/**
 * Divides the Y axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarY(2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarY = function (scalar) {
	if (scalar !== 0) {
		this.y /= scalar;
	} else {
		this.y = 0;
	}
	return this;
};

/**
 * Inverts the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertX();
 *     vec.toString();
 *     // => x:-100, y:50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertX = function () {
	this.x *= -1;
	return this;
};

/**
 * Inverts the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertY();
 *     vec.toString();
 *     // => x:100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertY = function () {
	this.y *= -1;
	return this;
};

/**
 * Inverts both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invert();
 *     vec.toString();
 *     // => x:-100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invert = function () {
	this.invertX();
	this.invertY();
	return this;
};

/**
 * Multiplies the X axis by X component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyX = function (vector) {
	this.x *= vector.x;
	return this;
};

/**
 * Multiplies the Y axis by Y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyY = function (vector) {
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by values from a given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.multiply(vec2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Victor} vector The vector to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiply = function (vector) {
	this.x *= vector.x;
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalar(2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Number} The scalar to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalar = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

/**
 * Multiplies the X axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarX(2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarX = function (scalar) {
	this.x *= scalar;
	return this;
};

/**
 * Multiplies the Y axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarY(2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarY = function (scalar) {
	this.y *= scalar;
	return this;
};

/**
 * Normalize
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.normalize = function () {
	var length = this.length();

	if (length === 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.divide(Victor(length, length));
	}
	return this;
};

Victor.prototype.norm = Victor.prototype.normalize;

/**
 * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.limit(80, 0.9);
 *     vec.toString();
 *     // => x:90, y:50
 *
 * @param {Number} max The maximum value for both x and y axis
 * @param {Number} factor Factor by which the axis are to be multiplied with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

/**
 * Randomizes both vector axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:67, y:73
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomize = function (topLeft, bottomRight) {
	this.randomizeX(topLeft, bottomRight);
	this.randomizeY(topLeft, bottomRight);

	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:55, y:50
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeX = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.x, bottomRight.x);
	var max = Math.max(topLeft.x, bottomRight.x);
	this.x = random(min, max);
	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:100, y:66
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeY = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.y, bottomRight.y);
	var max = Math.max(topLeft.y, bottomRight.y);
	this.y = random(min, max);
	return this;
};

/**
 * Randomly randomizes either axis between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
 *     vec.toString();
 *     // => x:100, y:77
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
	if (!! Math.round(Math.random())) {
		this.randomizeX(topLeft, bottomRight);
	} else {
		this.randomizeY(topLeft, bottomRight);
	}
	return this;
};

/**
 * Rounds both axis to an integer value
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

/**
 * Rounds both axis to a certain precision
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @param {Number} Precision (default: 8)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.toFixed = function (precision) {
	if (typeof precision === 'undefined') { precision = 8; }
	this.x = this.x.toFixed(precision);
	this.y = this.y.toFixed(precision);
	return this;
};

/**
 * Performs a linear blend / interpolation of the X axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixX(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:100
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixX = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.x = (1 - amount) * this.x + amount * vec.x;
	return this;
};

/**
 * Performs a linear blend / interpolation of the Y axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixY(vec2, 0.5);
 *     vec.toString();
 *     // => x:100, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixY = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.y = (1 - amount) * this.y + amount * vec.y;
	return this;
};

/**
 * Performs a linear blend / interpolation towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mix(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mix = function (vec, amount) {
	this.mixX(vec, amount);
	this.mixY(vec, amount);
	return this;
};

/**
 * # Products
 */

/**
 * Creates a clone of this vector
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = vec1.clone();
 *
 *     vec2.toString();
 *     // => x:10, y:10
 *
 * @return {Victor} A clone of the vector
 * @api public
 */
Victor.prototype.clone = function () {
	return new Victor(this.x, this.y);
};

/**
 * Copies another vector's X component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyX(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:10
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyX = function (vec) {
	this.x = vec.x;
	return this;
};

/**
 * Copies another vector's Y component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyY(vec1);
 *
 *     vec2.toString();
 *     // => x:10, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyY = function (vec) {
	this.y = vec.y;
	return this;
};

/**
 * Copies another vector's X and Y components in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copy(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copy = function (vec) {
	this.copyX(vec);
	this.copyY(vec);
	return this;
};

/**
 * Sets the vector to zero (0,0)
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *		 var1.zero();
 *     vec1.toString();
 *     // => x:0, y:0
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.zero = function () {
	this.x = this.y = 0;
	return this;
};

/**
 * Calculates the dot product of this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.dot(vec2);
 *     // => 23000
 *
 * @param {Victor} vector The second vector
 * @return {Number} Dot product
 * @api public
 */
Victor.prototype.dot = function (vec2) {
	return this.x * vec2.x + this.y * vec2.y;
};

Victor.prototype.cross = function (vec2) {
	return (this.x * vec2.y ) - (this.y * vec2.x );
};

/**
 * Projects a vector onto another vector, setting itself to the result.
 *
 * ### Examples:
 *     var vec = new Victor(100, 0);
 *     var vec2 = new Victor(100, 100);
 *
 *     vec.projectOnto(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want to project this vector onto
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.projectOnto = function (vec2) {
    var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));
    this.x = coeff * vec2.x;
    this.y = coeff * vec2.y;
    return this;
};


Victor.prototype.horizontalAngle = function () {
	return Math.atan2(this.y, this.x);
};

Victor.prototype.horizontalAngleDeg = function () {
	return radian2degrees(this.horizontalAngle());
};

Victor.prototype.verticalAngle = function () {
	return Math.atan2(this.x, this.y);
};

Victor.prototype.verticalAngleDeg = function () {
	return radian2degrees(this.verticalAngle());
};

Victor.prototype.angle = Victor.prototype.horizontalAngle;
Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
Victor.prototype.direction = Victor.prototype.horizontalAngle;

Victor.prototype.rotate = function (angle) {
	var nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
	var ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));

	this.x = nx;
	this.y = ny;

	return this;
};

Victor.prototype.rotateDeg = function (angle) {
	angle = degrees2radian(angle);
	return this.rotate(angle);
};

Victor.prototype.rotateTo = function(rotation) {
	return this.rotate(rotation-this.angle());
};

Victor.prototype.rotateToDeg = function(rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateTo(rotation);
};

Victor.prototype.rotateBy = function (rotation) {
	var angle = this.angle() + rotation;

	return this.rotate(angle);
};

Victor.prototype.rotateByDeg = function (rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateBy(rotation);
};

/**
 * Calculates the distance of the X axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceX(vec2);
 *     // => -100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

/**
 * Same as `distanceX()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.absDistanceX(vec2);
 *     // => 100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceX = function (vec) {
	return Math.abs(this.distanceX(vec));
};

/**
 * Calculates the distance of the Y axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => -10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

/**
 * Same as `distanceY()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => 10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceY = function (vec) {
	return Math.abs(this.distanceY(vec));
};

/**
 * Calculates the euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distance(vec2);
 *     // => 100.4987562112089
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distance = function (vec) {
	return Math.sqrt(this.distanceSq(vec));
};

/**
 * Calculates the squared euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceSq(vec2);
 *     // => 10100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceSq = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return dx * dx + dy * dy;
};

/**
 * Calculates the length or magnitude of the vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.length();
 *     // => 111.80339887498948
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.length = function () {
	return Math.sqrt(this.lengthSq());
};

/**
 * Squared length / magnitude
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.lengthSq();
 *     // => 12500
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.lengthSq = function () {
	return this.x * this.x + this.y * this.y;
};

Victor.prototype.magnitude = Victor.prototype.length;

/**
 * Returns a true if vector is (0, 0)
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     vec.zero();
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isZero = function() {
	return this.x === 0 && this.y === 0;
};

/**
 * Returns a true if this vector is the same as another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(100, 50);
 *     vec1.isEqualTo(vec2);
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isEqualTo = function(vec2) {
	return this.x === vec2.x && this.y === vec2.y;
};

/**
 * # Utility Methods
 */

/**
 * Returns an string representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toString();
 *     // => x:10, y:20
 *
 * @return {String}
 * @api public
 */
Victor.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};

/**
 * Returns an array representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toArray();
 *     // => [10, 20]
 *
 * @return {Array}
 * @api public
 */
Victor.prototype.toArray = function () {
	return [ this.x, this.y ];
};

/**
 * Returns an object representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toObject();
 *     // => { x: 10, y: 20 }
 *
 * @return {Object}
 * @api public
 */
Victor.prototype.toObject = function () {
	return { x: this.x, y: this.y };
};


var degrees = 180 / Math.PI;

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function radian2degrees (rad) {
	return rad * degrees;
}

function degrees2radian (deg) {
	return deg / degrees;
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);