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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

;(function(window){var hadGlobal='Modernizr' in window;var oldGlobal=window.Modernizr;/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],n=f[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],r=a.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),d.push((s?"":"no-")+r.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function r(e,t,o,s){var r,f,l,d,u="modernizr",p=i("div"),h=a();if(parseInt(o,10))for(;o--;)l=i("div"),l.id=s?s[o]:u+(o+1),p.appendChild(l);return r=i("style"),r.type="text/css",r.id="s"+u,(h.fake?h:p).appendChild(r),h.appendChild(p),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(n.createTextNode(e)),p.id=u,h.fake&&(h.style.background="",h.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(h)),f=t(p,e),h.fake?(h.parentNode.removeChild(h),c.style.overflow=d,c.offsetHeight):p.parentNode.removeChild(p),!!f}var f=[],l={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=l,Modernizr=new Modernizr;var d=[],u=l._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];l._prefixes=u;var c=n.documentElement,p="svg"===c.nodeName.toLowerCase(),h=l.testStyles=r;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",u.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");h(o,function(e){t=9===e.offsetTop})}return t}),s(),delete l.addTest,delete l.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);module.exports=window.Modernizr;if(hadGlobal){window.Modernizr=oldGlobal;}else{delete window.Modernizr;}})(window);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _furhatGui = __webpack_require__(0);

var _furhatGui2 = _interopRequireDefault(_furhatGui);

var _modernizr = __webpack_require__(1);

var _modernizr2 = _interopRequireDefault(_modernizr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaintBook = {};

///////////////////////////////////////////////////////////////////////
//  Global
///////////////////////////////////////////////////////////////////////
PaintBook.Global = {
  'drawEl': $("#draw-svg"),
  'clickEventType': {
    'start': _modernizr2.default.touchevents ? 'touchstart' : 'mousedown',
    'move': _modernizr2.default.touchevents ? 'touchmove' : 'mousemove',
    'up': _modernizr2.default.touchevents ? 'touchend' : 'mouseup'
  },
  defaultPenColor: "#000",
  defaultFillColor: "#000",
  currentPenColor: "#000",
  currentFillColor: "#000"
};

///////////////////////////////////////////////////////////////////////
//  Class
///////////////////////////////////////////////////////////////////////
/* 
 * Simple JavaScript Inheritance
 */
(function () {
  // The base Class implementation (does nothing)
  PaintBook.Class = function () {};

  // Create a new Class that inherits from this class
  PaintBook.Class.extend = function (prop, extend) {
    var superObj = {},
        prototypeObj = {};
    var superPrototype = extend ? extend.prototype : {};

    var returnClass = function returnClass() {
      if (this._super._setSub) {
        this._super._setSub(this);
      }
      if (this.init) {
        this.init.apply(this, arguments);
      }
    };

    for (var name in prop) {
      prototypeObj[name] = prop[name];
    }

    for (var name in superPrototype) {
      if (prototypeObj[name] == undefined) {
        prototypeObj[name] = superPrototype[name];
      }
      superObj[name] = superPrototype[name];
    }

    prototypeObj._super = superObj;

    //add a function for recursive setting of sub instance 
    prototypeObj._setSub = function (sub) {
      this._sub = sub;
      if (this._super._setSub) {
        this._super._setSub(sub._super);
      }
    };

    returnClass.constructor = returnClass;
    returnClass.prototype = prototypeObj;

    //add a static extend to the current class  
    returnClass.extend = function (prop) {
      return PaintBook.Class.extend.call(this, prop, returnClass);
    };

    return returnClass;
  };
})();

///////////////////////////////////////////////////////////////////////
//  Painthandler
///////////////////////////////////////////////////////////////////////
/*
 * Handles paint area
 */
PaintBook.PaintHandler = PaintBook.Class.extend({
  init: function init() {
    this.go = PaintBook.Global;
    this.drawEl = this.go.drawEl;
    this.drawElRaw = this.go.drawEl.get(0);

    this.showDrawEl();

    // bind: scope to this and create a new function
    this.penHandlerStart = this.penHandlerStart.bind(this);
    this.penHandlerMove = this.penHandlerMove.bind(this);
    this.penHandlerUp = this.penHandlerUp.bind(this);
    this.penHandlerUpdatePathAttribute = this.penHandlerUpdatePathAttribute.bind(this);
    this.penHandlerUpdateStrokeWidth = this.penHandlerUpdateStrokeWidth.bind(this);

    this.penData = {
      defaultStrokeWidth: 10,
      strokeWidth: 10,
      boundingClientRect: this.drawElRaw.getBoundingClientRect(),
      bufferSize: 3,
      path: null,
      isDrawing: false,
      strPath: null,
      buffer: [],
      clipEl: null
    };

    this.initPen();
  },
  reInit: function reInit() {
    this.go.currentPenColor = this.go.defaultPenColor;
    this.go.currentFillColor = this.go.defaultFillColor;
    this.penData.strokeWidth = this.penData.defaultStrokeWidth;
    this.showDrawEl();
  },
  clearAndHide: function clearAndHide() {
    this.drawEl.empty();
    this.drawEl.addClass('hidden');
  },
  showDrawEl: function showDrawEl() {
    var _this = this;
    this.drawEl.removeClass('hidden');
    this.drawEl.addClass('fadeIn animated');
    this.drawElRaw.addEventListener('animationend', function () {
      _this.drawEl.trigger('paintBook.drawReady', {});
    });
  },
  initPen: function initPen() {
    this.drawElRaw.addEventListener(this.go.clickEventType.start, this.penHandlerStart);
    this.drawElRaw.addEventListener(this.go.clickEventType.move, this.penHandlerMove);
    this.drawElRaw.addEventListener(this.go.clickEventType.up, this.penHandlerUp);
  },
  penHandlerStart: function penHandlerStart(e) {
    if (typeof e.targetTouches !== 'undefined' && e.targetTouches.length >= 1) e = e.targetTouches.item(0);

    // svg free hand drawing from https://stackoverflow.com/questions/40324313/svg-smooth-freehand-drawing
    this.penData.boundingClientRect = this.drawEl.get(0).getBoundingClientRect();
    this.penData.isDrawing = true;
    this.penData.path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    this.penData.path.setAttribute("fill", "none");
    this.penData.path.setAttribute("stroke", this.go.currentPenColor);
    this.penData.path.setAttribute("stroke-width", this.penData.strokeWidth);
    this.penData.path.setAttribute("stroke-linecap", "round");

    this.penData.buffer = [];
    var pt = this.getMousePosition(e);
    this.penHandlerAppendToBuffer(pt);
    this.penData.strPath = "M" + pt.x + " " + pt.y;
    this.penData.path.setAttribute("d", this.penData.strPath);
    this.drawEl.append(this.penData.path);
  },
  penHandlerUpdateStrokeWidth: function penHandlerUpdateStrokeWidth(val) {
    this.penData.strokeWidth = val;
    this.penHandlerUpdatePathAttribute('stroke-width', val);
  },
  penHandlerUpdatePathAttribute: function penHandlerUpdatePathAttribute(name, val) {
    this.penData.path.setAttribute(name, val);
  },
  penHandlerMove: function penHandlerMove(e) {
    if (typeof e !== "undefined" && typeof e.targetTouches !== 'undefined' && e.targetTouches.length >= 1) e = e.targetTouches.item(0);

    if (this.penData.isDrawing) {
      this.penHandlerAppendToBuffer(this.getMousePosition(e));
      this.penHandlerUpdateSvgPath();
    }
  },
  penHandlerUp: function penHandlerUp(e) {
    if (typeof e !== "undefined" && typeof e.targetTouches !== 'undefined' && e.targetTouches.length >= 1) e = e.targetTouches.item(0);

    this.penData.isDrawing = false;

    this.drawEl.trigger('paintBook.drawPathComplete', {});
  },
  getMousePosition: function getMousePosition(e) {
    return {
      x: e.pageX - this.penData.boundingClientRect.left,
      y: e.pageY - this.penData.boundingClientRect.top
    };
  },
  penHandlerAppendToBuffer: function penHandlerAppendToBuffer(pt) {
    this.penData.buffer.push(pt);
    while (this.penData.buffer.length > this.penData.bufferSize) {
      this.penData.buffer.shift();
    }
  },
  penHandlerGetAveragePoint: function penHandlerGetAveragePoint(offset) {
    var len = this.penData.buffer.length;
    if (len % 2 === 1 || len >= this.penData.bufferSize) {
      var totalX = 0;
      var totalY = 0;
      var pt, i;
      var count = 0;
      for (i = offset; i < len; i++) {
        count++;
        pt = this.penData.buffer[i];
        totalX += pt.x;
        totalY += pt.y;
      }
      return {
        x: totalX / count,
        y: totalY / count
      };
    }
    return null;
  },
  penHandlerUpdateSvgPath: function penHandlerUpdateSvgPath() {
    var pt = this.penHandlerGetAveragePoint(0);

    if (pt) {
      // Get the smoothed part of the path that will not change
      this.penData.strPath += " L" + pt.x + " " + pt.y;

      // Get the last part of the path (close to the current mouse position)
      // This part will change if the mouse moves again
      var tmpPath = "";
      for (var offset = 2; offset < this.penData.buffer.length; offset += 2) {
        pt = this.penHandlerGetAveragePoint(offset);
        tmpPath += " L" + pt.x + " " + pt.y;
      }

      // Set the complete current path coordinates
      this.penData.path.setAttribute("d", this.penData.strPath + tmpPath);
    }
  }
});

var app = {};

app.init = function () {};

PaintBook.app = function () {
  var go = PaintBook.Global;
  var paint;
  var _this = this;

  this.onFurhatMessage = function (data) {

    switch (data.action) {
      case 'init':
        if (typeof paint === 'undefined') {
          paint = new PaintBook.PaintHandler();
        } else {
          paint.reInit();
        }
        break;
      case 'shutDown':
        paint.clearAndHide();
        break;
      case 'fill':
        go.currentFillColor = data.setValue;
        paint.penHandlerUpdatePathAttribute('fill', go.currentFillColor);
        break;
      case 'penColor':
        go.currentPenColor = data.setValue;
        paint.penHandlerUpdatePathAttribute('stroke', go.currentPenColor);
        break;
      case 'penSize':
        paint.penHandlerUpdateStrokeWidth(data.setValue);
        break;
    }
  };
  (0, _furhatGui2.default)(function (furhat) {
    furhat.subscribe('furhatos.app.drawbuddy.DataDelivery', _this.onFurhatMessage);

    _this.sendEvent = function (eventName, data) {
      furhat.send({
        event_name: eventName,
        data: data
      });
    };
  });

  go.drawEl.bind('paintBook.drawPathComplete', function (event, data) {
    _this.sendEvent("drawPathComplete", {});
  }).bind('paintBook.drawReady', function (event, data) {
    _this.sendEvent("drawingBoardReady", {});
  });
};
PaintBook.app();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Constants
const OPEN = 'open';
const CLOSE = 'closed';
const FAIL = 'failed';

/**
 * Furhat main class. Maintains the websocket connection to furhatOS and
 * has methods to send events, subscribe to events and helper methods such as say,
 * gesture, etc.
 */
class Furhat {
  constructor() {
    this.eventFunctions = {};
  }

  /**
   * Initializes the furhat socket connection and executes the callback method.
   * @param domain IP Address for furhatOS - localhost if SDK.
   * @param port port for RealTimeAPI module of furhatOS.
   * @param route route for RealTimeAPI module of furhatOS.
   * @param callback callback method to be executed on successful opening of websocket.
   */
  init(domain, port, route, callback) {
    if (this.socket !== undefined) {
      this.socket.close();
    }
    console.log(`Initializing websocket connection to ws://${domain}:${port}/${route}`); // eslint-disable-line no-console
    this.socket = new window.WebSocket(`ws://${domain}:${port}/${route}`); // eslint-disable-line no-undef

    this.socket.onopen = () => {
      this.status = OPEN;
      if (callback !== undefined) {
        callback(OPEN, this);
      }
    };
    this.socket.onmessage = event => {
      if (this.eventFunctions[JSON.parse(event.data).event_name] !== undefined) {
        this.eventFunctions[JSON.parse(event.data).event_name](JSON.parse(event.data));
      }
    };
    this.socket.onclose = () => {
      this.status = CLOSE;
      if (callback !== undefined) {
        callback(CLOSE, this);
      }
    };
    this.socket.onerror = () => {
      this.status = FAIL;
      if (callback !== undefined) {
        callback(FAIL, this);
      }
    };
  }

  /**
   * Sends an event to furhatOS
   * @param event Object containing the event. Mandtory to have event_name parameter in the object
   */
  send(event) {
    if (this.socket.readyState === 2 || this.socket.readyState === 3) {
      // SHIT
    } else if (this.socket.readyState === 1) {
      this.socket.send(JSON.stringify(event));
    }
  }

  /**
   * Subscribes to the given event and triggers the supplied callback on event
   * @param eventName Name of the event to subscribe
   * @param callback Function which needs to be triggered when the given event is recieved
   * @param dontSend [Optional] [false by default] Boolean which determines wether to send
   * the subscribe event or not. use it to set callbacks for event that are already subscribed to,
   * for instance with group subscriptions
   */
  subscribe(eventName, callback, dontSend = false) {
    const event = { event_name: 'furhatos.event.actions.ActionRealTimeAPISubscribe', name: eventName };
    this.eventFunctions[eventName] = callback;
    if (!dontSend) {
      this.send(event);
    }
  }

  /**
   * Subscribes to the given event group
   * @param groupNumber Number(Assigned ENUM) of the group that needs to be subscribed to
   */
  subscribeGroup(groupNumber) {
    const event = { event_name: 'furhatos.event.actions.ActionRealTimeAPISubscribe', group: groupNumber };
    this.send(event);
  }

  /**
   * Says a given text
   * @param text Text which needs to be said by Furhat
   */
  say(text) {
    const event = { event_name: 'furhatos.event.actions.ActionSpeech', text };
    this.send(event);
  }

  /**
   * Stimulates the speech of a user in the interaction space
   * @param text Text which needs to be said by the user
   */
  userSpeech(text) {
    const event = { event_name: 'furhatos.event.senses.SenseTypingEnd', messageText: text };
    this.send(event);
  }

  /**
   * Stimulates SenseSpeechStart event. Can be used to stimulate user speech via typing
   */
  userSpeechStart() {
    const event = { event_name: 'furhatos.event.senses.SenseTypingStart' };
    this.send(event);
  }

  /**
   * Performs the given gesture
   * @param name Name of the gesture that needs to be performed
   */
  gesture(name) {
    const event = { event_name: 'furhatos.event.actions.ActionGesture', name };
    this.send(event);
  }
}

exports.default = Furhat;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3)


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _furhatCore = __webpack_require__(4);

var _furhatCore2 = _interopRequireDefault(_furhatCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let address;
let portNumber;
let callbackFun;

const InitCallback = (status, hat) => {
  if (status === 'open') {
    hat.send({
      event_name: 'furhatos.event.senses.SenseSkillGUIConnected',
      port: portNumber
    });
    callbackFun(hat);
  } else if (status === 'closed' || status === 'failed') {
    window.setTimeout(() => {
      // eslint-disable-line no-undef
      hat.init(address, portNumber, 'api', InitCallback);
    }, 1000);
  }
};

/**
 * FurhatGUI Function which sets up a connection to the furhat skill and gives
 * the furhat object to send and recieve events to the skill.
 * @param callback callback that needs to be triggered when a sucessful connection is established
 */
const FurhatGUI = callback => {
  if (callback !== undefined && typeof callback === 'function') {
    window.fetch('/port', { method: 'GET' }).then(r => {
      // eslint-disable-line no-undef
      r.json().then(o => {
        const furhat = new _furhatCore2.default();
        address = o.address; // eslint-disable-line prefer-destructuring
        portNumber = o.port;
        callbackFun = callback;
        furhat.init(o.address, o.port, 'api', InitCallback); // eslint-disable-line no-undef
      });
    });
  }
};

exports.default = FurhatGUI;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map