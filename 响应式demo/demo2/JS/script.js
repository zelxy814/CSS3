(function(document,windows){
	var docE1 = document.documentElement,
	/*orientation属性
		它有三个值：0,90，-90
		0为竖屏模式（portrait），-90意味着该设备横向旋转到右侧的横屏模式（landscape），
		而90表示该设备是横向旋转到左边的横屏模式（landscape）。*/
		/*当浏览器窗口被调整到一个新的高度或宽度是，就会触发resize事件。*/
	resizeEvt = 'orientationchange' in window ? 'orientationchange':'resize',
	recalc = function(){
		var clientWidth = docE1.clientWidth;
		if(!clientWidth) return ;
		if(clientWidth >= 768){
			docE1.style.fontSize = '100px';
		}else{
			$(".imooc_top").slideUp(0.1);
			docE1.style.fontSize = (clientWidth/7.68) + 'px'
			
		}
	};
	if (!document.addEventListener) return;
	window.addEventListener(resizeEvt,recalc,false);
	document.addEventListener('DOMContentLoaded',recalc,false);
	recalc();
})(document,window);


$(document).ready(function(){
	var btn = $('.i_imooc a').eq(1),
	top = $('.header_top');
	btn.on('click',function(){
		$(".imooc_top").slideToggle("slow");
	});
});

