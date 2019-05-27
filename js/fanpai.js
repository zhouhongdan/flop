$(function(){
	var showBtn = false;
	$('.btn').click(function(){
			if(!showBtn){
				if($('.btn').hasClass('ShowBtn')){
					moveShow();
					showBtn = !showBtn;
				}

			}else{
				if($('.btn').hasClass('HideBtn')){
					moveHide();
					showBtn = !showBtn;
				}
			}


	})
})
//翻牌打开的动作
var timerShow = null;
function moveShow(){
    clearInterval(timerShow);
    clearInterval(addTimer);
    $('.project').each(function(index,ele){
        // console.log(index);
        timerShow = setTimeout(function(){
            $(ele).addClass('ani'+index)
            // 阻止动画可以点击触发 翻盘的动作
            $('.btn').removeClass('HideBtn ShowBtn');
        },300*index)
    })
    addTimer = setTimeout(function(){
    		$('.btn').addClass('HideBtn');
    },3500)
}

//翻牌收起来的动画

var timerHide = null;
var addTimer = null;
function moveHide(){
    clearInterval(timerHide);
    clearInterval(addTimer);
    $('.project').each(function(index,ele){
        timerHide = setTimeout(function(){
            $(ele).removeClass('hover ani'+index);
            $('.btn').removeClass('HideBtn ShowBtn');
        },300*index)
    })
    addTimer = setTimeout(function(){
    		$('.btn').addClass('ShowBtn');
    },3500)
}