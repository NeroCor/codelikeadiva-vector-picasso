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
module.exports = __webpack_require__(10);


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
  author: 'Andreas Wolf',
  title: 'Bezier Abstraction',
  instructions: 'First you choose a Source Image. <br/> <br/> This image will then get triangulated and drawen as a Background (no Magic). <br/><br/> After this first triangulation a second triangulation will be performed, but with slightly changed parameters. The Algorithm of drawing the Lines inside these Triangles, is the same as the Algorithm which is used to draw <a href="https://en.wikipedia.org/wiki/B%C3%A9zier_curve#Constructing_B.C3.A9zier_curves" target="_blank">Quadratic Bezier Curves</a>. <br/>This Mesh of Lines atop of the triangulation gives the Artwork the feeling of depth and detail. <br/><br/> Bonus:<br/> You can upload your Image into a Imgur Album'
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

var _ImgurGallery = __webpack_require__(9);

var _ImgurGallery2 = _interopRequireDefault(_ImgurGallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Artwork = function () {
  function Artwork() {
    _classCallCheck(this, Artwork);

    this.svg = document.querySelector('svg');
    this.srcImage = new Image();

    // Imgur Upload Features
    this.imgurGallery = new _ImgurGallery2.default(this.svg);
    // My Art Class, here you find the render logic
    this.nailsAndStringDrawer = new _NailsAndStringDrawer2.default(this.svg, this.srcImage);
  }

  _createClass(Artwork, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // add controll Fields to Menu
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

          _ImgurGallery2.default.setUploadButtonStatus('ready');
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
      var element = document.createElement('h3');
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

var _victor = __webpack_require__(6);

var _victor2 = _interopRequireDefault(_victor);

var _triangulateImageBrowserEs = __webpack_require__(7);

var _triangulateImageBrowserEs2 = _interopRequireDefault(_triangulateImageBrowserEs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NailsAndStringDrawer = function () {
  function NailsAndStringDrawer(svg, srcImage) {
    _classCallCheck(this, NailsAndStringDrawer);

    this.svg = svg;
    this.srcImage = srcImage;
    this.numLines = 5;

    this.buildMenu();
  }

  _createClass(NailsAndStringDrawer, [{
    key: 'draw',
    value: function draw() {
      var _this = this;

      this.clearSVG();
      var params = {
        blur: Number(this.blur.value),
        accuracy: Number(this.accuracy.value),
        vertexCount: Number(this.vertexCount.value)
      };

      // Draw boring Triangulation
      var triangulatedImage = (0, _triangulateImageBrowserEs2.default)(params).fromImage(this.srcImage);
      triangulatedImage.toSVG().then(function (data) {
        _this.svg.innerHTML = data;

        // Cool Bézier Line calculations with slightly changed Triangulation Options
        params.accuracy += Number(_this.lineDeviation.value);
        triangulatedImage = (0, _triangulateImageBrowserEs2.default)(params).fromImage(_this.srcImage);
        triangulatedImage.toData().then(function (triangulationData) {
          var _ref;

          var lines = triangulationData.map(function (triangle) {
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

      var element = document.createElement('span');
      element.innerText = 'Hover me for more Options';
      myMenu.appendChild(element);

      var optionsContainer = document.createElement('div');
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
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
      element.addEventListener('change', function () {
        return _this2.draw();
      });
      this.lineDeviation = element;
      optionsContainer.appendChild(element);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createCommonjsModule(t, e) {
  return e = { exports: {} }, t(e, e.exports), e.exports;
}function copyImageDataWithCanvas(t) {
  var e = new Canvas$1(t.width, t.height).getContext("2d");return e.putImageData(t, 0, 0), e.getImageData(0, 0, t.width, t.height);
}function BlurStack() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}function addVertex(t, e, a) {
  var n = t + "|" + e;a[n] || (a[n] = { x: t, y: e }), n = null;
}var clamp = function clamp(t, e, a) {
  return t < e ? e : t > a ? a : t;
},
    clone = function clone(t) {
  var e = !1;if (void 0 !== t) try {
    e = JSON.parse(JSON.stringify(t));
  } catch (t) {}return e;
};
var Canvas$1 = function () {
  function Canvas$1() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

    _classCallCheck(this, Canvas$1);

    "undefined" == typeof window ? (this.canvasEl = { width: t, height: e }, this.ctx = null) : (this.canvasEl = document.createElement("canvas"), this.canvasEl.width = t, this.canvasEl.height = e, this.ctx = this.canvasEl.getContext("2d"));
  }

  _createClass(Canvas$1, [{
    key: "getContext",
    value: function getContext() {
      return this.ctx;
    }
  }, {
    key: "toDataURL",
    value: function toDataURL(t, e, a) {
      if ("function" != typeof a) return this.canvasEl.toDataURL(t, e);a(this.canvasEl.toDataURL(t, e));
    }
  }, {
    key: "width",
    get: function get() {
      return this.canvasEl.width;
    },
    set: function set(t) {
      this.canvasEl.width = t;
    }
  }, {
    key: "height",
    get: function get() {
      return this.canvasEl.height;
    },
    set: function set(t) {
      this.canvasEl.height = t;
    }
  }]);

  return Canvas$1;
}();

"undefined" != typeof window && (Canvas$1.Image = Image);var makeCanvasAndContext = function makeCanvasAndContext(t, e, a, n) {
  var o = !(!e || !e.backgroundColor) && e.backgroundColor,
      r = new Canvas$1(t.width * a, t.height * a, n),
      i = r.getContext("2d");return o && (i.fillStyle = o, i.fillRect(0, 0, t.width * a, t.height * a), i.fillStyle = "transparent"), { canvas: r, ctx: i };
},
    toColor = function toColor(t) {
  var e = makeCanvasAndContext({ width: 1, height: 1 }, {}, 1, !0).ctx;e.fillStyle = t, e.fillRect(0, 0, 1, 1);var a = e.getImageData(0, 0, 1, 1).data;return { r: a[0], g: a[1], b: a[2], a: a[3] / 255 };
},
    defaultParams = { accuracy: .7, blur: 4, fill: !0, stroke: !0, strokeWidth: .5, lineJoin: "miter", vertexCount: 700, threshold: 50, transparentColor: !1 };var allowedLineJoins = ["miter", "round", "bevel"];var sanitizeInput = function sanitizeInput(t) {
  return "object" != _typeof(t = clone(t)) && (t = {}), "number" != typeof t.accuracy || isNaN(t.accuracy) ? t.accuracy = defaultParams.accuracy : t.accuracy = clamp(t.accuracy, 0, 1), ("number" != typeof t.blur || isNaN(t.blur)) && (t.blur = defaultParams.blur), t.blur <= 0 && (t.blur = 1), "string" != typeof t.fill && "boolean" != typeof t.fill && (t.fill = defaultParams.fill), "string" != typeof t.stroke && "boolean" != typeof t.stroke && (t.stroke = defaultParams.stroke), ("number" != typeof t.strokeWidth || isNaN(t.strokeWidth)) && (t.strokeWidth = defaultParams.strokeWidth), "number" != typeof t.threshold || isNaN(t.threshold) ? t.threshold = defaultParams.threshold : t.threshold = clamp(t.threshold, 1, 100), "string" == typeof t.lineJoin && -1 !== allowedLineJoins.indexOf(t.lineJoin) || (t.lineJoin = defaultParams.lineJoin), t.gradients && t.fill ? t.gradients = !0 : t.gradients = !1, t.gradients && (("number" != typeof t.gradientStops || isNaN(t.gradientStops) || t.gradientStops < 2) && (t.gradientStops = 2), t.gradientStops = Math.round(t.gradientStops)), ("number" != typeof t.vertexCount || isNaN(t.vertexCount)) && (t.vertexCount = defaultParams.vertexCount), t.vertexCount <= 0 && (t.vertexCount = 1), "string" != typeof t.transparentColor && "boolean" != typeof t.transparentColor && (t.transparentColor = defaultParams.transparentColor), !0 === _typeof(t.transparentColor) && (t.transparentColor = !1), "string" == typeof t.transparentColor && (t.transparentColor = toColor(t.transparentColor)), t;
},
    fromImageToImageData = function fromImageToImageData(t) {
  if (t instanceof HTMLImageElement) {
    if (!t.naturalWidth || !t.naturalHeight || !1 === t.complete) throw new Error("This this image hasn't finished loading: " + t.src);var e = new Canvas$1(t.naturalWidth, t.naturalHeight),
        a = e.getContext("2d");a.drawImage(t, 0, 0, e.width, e.height);var n = a.getImageData(0, 0, e.width, e.height);return n.data && n.data.length && (void 0 === n.width && (n.width = t.naturalWidth), void 0 === n.height && (n.height = t.naturalHeight)), n;
  }throw new Error("This object does not seem to be an image.");
};var objectAssign = Object.assign;var toRGBA = function toRGBA(t) {
  var e = objectAssign({ a: 1 }, t);return "rgba(" + e.r + ", " + e.g + ", " + e.b + ", " + e.a + ")";
},
    drawPolygonsOnContext = function drawPolygonsOnContext(t, e, a, n) {
  return n = n || 1, e.forEach(function (e, a) {
    if (t.beginPath(), t.moveTo(e.a.x * n, e.a.y * n), t.lineTo(e.b.x * n, e.b.y * n), t.lineTo(e.c.x * n, e.c.y * n), t.lineTo(e.a.x * n, e.a.y * n), e.gradient) {
      var _a = t.createLinearGradient(e.gradient.x1 * n, e.gradient.y1 * n, e.gradient.x2 * n, e.gradient.y2 * n),
          o = e.gradient.colors.length - 1;e.gradient.colors.forEach(function (t, e) {
        var n = toRGBA(t);_a.addColorStop(e / o, n);
      }), t.fillStyle = _a, t.fill(), e.strokeWidth > 0 && (t.strokeStyle = _a, t.lineWidth = e.strokeWidth * n, t.lineJoin = e.lineJoin, t.stroke());
    } else e.fill && (t.fillStyle = e.fill, t.fill()), e.strokeColor && (t.strokeStyle = e.strokeColor, t.lineWidth = e.strokeWidth * n, t.lineJoin = e.lineJoin, t.stroke());t.closePath();
  }), t;
},
    polygonsToImageData = function polygonsToImageData(t, e, a) {
  var n = a && a.dpr ? a.dpr : 1,
      o = makeCanvasAndContext(e, a, n, !0).ctx;return drawPolygonsOnContext(o, t, e, n), o.getImageData(0, 0, e.width * n, e.height * n);
},
    polygonsToDataURL = function polygonsToDataURL(t, e, a) {
  var n = a && a.dpr ? a.dpr : 1,
      o = makeCanvasAndContext(e, a, n);return drawPolygonsOnContext(o.ctx, t, e, n), o.canvas.toDataURL();
},
    polygonsToSVG = function polygonsToSVG(t, e) {
  var a = "";t.length && t[0].gradient && (a = "<defs>");var n = "";t.forEach(function (t, e) {
    var o = t.a,
        r = t.b,
        i = t.c;
    if (n += "<polygon points=\"" + o.x + "," + o.y + " " + r.x + "," + r.y + " " + i.x + "," + i.y + "\"", t.gradient) {
      var _o = t.boundingBox,
          _r = ((t.gradient.x1 - _o.x) / _o.width * 100).toFixed(3),
          _i = ((t.gradient.y1 - _o.y) / _o.height * 100).toFixed(3),
          s = ((t.gradient.x2 - _o.x) / _o.width * 100).toFixed(3),
          l = ((t.gradient.y2 - _o.y) / _o.height * 100).toFixed(3);a += "\n\t<linearGradient id=\"gradient-" + e + "\" x1=\"" + _r + "%\" y1=\"" + _i + "%\" x2=\"" + s + "%\" y2=\"" + l + "%\">";var h = t.gradient.colors.length - 1;t.gradient.colors.forEach(function (t, e) {
        var n = toRGBA(t),
            o = (e / h * 100).toFixed(3);a += "\n\t\t\t\t\t<stop offset=\"" + o + "%\" stop-color=\"" + n + "\"/>\n\t\t\t\t";
      }), a += "</linearGradient>", n += " fill=\"url(#gradient-" + e + ")\"", t.strokeWidth > 0 && (n += " stroke=\"url(#gradient-" + e + ")\" stroke-width=\"" + t.strokeWidth + "\" stroke-linejoin=\"" + t.lineJoin + "\"");
    } else t.fill ? n += " fill=\"" + t.fill + "\"" : n += ' fill="transparent"', t.strokeColor && (n += " stroke=\"" + t.strokeColor + "\" stroke-width=\"" + t.strokeWidth + "\" stroke-linejoin=\"" + t.lineJoin + "\"");n += "/>\n\t";
  }), a.length && (a += "\n\t\t</defs>");return "<?xml version=\"1.0\" standalone=\"yes\"?>\n<svg width=\"" + e.width + "\" height=\"" + e.height + "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" >\n\t" + a + "\n\t" + n + "\n</svg>";
},
    commonjsGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
    delaunay = createCommonjsModule(function (t) {
  function e(t, e, a) {
    this.a = t, this.b = e, this.c = a;var n,
        o,
        r,
        i,
        s = e.x - t.x,
        l = e.y - t.y,
        h = a.x - t.x,
        g = a.y - t.y,
        d = s * (t.x + e.x) + l * (t.y + e.y),
        c = h * (t.x + a.x) + g * (t.y + a.y),
        u = 2 * (s * (a.y - e.y) - l * (a.x - e.x));Math.abs(u) < 1e-6 ? (n = Math.min(t.x, e.x, a.x), o = Math.min(t.y, e.y, a.y), r = .5 * (Math.max(t.x, e.x, a.x) - n), i = .5 * (Math.max(t.y, e.y, a.y) - o), this.x = n + r, this.y = o + i, this.r = r * r + i * i) : (this.x = (g * d - l * c) / u, this.y = (s * c - h * d) / u, r = this.x - t.x, i = this.y - t.y, this.r = r * r + i * i);
  }function a(t, e) {
    return e.x - t.x;
  }function n(t) {
    var e,
        a,
        n,
        o,
        r,
        i = t.length;t: for (; i;) {
      for (a = t[--i], e = t[--i], n = i; n;) {
        if (r = t[--n], o = t[--n], e === o && a === r || e === r && a === o) {
          t.splice(i, 2), t.splice(n, 2), i -= 2;continue t;
        }
      }
    }
  }function o(t) {
    if (t.length < 3) return [];t.sort(a);for (var o = t.length - 1, r = t[o].x, i = t[0].x, s = t[o].y, l = s; o--;) {
      t[o].y < s && (s = t[o].y), t[o].y > l && (l = t[o].y);
    }var h,
        g,
        d,
        c = i - r,
        u = l - s,
        y = c > u ? c : u,
        f = .5 * (i + r),
        p = .5 * (l + s),
        m = [new e({ x: f - 20 * y, y: p - y, __sentinel: !0 }, { x: f, y: p + 20 * y, __sentinel: !0 }, { x: f + 20 * y, y: p - y, __sentinel: !0 })],
        x = [],
        w = [];for (o = t.length; o--;) {
      for (w.length = 0, h = m.length; h--;) {
        (c = t[o].x - m[h].x) > 0 && c * c > m[h].r ? (x.push(m[h]), m.splice(h, 1)) : c * c + (u = t[o].y - m[h].y) * u > m[h].r || (w.push(m[h].a, m[h].b, m[h].b, m[h].c, m[h].c, m[h].a), m.splice(h, 1));
      }for (n(w), h = w.length; h;) {
        d = w[--h], g = w[--h], m.push(new e(g, d, t[o]));
      }
    }for (Array.prototype.push.apply(x, m), o = x.length; o--;) {
      (x[o].a.__sentinel || x[o].b.__sentinel || x[o].c.__sentinel) && x.splice(o, 1);
    }return x;
  }e.prototype.draw = function (t) {
    t.beginPath(), t.moveTo(this.a.x, this.a.y), t.lineTo(this.b.x, this.b.y), t.lineTo(this.c.x, this.c.y), t.closePath(), t.stroke();
  }, t.exports = { Triangle: e, triangulate: o };
}),
    delaunay_2 = delaunay.triangulate,
    sobel = createCommonjsModule(function (t, e) {
  !function (a) {
    "use strict";
    function n(t) {
      function e(t) {
        return function (e, a, n) {
          return n = n || 0, t[4 * (r * a + e) + n];
        };
      }if (!(this instanceof n)) return new n(t);var a,
          o,
          r = t.width,
          i = t.height,
          s = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]],
          l = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]],
          h = [],
          g = [],
          d = e(t.data);for (o = 0; o < i; o++) {
        for (a = 0; a < r; a++) {
          var c = (d(a, o, 0) + d(a, o, 1) + d(a, o, 2)) / 3;g.push(c, c, c, 255);
        }
      }for (d = e(g), o = 0; o < i; o++) {
        for (a = 0; a < r; a++) {
          var u = s[0][0] * d(a - 1, o - 1) + s[0][1] * d(a, o - 1) + s[0][2] * d(a + 1, o - 1) + s[1][0] * d(a - 1, o) + s[1][1] * d(a, o) + s[1][2] * d(a + 1, o) + s[2][0] * d(a - 1, o + 1) + s[2][1] * d(a, o + 1) + s[2][2] * d(a + 1, o + 1),
              y = l[0][0] * d(a - 1, o - 1) + l[0][1] * d(a, o - 1) + l[0][2] * d(a + 1, o - 1) + l[1][0] * d(a - 1, o) + l[1][1] * d(a, o) + l[1][2] * d(a + 1, o) + l[2][0] * d(a - 1, o + 1) + l[2][1] * d(a, o + 1) + l[2][2] * d(a + 1, o + 1),
              f = Math.sqrt(u * u + y * y) >>> 0;h.push(f, f, f, 255);
        }
      }var p = h;return "function" == typeof Uint8ClampedArray && (p = new Uint8ClampedArray(h)), p.toImageData = function () {
        return n.toImageData(p, r, i);
      }, p;
    }function o(t, e, a) {
      return { width: e, height: a, data: t };
    }n.toImageData = function (t, e, a) {
      if ("function" == typeof ImageData && "[object Uint16Array]" === Object.prototype.toString.call(t)) return new ImageData(t, e, a);if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && "object" == _typeof(window.document)) {
        var n = document.createElement("canvas");if ("function" == typeof n.getContext) {
          var r = n.getContext("2d").createImageData(e, a);return r.data.set(t), r;
        }return new o(t, e, a);
      }return new o(t, e, a);
    }, t.exports && (e = t.exports = n), e.Sobel = n;
  }();
}),
    isImageData = function isImageData(t) {
  return t && "number" == typeof t.width && "number" == typeof t.height && t.data && "number" == typeof t.data.length && "object" == _typeof(t.data);
},
    copyImageData = function copyImageData(t) {
  if (isImageData(t)) {
    if ("undefined" == typeof Uint8ClampedArray) {
      if ("undefined" == typeof window) throw new Error("Can't copy imageData in webworker without Uint8ClampedArray support.");return copyImageDataWithCanvas(t);
    }{
      var e = new Uint8ClampedArray(t.data);if ("undefined" == typeof ImageData) return { width: t.width, height: t.height, data: e };{
        var a = void 0;try {
          a = new ImageData(e, t.width, t.height);
        } catch (e) {
          if ("undefined" == typeof window) throw new Error("Can't copy imageData in webworker without proper ImageData() support.");a = copyImageDataWithCanvas(t);
        }return a;
      }
    }
  }throw new Error("Given imageData object is not useable.");
};var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
    shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];var stackblur = function stackblur(t, e, a, n, o, r) {
  var i,
      s,
      l,
      h,
      g,
      d,
      c,
      u,
      y,
      f,
      p,
      m,
      x,
      w,
      b,
      C,
      v,
      D,
      k,
      P,
      I,
      B,
      _,
      E,
      S = t.data,
      W = r + r + 1,
      M = n - 1,
      T = o - 1,
      j = r + 1,
      G = j * (j + 1) / 2,
      $ = new BlurStack(),
      J = $;for (l = 1; l < W; l++) {
    if (J = J.next = new BlurStack(), l == j) var A = J;
  }J.next = $;var U = null,
      L = null;c = d = 0;var O = mul_table[r],
      V = shg_table[r];for (s = 0; s < o; s++) {
    for (C = v = D = k = u = y = f = p = 0, m = j * (P = S[d]), x = j * (I = S[d + 1]), w = j * (B = S[d + 2]), b = j * (_ = S[d + 3]), u += G * P, y += G * I, f += G * B, p += G * _, J = $, l = 0; l < j; l++) {
      J.r = P, J.g = I, J.b = B, J.a = _, J = J.next;
    }for (l = 1; l < j; l++) {
      h = d + ((M < l ? M : l) << 2), u += (J.r = P = S[h]) * (E = j - l), y += (J.g = I = S[h + 1]) * E, f += (J.b = B = S[h + 2]) * E, p += (J.a = _ = S[h + 3]) * E, C += P, v += I, D += B, k += _, J = J.next;
    }for (U = $, L = A, i = 0; i < n; i++) {
      S[d + 3] = _ = p * O >> V, 0 != _ ? (_ = 255 / _, S[d] = (u * O >> V) * _, S[d + 1] = (y * O >> V) * _, S[d + 2] = (f * O >> V) * _) : S[d] = S[d + 1] = S[d + 2] = 0, u -= m, y -= x, f -= w, p -= b, m -= U.r, x -= U.g, w -= U.b, b -= U.a, h = c + ((h = i + r + 1) < M ? h : M) << 2, u += C += U.r = S[h], y += v += U.g = S[h + 1], f += D += U.b = S[h + 2], p += k += U.a = S[h + 3], U = U.next, m += P = L.r, x += I = L.g, w += B = L.b, b += _ = L.a, C -= P, v -= I, D -= B, k -= _, L = L.next, d += 4;
    }c += n;
  }for (i = 0; i < n; i++) {
    for (v = D = k = C = y = f = p = u = 0, m = j * (P = S[d = i << 2]), x = j * (I = S[d + 1]), w = j * (B = S[d + 2]), b = j * (_ = S[d + 3]), u += G * P, y += G * I, f += G * B, p += G * _, J = $, l = 0; l < j; l++) {
      J.r = P, J.g = I, J.b = B, J.a = _, J = J.next;
    }for (g = n, l = 1; l <= r; l++) {
      d = g + i << 2, u += (J.r = P = S[d]) * (E = j - l), y += (J.g = I = S[d + 1]) * E, f += (J.b = B = S[d + 2]) * E, p += (J.a = _ = S[d + 3]) * E, C += P, v += I, D += B, k += _, J = J.next, l < T && (g += n);
    }for (d = i, U = $, L = A, s = 0; s < o; s++) {
      S[(h = d << 2) + 3] = _ = p * O >> V, _ > 0 ? (_ = 255 / _, S[h] = (u * O >> V) * _, S[h + 1] = (y * O >> V) * _, S[h + 2] = (f * O >> V) * _) : S[h] = S[h + 1] = S[h + 2] = 0, u -= m, y -= x, f -= w, p -= b, m -= U.r, x -= U.g, w -= U.b, b -= U.a, h = i + ((h = s + j) < T ? h : T) * n << 2, u += C += U.r = S[h], y += v += U.g = S[h + 1], f += D += U.b = S[h + 2], p += k += U.a = S[h + 3], U = U.next, m += P = L.r, x += I = L.g, w += B = L.b, b += _ = L.a, C -= P, v -= I, D -= B, k -= _, L = L.next, d += n;
    }
  }return t;
},
    greyscale = function greyscale(t) {
  var e = t.data.length;var a = void 0;for (var n = 0; n < e; n += 4) {
    a = .34 * t.data[n] + .5 * t.data[n + 1] + .16 * t.data[n + 2], t.data[n] = a, t.data[n + 1] = a, t.data[n + 2] = a;
  }return t;
},
    getEdgePoints = function getEdgePoints(t, e) {
  var a = t.width,
      n = t.height,
      o = t.data,
      r = [];var i, s, l, h, g, d, c, u, y;for (s = 0; s < n; s += 2) {
    for (i = 0; i < a; i += 2) {
      for (u = y = 0, l = -1; l <= 1; l++) {
        if (d = s + l, c = d * a, d >= 0 && d < n) for (h = -1; h <= 1; h++) {
          (g = i + h) >= 0 && g < a && (u += o[g + c << 2], y++);
        }
      }y && (u /= y), u > e && r.push({ x: i, y: s });
    }
  }return r;
},
    getVerticesFromPoints = function getVerticesFromPoints(t, e, a, n, o) {
  var r = {},
      i = Math.max(~~(e * (1 - a)), 5),
      s = Math.round(Math.sqrt(i)),
      l = ~~(n / s),
      h = ~~(o / Math.round(Math.ceil(i / s)));var g = 0,
      d = 0,
      c = 0,
      u = 0;for (u = 0; u < o; u += h) {
    for (c = d = ++g % 2 == 0 ? ~~(l / 2) : 0; c < n; c += l) {
      c < n && u < o && addVertex(~~(c + Math.cos(u) * h), ~~(u + Math.sin(c) * l), r);
    }
  }addVertex(0, 0, r), addVertex(n - 1, 0, r), addVertex(n - 1, o - 1, r), addVertex(0, o - 1, r);var y = e - Object.keys(r).length,
      f = t.length,
      p = ~~(f / y);if (e > 0 && p > 0) {
    var _e = 0;for (_e = 0; _e < f; _e += p) {
      addVertex(t[_e].x, t[_e].y, r);
    }
  }return t = null, Object.keys(r).map(function (t) {
    return r[t];
  });
},
    getBoundingBox = function getBoundingBox(t) {
  var e = 1 / 0,
      a = -1 / 0,
      n = 1 / 0,
      o = -1 / 0;return t.forEach(function (t) {
    t.x < e && (e = t.x), t.y < n && (n = t.y), t.x > a && (a = t.x), t.y > o && (o = t.y);
  }), { x: e, y: n, width: a - e, height: o - n };
},
    addBoundingBoxesToPolygons = function addBoundingBoxesToPolygons(t, e, a) {
  return t.forEach(function (t) {
    t.boundingBox = getBoundingBox([t.a, t.b, t.c]);
  }), t.filter(function (t) {
    return t.boundingBox.width > 0 && t.boundingBox.height > 0;
  });
},
    getColorByPos = function getColorByPos(t, e, a) {
  var n = (0 | clamp(t.x, 1, e.width - 2)) + (0 | clamp(t.y, 1, e.height - 2)) * e.width << 2;n >= e.data.length && (n = e.data.length - 5);var o = e.data[n + 3] / 255;return a && 0 === o ? a : { r: e.data[n], g: e.data[n + 1], b: e.data[n + 2], a: o };
},
    polygonCenter = function polygonCenter(t) {
  return { x: .33333 * (t.a.x + t.b.x + t.c.x), y: .33333 * (t.a.y + t.b.y + t.c.y) };
},
    isTransparent = function isTransparent(t) {
  return 0 === t.a;
},
    addColorToPolygons = function addColorToPolygons(t, e, a) {
  var n = a.fill,
      o = a.stroke,
      r = a.strokeWidth,
      i = a.lineJoin,
      s = a.transparentColor,
      l = "string" == typeof n && n,
      h = "string" == typeof o && o,
      g = function g(t, e) {
    var a = isTransparent(t) && s;return e && !a ? e : toRGBA(a ? s : t);
  };

  return t.forEach(function (t) {
    var a = getColorByPos(polygonCenter(t), e);n && (t.fill = g(a, l)), o && (t.strokeColor = g(a, h), t.strokeWidth = r, t.lineJoin = i);
  }), t;
},
    luminance = function luminance(t) {
  var e = [t.r, t.g, t.b].map(function (t) {
    return (t /= 255) <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  });return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
},
    distance = function distance(t, e) {
  var a = e.x - t.x,
      n = e.y - t.y;return Math.sqrt(a * a + n * n);
},
    addGradientsToPolygons = function addGradientsToPolygons(t, e, a) {
  return t.forEach(function (t) {
    var n = {};"abc".split("").forEach(function (o) {
      var r = getColorByPos(t[o], e, a.transparentColor);n[o] = { key: o, color: r, x: t[o].x, y: t[o].y }, n[o].luminance = luminance(n[o].color);var i = "abc".replace(o, "").split("");n[o].median = { x: (t[i[0]].x + t[i[1]].x) / 2, y: (t[i[0]].y + t[i[1]].y) / 2 }, n[o].medianColor = getColorByPos(n[o].median, e, a.transparentColor), n[o].medianLuminance = luminance(n[o].medianColor);
    });var o = [n.a, n.b, n.c].sort(function (t, e) {
      return Math.abs(t.luminance - t.medianLuminance) - Math.abs(e.luminance - e.medianLuminance);
    }),
        r = o[0],
        i = o[0],
        s = r.median,
        l = [i],
        h = distance(i, s);for (var _t = 1, _e2 = a.gradientStops - 2; _t < _e2; _t++) {
      var _e3 = _t * (h / a.gradientStops) / h,
          _n = { x: i.x + _e3 * (s.x - i.x), y: i.y + _e3 * (s.y - i.y) };l.push(_n);
    }l.push(s), t.gradient = { x1: r.x, y1: r.y, x2: r.median.x, y2: r.median.y, colors: l.map(function (t) {
        return getColorByPos(t, e, a.transparentColor);
      }) }, a.stroke && (t.strokeWidth = a.strokeWidth, t.lineJoin = a.lineJoin), n = null;
  }), t;
},
    filterTransparentPolygons = function filterTransparentPolygons(t, e) {
  return t.filter(function (t) {
    var a = getColorByPos(polygonCenter(t), e);return !isTransparent(a);
  });
},
    imageDataToPolygons = function imageDataToPolygons(t, e) {
  if (isImageData(t)) {
    var a = { width: t.width, height: t.height },
        n = copyImageData(t),
        o = copyImageData(t),
        r = stackblur(n, 0, 0, a.width, a.height, e.blur),
        i = greyscale(r),
        s = sobel(i).toImageData(),
        l = getEdgePoints(s, e.threshold),
        h = getVerticesFromPoints(l, e.vertexCount, e.accuracy, a.width, a.height);var g = delaunay_2(h);return g = addBoundingBoxesToPolygons(g), e.transparentColor || (g = filterTransparentPolygons(g, o)), g = !0 === e.fill && !0 === e.gradients ? addGradientsToPolygons(g, o, e) : addColorToPolygons(g, o, e);
  }throw new Error("Can't work with the imageData provided. It seems to be corrupt.");
},
    browser = function browser(t) {
  function e() {
    var t = objectAssign({}, c);return g || objectAssign(t, u), t;
  }function a() {
    var t = objectAssign({}, c);return d || objectAssign(t, y), t;
  }function n(t, e, n) {
    return s = !!n, g = function g() {
      return s ? t(e) : new Promise(function (a, n) {
        try {
          a(t(e));
        } catch (t) {
          n(t);
        }
      });
    }, r() ? i() : a();
  }function o(t, a, n) {
    return l = !!n, d = function d(e, n) {
      return l ? t(e, n, a) : new Promise(function (o, r) {
        try {
          o(t(e, n, a));
        } catch (t) {
          r(t);
        }
      });
    }, r() ? i() : e();
  }function r() {
    return g && d;
  }function i() {
    if (s && l) {
      var _e4 = g(t),
          _a2 = imageDataToPolygons(_e4, t);return d(_a2, _e4);
    }return new Promise(function (e, a) {
      var n = void 0;(function (t) {
        return new Promise(function (e, a) {
          if (s) try {
            var _n2 = g(t);e(_n2);
          } catch (t) {
            a(t);
          } else g(t).then(e, a);
        });
      })().then(function (e) {
        return n = e, function (t, e) {
          return new Promise(function (a, n) {
            h.addEventListener("message", function (t) {
              if (t.data && t.data.polygonJSONStr) {
                var _e5 = JSON.parse(t.data.polygonJSONStr);a(_e5);
              } else n(t.data && t.data.err ? t.data.err : t);
            }), h.postMessage({ params: e, imageData: t, imageDataWidth: t.width, imageDataHeight: t.height });
          });
        }(n, t);
      }, a).then(function (t) {
        return function (t, e) {
          return new Promise(function (a, n) {
            if (l) try {
              var _o2 = d(t, e);a(_o2);
            } catch (t) {
              n(t);
            } else d(t, e).then(a, n);
          });
        }(t, n);
      }, a).then(function (t) {
        e(t);
      }, a);
    });
  }t = sanitizeInput(t);var s = !1,
      l = !1;var h = new Worker(URL.createObjectURL(new Blob(['function createCommonjsModule(t,e){return e={exports:{}},t(e,e.exports),e.exports}function copyImageDataWithCanvas(t){const e=new Canvas$1(t.width,t.height).getContext("2d");return e.putImageData(t,0,0),e.getImageData(0,0,t.width,t.height)}function BlurStack(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function addVertex(t,e,a){let n=t+"|"+e;a[n]||(a[n]={x:t,y:e}),n=null}var commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},delaunay=createCommonjsModule(function(t){function e(t,e,a){this.a=t,this.b=e,this.c=a;var n,o,r,i,s=e.x-t.x,h=e.y-t.y,l=a.x-t.x,d=a.y-t.y,g=s*(t.x+e.x)+h*(t.y+e.y),c=l*(t.x+a.x)+d*(t.y+a.y),u=2*(s*(a.y-e.y)-h*(a.x-e.x));Math.abs(u)<1e-6?(n=Math.min(t.x,e.x,a.x),o=Math.min(t.y,e.y,a.y),r=.5*(Math.max(t.x,e.x,a.x)-n),i=.5*(Math.max(t.y,e.y,a.y)-o),this.x=n+r,this.y=o+i,this.r=r*r+i*i):(this.x=(d*g-h*c)/u,this.y=(s*c-l*g)/u,r=this.x-t.x,i=this.y-t.y,this.r=r*r+i*i)}function a(t,e){return e.x-t.x}function n(t){var e,a,n,o,r,i=t.length;t:for(;i;)for(a=t[--i],e=t[--i],n=i;n;)if(r=t[--n],o=t[--n],e===o&&a===r||e===r&&a===o){t.splice(i,2),t.splice(n,2),i-=2;continue t}}function o(t){if(t.length<3)return[];t.sort(a);for(var o=t.length-1,r=t[o].x,i=t[0].x,s=t[o].y,h=s;o--;)t[o].y<s&&(s=t[o].y),t[o].y>h&&(h=t[o].y);var l,d,g,c=i-r,u=h-s,y=c>u?c:u,f=.5*(i+r),p=.5*(h+s),m=[new e({x:f-20*y,y:p-y,__sentinel:!0},{x:f,y:p+20*y,__sentinel:!0},{x:f+20*y,y:p-y,__sentinel:!0})],x=[],w=[];for(o=t.length;o--;){for(w.length=0,l=m.length;l--;)(c=t[o].x-m[l].x)>0&&c*c>m[l].r?(x.push(m[l]),m.splice(l,1)):c*c+(u=t[o].y-m[l].y)*u>m[l].r||(w.push(m[l].a,m[l].b,m[l].b,m[l].c,m[l].c,m[l].a),m.splice(l,1));for(n(w),l=w.length;l;)g=w[--l],d=w[--l],m.push(new e(d,g,t[o]))}for(Array.prototype.push.apply(x,m),o=x.length;o--;)(x[o].a.__sentinel||x[o].b.__sentinel||x[o].c.__sentinel)&&x.splice(o,1);return x}e.prototype.draw=function(t){t.beginPath(),t.moveTo(this.a.x,this.a.y),t.lineTo(this.b.x,this.b.y),t.lineTo(this.c.x,this.c.y),t.closePath(),t.stroke()},t.exports={Triangle:e,triangulate:o}}),delaunay_2=delaunay.triangulate,sobel=createCommonjsModule(function(t,e){!function(a){"use strict";function n(t){function e(t){return function(e,a,n){return n=n||0,t[4*(r*a+e)+n]}}if(!(this instanceof n))return new n(t);var a,o,r=t.width,i=t.height,s=[[-1,0,1],[-2,0,2],[-1,0,1]],h=[[-1,-2,-1],[0,0,0],[1,2,1]],l=[],d=[],g=e(t.data);for(o=0;o<i;o++)for(a=0;a<r;a++){var c=(g(a,o,0)+g(a,o,1)+g(a,o,2))/3;d.push(c,c,c,255)}for(g=e(d),o=0;o<i;o++)for(a=0;a<r;a++){var u=s[0][0]*g(a-1,o-1)+s[0][1]*g(a,o-1)+s[0][2]*g(a+1,o-1)+s[1][0]*g(a-1,o)+s[1][1]*g(a,o)+s[1][2]*g(a+1,o)+s[2][0]*g(a-1,o+1)+s[2][1]*g(a,o+1)+s[2][2]*g(a+1,o+1),y=h[0][0]*g(a-1,o-1)+h[0][1]*g(a,o-1)+h[0][2]*g(a+1,o-1)+h[1][0]*g(a-1,o)+h[1][1]*g(a,o)+h[1][2]*g(a+1,o)+h[2][0]*g(a-1,o+1)+h[2][1]*g(a,o+1)+h[2][2]*g(a+1,o+1),f=Math.sqrt(u*u+y*y)>>>0;l.push(f,f,f,255)}var p=l;return"function"==typeof Uint8ClampedArray&&(p=new Uint8ClampedArray(l)),p.toImageData=function(){return n.toImageData(p,r,i)},p}function o(t,e,a){return{width:e,height:a,data:t}}n.toImageData=function(t,e,a){if("function"==typeof ImageData&&"[object Uint16Array]"===Object.prototype.toString.call(t))return new ImageData(t,e,a);if("object"==typeof window&&"object"==typeof window.document){var n=document.createElement("canvas");if("function"==typeof n.getContext){var r=n.getContext("2d").createImageData(e,a);return r.data.set(t),r}return new o(t,e,a)}return new o(t,e,a)},t.exports&&(e=t.exports=n),e.Sobel=n}()}),isImageData=t=>t&&"number"==typeof t.width&&"number"==typeof t.height&&t.data&&"number"==typeof t.data.length&&"object"==typeof t.data;class Canvas$1{constructor(t=300,e=150){"undefined"==typeof window?(this.canvasEl={width:t,height:e},this.ctx=null):(this.canvasEl=document.createElement("canvas"),this.canvasEl.width=t,this.canvasEl.height=e,this.ctx=this.canvasEl.getContext("2d"))}getContext(){return this.ctx}toDataURL(t,e,a){if("function"!=typeof a)return this.canvasEl.toDataURL(t,e);a(this.canvasEl.toDataURL(t,e))}get width(){return this.canvasEl.width}set width(t){this.canvasEl.width=t}get height(){return this.canvasEl.height}set height(t){this.canvasEl.height=t}}"undefined"!=typeof window&&(Canvas$1.Image=Image);var copyImageData=t=>{if(isImageData(t)){if("undefined"==typeof Uint8ClampedArray){if("undefined"==typeof window)throw new Error("Can\'t copy imageData in webworker without Uint8ClampedArray support.");return copyImageDataWithCanvas(t)}{const e=new Uint8ClampedArray(t.data);if("undefined"==typeof ImageData)return{width:t.width,height:t.height,data:e};{let a;try{a=new ImageData(e,t.width,t.height)}catch(e){if("undefined"==typeof window)throw new Error("Can\'t copy imageData in webworker without proper ImageData() support.");a=copyImageDataWithCanvas(t)}return a}}}throw new Error("Given imageData object is not useable.")};const mul_table=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],shg_table=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];var stackblur=(t,e,a,n,o,r)=>{var i,s,h,l,d,g,c,u,y,f,p,m,x,w,b,v,C,D,I,E,M,P,B,k,_=t.data,T=r+r+1,j=n-1,A=o-1,S=r+1,U=S*(S+1)/2,V=new BlurStack,W=V;for(h=1;h<T;h++)if(W=W.next=new BlurStack,h==S)var $=W;W.next=V;var G=null,J=null;c=g=0;var L=mul_table[r],O=shg_table[r];for(s=0;s<o;s++){for(v=C=D=I=u=y=f=p=0,m=S*(E=_[g]),x=S*(M=_[g+1]),w=S*(P=_[g+2]),b=S*(B=_[g+3]),u+=U*E,y+=U*M,f+=U*P,p+=U*B,W=V,h=0;h<S;h++)W.r=E,W.g=M,W.b=P,W.a=B,W=W.next;for(h=1;h<S;h++)l=g+((j<h?j:h)<<2),u+=(W.r=E=_[l])*(k=S-h),y+=(W.g=M=_[l+1])*k,f+=(W.b=P=_[l+2])*k,p+=(W.a=B=_[l+3])*k,v+=E,C+=M,D+=P,I+=B,W=W.next;for(G=V,J=$,i=0;i<n;i++)_[g+3]=B=p*L>>O,0!=B?(B=255/B,_[g]=(u*L>>O)*B,_[g+1]=(y*L>>O)*B,_[g+2]=(f*L>>O)*B):_[g]=_[g+1]=_[g+2]=0,u-=m,y-=x,f-=w,p-=b,m-=G.r,x-=G.g,w-=G.b,b-=G.a,l=c+((l=i+r+1)<j?l:j)<<2,u+=v+=G.r=_[l],y+=C+=G.g=_[l+1],f+=D+=G.b=_[l+2],p+=I+=G.a=_[l+3],G=G.next,m+=E=J.r,x+=M=J.g,w+=P=J.b,b+=B=J.a,v-=E,C-=M,D-=P,I-=B,J=J.next,g+=4;c+=n}for(i=0;i<n;i++){for(C=D=I=v=y=f=p=u=0,m=S*(E=_[g=i<<2]),x=S*(M=_[g+1]),w=S*(P=_[g+2]),b=S*(B=_[g+3]),u+=U*E,y+=U*M,f+=U*P,p+=U*B,W=V,h=0;h<S;h++)W.r=E,W.g=M,W.b=P,W.a=B,W=W.next;for(d=n,h=1;h<=r;h++)g=d+i<<2,u+=(W.r=E=_[g])*(k=S-h),y+=(W.g=M=_[g+1])*k,f+=(W.b=P=_[g+2])*k,p+=(W.a=B=_[g+3])*k,v+=E,C+=M,D+=P,I+=B,W=W.next,h<A&&(d+=n);for(g=i,G=V,J=$,s=0;s<o;s++)_[(l=g<<2)+3]=B=p*L>>O,B>0?(B=255/B,_[l]=(u*L>>O)*B,_[l+1]=(y*L>>O)*B,_[l+2]=(f*L>>O)*B):_[l]=_[l+1]=_[l+2]=0,u-=m,y-=x,f-=w,p-=b,m-=G.r,x-=G.g,w-=G.b,b-=G.a,l=i+((l=s+S)<A?l:A)*n<<2,u+=v+=G.r=_[l],y+=C+=G.g=_[l+1],f+=D+=G.b=_[l+2],p+=I+=G.a=_[l+3],G=G.next,m+=E=J.r,x+=M=J.g,w+=P=J.b,b+=B=J.a,v-=E,C-=M,D-=P,I-=B,J=J.next,g+=n}return t},greyscale=t=>{const e=t.data.length;let a;for(let n=0;n<e;n+=4)a=.34*t.data[n]+.5*t.data[n+1]+.16*t.data[n+2],t.data[n]=a,t.data[n+1]=a,t.data[n+2]=a;return t},getEdgePoints=(t,e)=>{const a=t.width,n=t.height,o=t.data,r=[];var i,s,h,l,d,g,c,u,y;for(s=0;s<n;s+=2)for(i=0;i<a;i+=2){for(u=y=0,h=-1;h<=1;h++)if(g=s+h,c=g*a,g>=0&&g<n)for(l=-1;l<=1;l++)(d=i+l)>=0&&d<a&&(u+=o[d+c<<2],y++);y&&(u/=y),u>e&&r.push({x:i,y:s})}return r},clamp=(t,e,a)=>t<e?e:t>a?a:t,getVerticesFromPoints=(t,e,a,n,o)=>{const r={},i=Math.max(~~(e*(1-a)),5),s=Math.round(Math.sqrt(i)),h=~~(n/s),l=~~(o/Math.round(Math.ceil(i/s)));let d=0,g=0,c=0,u=0;for(u=0;u<o;u+=l)for(c=g=++d%2==0?~~(h/2):0;c<n;c+=h)c<n&&u<o&&addVertex(~~(c+Math.cos(u)*l),~~(u+Math.sin(c)*h),r);addVertex(0,0,r),addVertex(n-1,0,r),addVertex(n-1,o-1,r),addVertex(0,o-1,r);const y=e-Object.keys(r).length,f=t.length,p=~~(f/y);if(e>0&&p>0){let e=0;for(e=0;e<f;e+=p)addVertex(t[e].x,t[e].y,r)}return t=null,Object.keys(r).map(t=>r[t])},getBoundingBox=t=>{let e=1/0,a=-1/0,n=1/0,o=-1/0;return t.forEach(t=>{t.x<e&&(e=t.x),t.y<n&&(n=t.y),t.x>a&&(a=t.x),t.y>o&&(o=t.y)}),{x:e,y:n,width:a-e,height:o-n}},addBoundingBoxesToPolygons=(t,e,a)=>(t.forEach(t=>{t.boundingBox=getBoundingBox([t.a,t.b,t.c])}),t.filter(t=>t.boundingBox.width>0&&t.boundingBox.height>0)),getColorByPos=(t,e,a)=>{let n=(0|clamp(t.x,1,e.width-2))+(0|clamp(t.y,1,e.height-2))*e.width<<2;n>=e.data.length&&(n=e.data.length-5);const o=e.data[n+3]/255;return a&&0===o?a:{r:e.data[n],g:e.data[n+1],b:e.data[n+2],a:o}},polygonCenter=t=>({x:.33333*(t.a.x+t.b.x+t.c.x),y:.33333*(t.a.y+t.b.y+t.c.y)}),isTransparent=t=>0===t.a;const objectAssign=Object.assign;var toRGBA=t=>{const e=objectAssign({a:1},t);return`rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`},addColorToPolygons=function(t,e,a){const{fill:n,stroke:o,strokeWidth:r,lineJoin:i,transparentColor:s}=a,h="string"==typeof n&&n,l="string"==typeof o&&o,d=(t,e)=>{const a=isTransparent(t)&&s;return e&&!a?e:toRGBA(a?s:t)};return t.forEach(t=>{const a=getColorByPos(polygonCenter(t),e);n&&(t.fill=d(a,h)),o&&(t.strokeColor=d(a,l),t.strokeWidth=r,t.lineJoin=i)}),t},luminance=t=>{const e=[t.r,t.g,t.b].map(t=>(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4));return.2126*e[0]+.7152*e[1]+.0722*e[2]},distance=(t,e)=>{let a=e.x-t.x,n=e.y-t.y;return Math.sqrt(a*a+n*n)},addGradientsToPolygons=function(t,e,a){return t.forEach(t=>{let n={};"abc".split("").forEach(o=>{const r=getColorByPos(t[o],e,a.transparentColor);n[o]={key:o,color:r,x:t[o].x,y:t[o].y},n[o].luminance=luminance(n[o].color);const i="abc".replace(o,"").split("");n[o].median={x:(t[i[0]].x+t[i[1]].x)/2,y:(t[i[0]].y+t[i[1]].y)/2},n[o].medianColor=getColorByPos(n[o].median,e,a.transparentColor),n[o].medianLuminance=luminance(n[o].medianColor)});const o=[n.a,n.b,n.c].sort((t,e)=>Math.abs(t.luminance-t.medianLuminance)-Math.abs(e.luminance-e.medianLuminance)),r=o[0],i=o[0],s=r.median,h=[i],l=distance(i,s);for(let t=1,e=a.gradientStops-2;t<e;t++){const e=t*(l/a.gradientStops)/l,n={x:i.x+e*(s.x-i.x),y:i.y+e*(s.y-i.y)};h.push(n)}h.push(s),t.gradient={x1:r.x,y1:r.y,x2:r.median.x,y2:r.median.y,colors:h.map(t=>getColorByPos(t,e,a.transparentColor))},a.stroke&&(t.strokeWidth=a.strokeWidth,t.lineJoin=a.lineJoin),n=null}),t},filterTransparentPolygons=(t,e)=>t.filter(t=>{const a=getColorByPos(polygonCenter(t),e);return!isTransparent(a)}),imageDataToPolygons=(t,e)=>{if(isImageData(t)){const a={width:t.width,height:t.height},n=copyImageData(t),o=copyImageData(t),r=stackblur(n,0,0,a.width,a.height,e.blur),i=greyscale(r),s=sobel(i).toImageData(),h=getEdgePoints(s,e.threshold),l=getVerticesFromPoints(h,e.vertexCount,e.accuracy,a.width,a.height);let d=delaunay_2(l);return d=addBoundingBoxesToPolygons(d),e.transparentColor||(d=filterTransparentPolygons(d,o)),d=!0===e.fill&&!0===e.gradients?addGradientsToPolygons(d,o,e):addColorToPolygons(d,o,e)}throw new Error("Can\'t work with the imageData provided. It seems to be corrupt.")};onmessage=(t=>{if(t.data.imageData&&t.data.params)try{let e=t.data.imageData;void 0===e.width&&"number"==typeof t.data.imageDataWidth&&(e.width=t.data.imageDataWidth),void 0===e.height&&"number"==typeof t.data.imageDataHeight&&(e.height=t.data.imageDataHeight);const a=imageDataToPolygons(t.data.imageData,t.data.params);self.postMessage({polygonJSONStr:JSON.stringify(a)})}catch(t){self.postMessage({err:t.message||t})}else t.data.imageData?self.postMessage({err:"Parameters are missing."}):self.postMessage({err:"ImageData is missing."});self.close()});'], { type: "text/javascript" })));var g = void 0,
      d = void 0;var c = { getParams: function getParams() {
      return t;
    }, getInput: e, getOutput: a },
      u = { fromImage: function fromImage(t) {
      return n(fromImageToImageData, t);
    }, fromImageSync: function fromImageSync(t) {
      return n(fromImageToImageData, t, !0);
    }, fromImageData: function fromImageData(t) {
      return n(function (t) {
        return t;
      }, t);
    }, fromImageDataSync: function fromImageDataSync(t) {
      return n(function (t) {
        return t;
      }, t, !0);
    } },
      y = { toData: function toData(t) {
      return o(function (t) {
        return t;
      }, t);
    }, toDataSync: function toDataSync(t) {
      return o(function (t) {
        return t;
      }, t, !0);
    }, toDataURL: function toDataURL(t) {
      return o(polygonsToDataURL, t);
    }, toDataURLSync: function toDataURLSync(t) {
      return o(polygonsToDataURL, t, !0);
    }, toImageData: function toImageData(t) {
      return o(polygonsToImageData, t);
    }, toImageDataSync: function toImageDataSync(t) {
      return o(polygonsToImageData, t, !0);
    }, toSVG: function toSVG(t) {
      return o(polygonsToSVG, t);
    }, toSVGSync: function toSVGSync(t) {
      return o(polygonsToSVG, t, !0);
    } };return e();
};exports.default = browser;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImgurGallery = function () {
  function ImgurGallery(svg) {
    _classCallCheck(this, ImgurGallery);

    this.svg = svg;
    this.apiUrlAlbum = 'https://api.imgur.com/3/album';
    this.apiUrlImage = 'https://api.imgur.com/3/image';
    this.imgurAplicationId = 'aa207e17df166f0';
    this.album = 'GOHHC';
    this.albumUploadReference = 'sK95kmHqbqE7HQd';

    this.buildMenu();
    this.fetchAlbumDataAndRedrawGallery();
  }

  _createClass(ImgurGallery, [{
    key: 'fetchAlbumDataAndRedrawGallery',
    value: function fetchAlbumDataAndRedrawGallery() {
      var _this = this;

      var settings = {
        async: false,
        mode: 'cors',
        method: 'GET',
        headers: {
          Authorization: 'Client-ID ' + this.imgurAplicationId,
          Accept: 'application/json'
        }
      };

      fetch(this.apiUrlAlbum + '/' + this.album, settings).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this.images = json.data.images;
        _this.redrawGallery();
      });
    }
  }, {
    key: 'buildPngAndUpload',
    value: function buildPngAndUpload() {
      var _this2 = this;

      this.setUploadButtonStatus('loading');

      var canvas = document.createElement('canvas');
      canvas.width = this.svg.getAttribute('width');
      canvas.height = this.svg.getAttribute('height');
      var ctx = canvas.getContext('2d');

      var svgData = new XMLSerializer().serializeToString(this.svg);

      var DOMURL = window.URL || window.webkitURL || window;

      var img = new Image();
      var svg = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      var url = DOMURL.createObjectURL(svg);

      // Draw the SVG into an hidden canvas and convert it to a png
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        DOMURL.revokeObjectURL(url);
        _this2.uploadToImgur(canvas.toDataURL('image/png'));
      };
      img.src = url;
    }
  }, {
    key: 'redrawGallery',


    // Ugly and long function to draw the right Gallery
    value: function redrawGallery() {
      var body = document.querySelector('body');
      var imgurGallery = document.querySelector('#imgurGallery');

      if (imgurGallery) {
        body.removeChild(imgurGallery);
      }

      imgurGallery = document.createElement('div');
      imgurGallery.id = 'imgurGallery';
      body.appendChild(imgurGallery);

      var element = document.createElement('h4');
      element.innerText = 'Recent Uploads:';
      imgurGallery.appendChild(element);

      element = document.createElement('p');
      element.innerHTML = 'You find all uploaded Artworks in this <a href="https://imgur.com/a/GOHHC" target="_blank">Imgur Album</a>.';
      imgurGallery.appendChild(element);

      for (var i = 0; i < this.images.length && i < 4; i += 1) {
        var link = document.createElement('a');
        link.setAttribute('href', this.images[this.images.length - (1 + i)].link);
        link.setAttribute('target', '_blank');
        imgurGallery.appendChild(link);
        element = document.createElement('img');
        element.setAttribute('src', this.images[this.images.length - (1 + i)].link);
        link.appendChild(element);

        if (this.images[this.images.length - (1 + i)].title && this.images[this.images.length - (1 + i)].title !== '') {
          element = document.createElement('span');
          element.setAttribute('class', 'image-title');
          element.innerText = this.images[this.images.length - (1 + i)].title;
          link.appendChild(element);
        }
      }
    }

    // Ugly and long Menu Logic

  }, {
    key: 'buildMenu',
    value: function buildMenu() {
      var _this3 = this;

      var menu = document.querySelector('#menu');
      var myMenu = document.createElement('div');
      myMenu.id = 'imgurMenu';
      menu.insertBefore(myMenu, menu.childNodes[0]);

      var element = document.createElement('h5');
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
      element.addEventListener('click', function () {
        _this3.buildPngAndUpload();
      });
      myMenu.appendChild(element);

      element = document.createElement('p');
      element.id = 'uploadingInfo';
      element.innerText = '...waiting for an Image';
      element.style.display = 'initial';
      myMenu.appendChild(element);
    }

    // indicates the current upload State

  }], [{
    key: 'uploadToImgur',
    value: function uploadToImgur(dataurl) {
      var _this4 = this;

      // Create Data Blob
      var arr = dataurl.split(',');
      var mime = arr[0].match(/:(.*?);/)[1];
      var bstr = atob(arr[1]);
      var n = bstr.length;
      var u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      var dataBlob = new Blob([u8arr], { type: mime });

      // Build FormData to upload Image to Imgur
      var formData = new FormData();
      formData.append('type', 'file');
      formData.append('image', dataBlob);
      formData.append('title', this.title.value || '');
      formData.append('album', this.albumUploadReference);

      // Request Settings
      var settings = {
        async: false,
        mode: 'cors',
        method: 'POST',
        headers: {
          Authorization: 'Client-ID ' + this.imgurAplicationId,
          Accept: 'application/json'
        },
        mimeType: 'multipart/form-data',
        body: formData
      };

      // Upload Image to Imgur
      fetch(this.apiUrlImage, settings).then(function () {
        ImgurGallery.setUploadButtonStatus('done');
        // fetch new Gallery Data
        _this4.fetchAlbumDataAndRedrawGallery();
      });
    }
  }, {
    key: 'setUploadButtonStatus',
    value: function setUploadButtonStatus(status) {
      var titleLabel = document.querySelector('#titleLabel');
      var titleInput = document.querySelector('#titleInput');
      var uploadButton = document.querySelector('#uploadButton');
      var infoText = document.querySelector('#uploadingInfo');

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
  }]);

  return ImgurGallery;
}();

exports.default = ImgurGallery;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);