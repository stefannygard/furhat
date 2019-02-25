import Furhat from 'furhat-gui'
import Modernizr from 'modernizr'

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
  
    this.showDrawEl();
   
    // bind: scope to this and create a new function
    this.penHandlerStart = this.penHandlerStart.bind(this); 
    this.penHandlerMove = this.penHandlerMove.bind(this); 
    this.penHandlerUp = this.penHandlerUp.bind(this); 
    this.penHandlerUpdatePathAttribute = this.penHandlerUpdatePathAttribute.bind(this); 

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
  reInit: function() {
    this.go.currentPenColor = this.go.defaultPenColor;
    this.go.currentFillColor = this.go.defaultFillColor;
    this.showDrawEl();
  },
  clearAndHide: function() {
    this.drawEl.empty();
    this.drawEl.addClass('hidden');
  },
  showDrawEl: function() {
    var _this = this;
    this.drawEl.removeClass('hidden');
    this.drawEl.addClass('fadeIn animated');
    this.drawElRaw.addEventListener('animationend', function() {   _this.drawEl.trigger('paintBook.drawReady', {}); 
    })
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
  penHandlerUpdatePathAttribute: function(name, val) {
    this.penData.path.setAttribute(name, val);
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
      if (typeof(paint)==='undefined') {
        paint = new PaintBook.PaintHandler();
      } else {
        paint.reInit();
      }
    }
    else if(data.action == 'shutDown') {
        paint.clearAndHide();
    }
    else if(data.action == 'fill') {
      go.currentFillColor = data.setValue;
      paint.penHandlerUpdatePathAttribute('fill',   go.currentFillColor);
    }
    else if(data.action == 'penColor') {
      go.currentPenColor = data.setValue;
      paint.penHandlerUpdatePathAttribute('stroke',   go.currentPenColor);
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
  }).bind('paintBook.drawReady',
    function(event,data) {
      _this.sendEvent("drawingBoardReady",  {});
  });  
}
PaintBook.app();
