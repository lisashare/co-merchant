//js
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

// banner轮播
var swiper1 = new Swiper('.swiper-container1', {
	slidesPerView : 1,
	observer: true,       //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,  //修改swiper的父元素时，自动初始化swiper
    pagination: '.swiper-pagination1',
    paginationClickable: true,
    autoplay: 5000,
    loop: true,
    autoplayDisableOnInteraction : false,
});

//热门品牌
var swiper2 = new Swiper('.swiper-container2', {
	slidesPerView : 5,
	observer: true,       //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,  //修改swiper的父元素时，自动初始化swiper
	spaceBetween: 15,
    // pagination: '.swiper-pagination1',
    // paginationClickable: true,
    // autoplay: 1000,
    loop: true,
    prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
    autoplayDisableOnInteraction : false,
});

//猜你喜欢轮播图
var swiper3 = new Swiper('.likes-swiper-container2', {
	slidesPerView : 3,
	observer: true,       //修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,  //修改swiper的父元素时，自动初始化swiper
	spaceBetween: 15,
    // pagination: '.swiper-pagination1',
    // paginationClickable: true,
    // autoplay: 1000,
    loop: true,
    prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
    autoplayDisableOnInteraction : false,
});

//火爆招商
var swiper4 = new Swiper('.swiper-container4', {
	slidesPerView : 1,
    loop: true,
	// observer: true,       //修改swiper自己或子元素时，自动初始化swiper
    // observeParents: true,  //修改swiper的父元素时，自动初始化swiper
	// spaceBetween: 15,
    pagination: '.swiper-pagination4',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
  	},
    autoplay: 4000,
    prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
    autoplayDisableOnInteraction : false,
});

$(document).ready(function () {
	//咨询滚动start
    $("div.text-scroll").myScroll({
        speed: 50, //数值越大，速度越慢
    });
    //咨询滚动end

    //导航nav start
	$(".banner-navlist>ul>li").mouseenter(function() {
		$(this).addClass('cur').siblings().removeClass('cur');
		$(".cate-pop").eq( $(this).index() ).show();
		$(this).mouseleave(function() {
	        $(".cate-pop").hide();
	        $(".banner-navlist>ul>li").removeClass('cur');
	    })
	});
	//导航nav end

    //手风琴start
    $(".banner-ad>ul>li").on('mouseenter', function() {
        $(".banner-ad>ul").hide()
        $(".banner-ad-detail").show()
        var _index = $(this).index(); //获取索引
        $('.sfq ul li').removeClass('curr').eq(_index).addClass('curr')
        $('.sfq ul li').hover(function() {
            $(this).addClass('curr').siblings().removeClass('curr');
            $(this).find('.layer').hide().parent().siblings().find('.layer').show()
        })
    });
    $(".banner-ad-detail").on('mouseleave', function() {//鼠标移除
        $(".banner-ad-detail").hide()
        $(".banner-ad>ul").show()
    });
    //手风琴end

    //大牌精选start
    $(".big-section .img-bottom li a").hover(function(){
    	$(".big-section .img-top img").prop("src", $(this).find("img").prop("src") );
    	$(".big-section .img-top .name").html( $(this).find(".name").html() );
    	$(".big-section .img-top .counts").html( $(this).find(".counts").html() );
    	$(".big-section .img-top .btn-circle").html( $(this).find(".btn-circle").html() );
    });
    //大牌精选end

    //品牌推荐start
    $(".recomend-section .btn-btn").hover(function(){
    	$(this).removeClass("btn-btn-gray").siblings(".btn-btn").addClass("btn-btn-gray");
    	$(".recomend-con ul").eq( $(this).index() ).removeClass("hidden").siblings("ul").addClass("hidden");
    });
    //品牌推荐end

    //排行榜tab
    $(".ranking-list .ranking-tab ul>li").hover(function(){
    	$(this).addClass("active").siblings().removeClass("active");
    	$(".ranking-cont .ranking-cont-item").eq( $(this).index() ).removeClass("hidden").siblings(".ranking-cont-item").addClass("hidden")
    });

    // 加盟动态start
    jQuery(".franchise-dynamics").slide({mainCell:".wraper ul",autoPlay:true,effect:"topMarquee",vis:7,interTime:50,trigger:"click"});
    // 加盟动态end

    // 餐饮需求动态start
    jQuery(".catering-demand").slide({mainCell:".wraper",autoPlay:true,effect:"topMarquee",vis:4,interTime:50,trigger:"click"});
    // 餐饮需求动态end

    //提交快捷留言start
    $("#quickMessage a").click(function(){
        $(".message").val( $(this).html() );
    });
     //提交快捷留言end

     //手机号验证start
     function isPhoneNumber(tel) {
         var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
         return reg.test(tel);
     }
     $(".btn-submit").click(function(){
        if( isPhoneNumber( $("input[name='tel']").val() ) ){
            return false;
        }
     });
     //手机号验证end

     //猜你喜欢start-tab
     $(".likes-slider-money li").click(function(){
        $(this).find("a").addClass("cur").closest("li").siblings("li").find("a").removeClass("cur");
        $(".likes-section").find(".likes-swiper-container2").eq( $(this).index()-1 ).removeClass("hidden").siblings(".likes-swiper-container2").addClass("hidden")
     });
     //猜你喜欢end-tab

     // 返回顶部start
      if ($(this).scrollTop() == 0) {
            $("#toTop").hide();
        }
        $(window).scroll(function(event) {
            if ($(this).scrollTop() == 0) {
                $("#toTop").hide();
            }
            if ($(this).scrollTop() != 0) {
                $("#toTop").show();
            }
        });
        $("#toTop").click(function(event) {
            $("html,body").animate({ scrollTop: "0px" }, 100);
        });
     // 返回顶部end
})

//超出多少字显示省略号
function wordlimit(cname, wordlength) {
    var cname = document.getElementsByClassName(cname);
    for (var i = 0; i < cname.length; i++) {　　　　　　
        var nowLength = cname[i].innerHTML.length;
        if (nowLength > wordlength) {
            cname[i].innerHTML = cname[i].innerHTML.substr(0, wordlength) + '...';
        }　　　　　　
    }　
};
wordlimit('div-text-txt', 28);