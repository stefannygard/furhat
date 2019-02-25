/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

import Furhat from 'furhat-gui'

var PaintBook = {};

///////////////////////////////////////////////////////////////////////
//  Global
///////////////////////////////////////////////////////////////////////
PaintBook.Global = {
  'drawEl': $("#draw-svg"),
  'clickEventType': { 
    'start': Modernizr.touchevents ? 'touchstart':'mousedown',
    'move': Modernizr.touchevents ? 'touchmove':'mousemove',
    'up': Modernizr.touchevents ? 'touchend':'mouseup',
  },
  currentPenColor: "#000",
  currentFillColor: "#000"
};

///////////////////////////////////////////////////////////////////////
//  Class
///////////////////////////////////////////////////////////////////////
/* 
 * Simple JavaScript Inheritance
 */
(function(){
  // The base Class implementation (does nothing)
  PaintBook.Class = function(){};
 
  // Create a new Class that inherits from this class
  PaintBook.Class.extend = function(prop, extend){
	var superObj = {}, prototypeObj = {};
	var superPrototype = extend ? extend.prototype : {};
	
	var returnClass = function(){
		if(this._super._setSub){
			this._super._setSub(this);
		}
		if(this.init){
			this.init.apply(this, arguments);
		}
	}
	
	for(var name in prop){
		prototypeObj[name] = prop[name];
	}
	
	for(var name in superPrototype){
		if(prototypeObj[name] == undefined){
			prototypeObj[name] = superPrototype[name];
		}
		superObj[name] = superPrototype[name];
	}
	
	prototypeObj._super = superObj;
	
	//add a function for recursive setting of sub instance 
	prototypeObj._setSub = function(sub){
		this._sub = sub;
		if(this._super._setSub){
			this._super._setSub(sub._super);
		}
	}
	
	returnClass.constructor = returnClass;
	returnClass.prototype = prototypeObj;
	
	//add a static extend to the current class  
	returnClass.extend = function(prop){
		return PaintBook.Class.extend.call(this, prop, returnClass);
	}
	
	return returnClass;
};
})();

///////////////////////////////////////////////////////////////////////
//  Painthandler
///////////////////////////////////////////////////////////////////////
/*
 * Handles paint area
 */
PaintBook.PaintHandler = PaintBook.Class.extend ({
  init: function(){
    this.go = PaintBook.Global;
    this.drawEl = this.go.drawEl;
    this.drawElRaw = this.go.drawEl.get(0);
    
    this.drawEl.removeClass('hidden');
    this.drawEl.addClass('fadeIn animated');
   
    // bind: scope to this and create a new function
    this.penHandlerStart = this.penHandlerStart.bind(this); 
    this.penHandlerMove = this.penHandlerMove.bind(this); 
    this.penHandlerUp = this.penHandlerUp.bind(this); 
    this.penHandlerUpdateFill = this.penHandlerUpdateFill.bind(this); 
  
    console.log(this.drawEl);
    this.penData = {
      strokeWidth: 10,
      boundingClientRect: this.drawElRaw.getBoundingClientRect(),
      bufferSize: 3,
      path: null,
      isDrawing: false,
      strPath: null,
      buffer: [],
      clipEl: null,
    };
  
    this.initPen();
  },
  initPen: function() {
    this.drawElRaw.addEventListener(this.go.clickEventType.start, this.penHandlerStart);
     this.drawElRaw.addEventListener(this.go.clickEventType.move, this.penHandlerMove);
    this.drawElRaw.addEventListener(this.go.clickEventType.up, this.penHandlerUp);
  
  },
  penHandlerStart: function(e) {
    if (typeof e.targetTouches !== 'undefined' && e.targetTouches.length >= 1) e = e.targetTouches.item(0); 
    
    // svg free hand drawing from https://stackoverflow.com/questions/40324313/svg-smooth-freehand-drawing
    this.penData.boundingClientRect = this.drawEl.get(0).getBoundingClientRect();
    this.penData.isDrawing= true;
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
  penHandlerUpdateFill: function() {
    this.penData.path.setAttribute("fill", this.go.currentFillColor);
  },
  penHandlerMove: function(e) {
    if (typeof e !== "undefined" && typeof e.targetTouches !== 'undefined' && e.targetTouches.length >= 1) e = e.targetTouches.item(0); 
    
    if (this.penData.isDrawing) {
     this.penHandlerAppendToBuffer(this.getMousePosition(e));
     this.penHandlerUpdateSvgPath();
    }
  },
  penHandlerUp: function(e) {
    if (typeof e !== "undefined" && typeof e.targetTouches !== 'undefined' && e.targetTouches.length >= 1) e = e.targetTouches.item(0); 
    
    this.penData.isDrawing= false;
    
    this.drawEl.trigger('paintBook.drawPathComplete', {});
  },
  getMousePosition: function (e) {
    return {
        x: (e.pageX - this.penData.boundingClientRect.left),
        y: (e.pageY - this.penData.boundingClientRect.top) 
    }
  },
  penHandlerAppendToBuffer: function (pt) {
    this.penData.buffer.push(pt);
    while (this.penData.buffer.length > this.penData.bufferSize) {
        this.penData.buffer.shift();
    }
  },
  penHandlerGetAveragePoint: function (offset) {
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
        }
    }
    return null;
  },
  penHandlerUpdateSvgPath: function () {
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

app.init = function() {
  
}

PaintBook.app = function() {
  var go = PaintBook.Global;
  var paint;
  var _this = this;

  this.onFurhatMessage = function(data) {
      if(data.action == 'init') {
        console.log("create a new painthandler");
        paint = new PaintBook.PaintHandler();
      }
     else if(data.action == 'fill') {
        go.currentFillColor = data.setValue;
        paint.penHandlerUpdateFill();
      }

  } 
  Furhat(function (furhat) {
    furhat.subscribe('furhatos.app.drawbuddy.DataDelivery',  _this.onFurhatMessage );

    _this.sendEvent = function(eventName, data) {
      furhat.send({
        event_name: eventName,
        data: data
      });
    }
  });
  
  go.drawEl.bind('paintBook.drawPathComplete',
    function(event,data) {
      _this.sendEvent("drawPathComplete",  {});
  });  
}
PaintBook.app();
