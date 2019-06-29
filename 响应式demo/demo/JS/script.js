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
		if(clientWidth >= 640){
			docE1.style.fontSize = '100px';
		}else{
			docE1.style.fontSize = 100 * (clientWidth/640) + 'px'
			
		}
	};
	if (!document.addEventListener) return;
	window.addEventListener(resizeEvt,recalc,false);
	document.addEventListener('DOMContentLoaded',recalc,false);
	recalc();
})(document,window);



var innerGroup = $('.innerwraper'),
	spanGroup = $('.pagination span'),
	imgWidth = $('.innerwraper img:first-child').eq(0).width(),
	_index = 0,
	timer = null,
	flag = true;

	spanGroup.on('click',function(){
		/*获取点击小圆点的位置*/
		_index = spanGroup.index($(this));
		selectPic(_index);
	});
                                        
	function autoGo(bol){
		if(bol){
			timer = setInterval(go, 1000);
		}
	}
	autoGo(flag);

	function go(){
		_index++;
		selectPic(_index);
	}

	function selectPic(num){
		clearInterval(timer);                          
		$('.pagination span').eq(num).addClass('active').siblings().removeClass('active');
		if(num%4==0){
			$('.pagination span').eq(0).addClass('active').siblings().removeClass('active');
		}
			// $('.inner').stop().animate({
			// 	left: -num * imgWidth,
			// },1000,function(){
			// 	timer = setInterval(go, 1000);
			// 	if(_index == innerGroup.length-1){
			// 		_index = _index%4;
			// 		$('.inner').css('left','0px');
			// 	}
			// })
			$('.inner').stop().animate({
				left: -num * imgWidth,
			},1000,function(){
				timer= setInterval(go,1000);
				if(_index%4==0){
					_index=0;
					$('.inner').css({'left':'0px'})
				}
			});
		}