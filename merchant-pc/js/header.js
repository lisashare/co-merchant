// 滚动新闻start
(function ($) {
    $.fn.myScroll = function (options) {
        //默认配置
        var defaults = {
            speed: 50,  //滚动速度,值越大速度越慢,ready中的数值起作用
        };

        var opts = $.extend({}, defaults, options), intId = [];
        var sh;

        function marquee(obj, step) {

            obj.find("ul").animate({
                marginTop: '-=1'
            }, 0, "linear", function () {
                var s = Math.abs(parseInt($(this).css("margin-top")));
                sh = $("div.text-scroll>ul>li")[0].clientHeight;
                if (s >= step) {
                    $(this).find("li").slice(0, 1).appendTo($(this));
                    $(this).css("margin-top", 0);
                }
            });
        }

        this.each(function (i) {
            var speed = opts["speed"], _this = $(this);
            intId[i] = setInterval(function () {
                if (_this.find("ul").height() <= _this.height()) {
                    clearInterval(intId[i]);
                } else {
                    marquee(_this, sh);
                }
            }, speed);

            //鼠标长按暂停
            _this.mousedown(function () {
                clearInterval(intId[i]);
            });
            //鼠标放开恢复
            _this.mouseup(function () {
                intId[i] = setInterval(function () {
                    if (_this.find("ul").height() <= _this.height()) {
                        clearInterval(intId[i]);
                    } else {
                        marquee(_this, sh);
                    }
                }, speed);
            });

            //鼠标悬停暂停
            _this.hover(function(){
                clearInterval(intId[i]);
            },function(){
                intId[i] = setInterval(function(){
                    if(_this.find("ul").height()<=_this.height()){
                        clearInterval(intId[i]);
                    }else{
                        marquee(_this, sh);
                    }
                }, speed);
            });

        });
    }
})(jQuery);
$("div.text-scroll").myScroll({
    speed: 50, //数值越大，速度越慢
});
// 滚动新闻end

//下拉选择
$(".icon-wraper").click(function(){
	if( $(".catering-inner").hasClass("hidden") ){
		$(".catering-inner").removeClass("hidden");
        return false;
	}else{
		$(".catering-inner").addClass("hidden");
	}
	
});

$(".catering-inner li a").click(function(){
	$(".icon-txt").html( $(this).text() );
    $("#hidden1").val( $(this).data("cateid") );
});

$(document).click(function(){
    $(".catering-inner").addClass("hidden");
})
