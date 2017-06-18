//判断pc端还是移动端
function IsPC() 
{ 
           var userAgentInfo = navigator.userAgent; 
           var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"); 
           var flag = true; 
           for (var v = 0; v < Agents.length; v++) { 
               if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; } 
           } 
           return flag; 
} 
var touchEvents = {
        touchstart: "touchstart",
        touchmove: "touchmove",
        touchend: "touchend",

        /**
         * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
         */
        initTouchEvents: function () {
            if (IsPC()) {
                this.touchstart = "mousedown";
                this.touchmove = "mousemove";
                this.touchend = "mouseup";
            }
        }
    };
touchEvents.initTouchEvents()
/*整个图表的宽度*/
var width = $('.layer').width();
var currWidth = 2/3*width;
$('.layer').bind(touchEvents.touchstart,function(event){
    event.preventDefault();
	var currLeft = parseInt($('.layer').css('left'));
    var sunLeft = parseInt($('.sunImg').css('left'));
    var sunBottom = parseInt($('.sunImg').css('bottom'));
	if(IsPC()){
		var initX = event.pageX || event.clientX + document.documentElement.scrollLeft;
	}else{
		var initX = event.touches[0].pageX
	}
	$('.layer').bind(touchEvents.touchmove,function(event){
        event.preventDefault()
		if(IsPC()){
			var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
		}else{
			var pageX = event.touches[0].pageX
		}
		var left = pageX - initX;
        var mouseLeft = currLeft + left;
        /*图表随着手指滑动而滑动*/
        $('.layer').css('left',mouseLeft+'px')
	})
})

$('.layer').bind(touchEvents.touchend,function(){
    event.preventDefault()
	var currLeft = parseInt($('.layer').css('left'))
    /*当图表滑到最左边时，松开鼠标吸附回去*/
        if(currLeft > 0){
            $('.layer').animate({
                'left':'-14px'
            })
        }
    /*当图表滑到总个图表的三分之二时，松开鼠标吸附回去*/    
        if(currLeft < -currWidth){
            $('.layer').animate({
                'left':-currWidth + 14 + 'px'
            })
        }
        $('.layer').unbind(touchEvents.touchmove)
})