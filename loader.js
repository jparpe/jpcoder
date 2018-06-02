(function(e){"use strict";function n(e,t){e.style.webkitTransform=t;e.style.MozTransform=t;e.style.msTransform=t;e.style.OTransform=t;e.style.transform=t}function r(e,t){if(!e){return this}var n=this,r=e.toString();n.elmts=r==="[object Array]"||r==="[object NodeList]"||r==="[object HTMLCollection]"||r==="[object Object]"?e:[e];r=null;n.playing=false;n.framerate=t.framerate||25;n.frames=[];n.loop=false;n.elmtsLength=n.elmts.length;n.stopCallback=t.stopCallback||null;n.firstFrame=1;n.lastFrame=1;n.retina=t.retina||false;n._label="";n._idx=0;n._timer=null;n._tmpFrames=[];n._way=1;n._framesNumber=t.frames_number||0;n.updateFrames(t.frames,t.direction,t.width,t.height,t.frames_number)}var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||function(e){e()};r.prototype={_render:function(){var e=this.elmtsLength,r=this;t(function(){while(e--){n(r.elmts[e],r._tmpFrames[r._idx])}});if(r.playing){if(r._idx>=r.lastFrame-1){if(!r.loop){r.stop();return}r._idx=r.firstFrame-1}else{r._idx++}}},_enterFrame:function(){var e=this;e._render.call(e);if(e.playing){e._timer=setTimeout(function(){e._enterFrame.call(e)},1e3/e.framerate)}},_calculateFrames:function(){this._tmpFrames=[];if(this._way===1){this._tmpFrames=this.frames}else{var e=this.frames.length;while(e--){this._tmpFrames.push(this.frames[e])}}this._framesNumber=this.frames.length;return this.clearLoopBetween()},_cacheFrames:function(){var e=this.frames,t=e.length;this.frames=[];while(t--){this.frames[t]="translate(-"+e[t].x+"px,  -"+e[t].y+"px)"}return this},updateFrames:function(e,t,n,r,i){if(e){if(this.retina){for(var s=0,o=null;o=e[s];s++){this.frames[s]={x:o.x/2,y:o.y/2}}}else{this.frames=e}return this._cacheFrames()._calculateFrames()}var s=0;for(;s<i;s++){this.frames.push({x:t==="h"?s*n:0,y:t==="v"?s*r:0})}s=null;return this._cacheFrames()._calculateFrames()},getWay:function(){return this._way},changeWay:function(e,t){if(e===this._way){return this}t=!!t;if(t===true){this._idx=this._framesNumber-this._idx}this._way=e;return this._calculateFrames()},clearLoopBetween:function(){this.firstFrame=1;this.lastFrame=this._framesNumber;return this},currentFrame:function(){return this._idx+1},toggle:function(e){return!this.playing?this.play(e):this.stop()},play:function(e){if(this.playing){return this}if(this._idx===this.lastFrame-1){this._idx=this.firstFrame-1}this.playing=true;this.loop=!!e;this._enterFrame();return this},stop:function(){this.playing=false;if(this._timer){clearTimeout(this._timer);this._timer=null}if(this.stopCallback){this.stopCallback()}return this},gotoAndPlay:function(e,t){this._idx=Math.min(Math.max(e,this.firstFrame),this.lastFrame)-1;return this.play(t)},gotoAndStop:function(e){var t=Math.min(Math.max(e,this.firstFrame),this.lastFrame)-1;this.loop=false;this.playing=false;if(t!=this._idx){this._idx=t;this._enterFrame()}return this}};E.JSMovieclip=r})(window);
(function(d) {
    var mc = null,
        frames = [{ x : 0, y : 0 }, { x : 0, y : 101 }, { x : 0, y : 202 }, { x : 0, y : 303 }, { x : 133, y : 0 }, { x : 133, y : 101 }, { x : 133, y : 202 }, { x : 133, y : 303 }, { x : 266, y : 0 }, { x : 266, y : 101 }, { x : 266, y : 202 }, { x : 266, y : 303 }, { x : 399, y : 0 }, { x : 399, y : 101 }, { x : 399, y : 202 }, { x : 399, y : 303 }, { x : 532, y : 0 }, { x : 532, y : 101 }, { x : 532, y : 202 }, { x : 532, y : 303 }, { x : 665, y : 0 }, { x : 665, y : 101 }, { x : 665, y : 202 }, { x : 665, y : 303 }, { x : 798, y : 0 }, { x : 798, y : 101 }, { x : 798, y : 202 }, { x : 798, y : 303 }, { x : 931, y : 0 }, { x : 931, y : 101 }, { x : 931, y : 202 }, { x : 931, y : 303 }, { x : 1064, y : 0 }, { x : 1064, y : 101 }, { x : 1064, y : 202 }, { x : 1064, y : 303 }, { x : 1197, y : 0 }, { x : 1197, y : 101 }, { x : 1197, y : 202 }, { x : 1197, y : 303 }, { x : 1330, y : 0 }, { x : 1463, y : 0 }, { x : 1596, y : 0 }, { x : 1330, y : 101 }, { x : 1330, y : 202 }, { x : 1330, y : 303 }, { x : 1463, y : 101 }, { x : 1596, y : 101 }, { x : 1463, y : 202 }, { x : 1596, y : 202 }, { x : 1463, y : 303 }],
        img = d.getElementById('loader__sprite');

    if(img.complete) {
        _createLoader();
    } else {
        img.onload = _createLoader;
    }

    var timerLoader = null;
    function _createLoader() {
        img.style.visibility = 'visible';
        mc = new E.JSMovieclip(img, {
            frames : frames,
            framerate : 30,
            stopCallback : function() {
                mc.gotoAndStop(1);
                timerLoader = setTimeout(function() {
                    mc.gotoAndPlay(1);
                }, 1000);
            }
        });

        setTimeout(function() {mc.play()}, 200);
    };
    E.getFirstLoader=function(){return mc;};
})(document);