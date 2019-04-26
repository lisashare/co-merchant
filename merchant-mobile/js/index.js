$(function () {
    // 顶部滚动
    setInterval(function(){
        $(".ys-jmzx-list").animate({
            "top":"-40px"
        },300,function(){
            $(this).find("li:first-child").remove().appendTo($(this));
            $(this).css("top",0);
        })

    },3000)

    // 首屏轮播
    var mySwiper1 = new Swiper('.ys-banner-wrap .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    $('.ys-banner-wrap .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipePrev()
    })
    $('.ys-banner-wrap .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipeNext()
    })


    // 热门分类hover
    $(".ys-tab-rmfl-1-img").each(function () {
        $(this).hover(function () {
            $(this).find(".ys-tab-rmfl-1-shade").animate({"top":"0"},300);
        },function () {
            $(this).find(".ys-tab-rmfl-1-shade").animate({"top":"-100%"},300);
        })
    })
    // 热门分类项目切换
    $(".ys-per-rmfl").each(function () {
        $(this).hover(function () {
            $(this).addClass("ys-per-rmfl-active").siblings().removeClass("ys-per-rmfl-active");
            var index = $(this).index();
            $(".ys-tab-rmfl-wrap").addClass("none").eq(index).removeClass("none");
        },function () {
            $(this).addClass("ys-per-rmfl-active").siblings().removeClass("ys-per-rmfl-active");
            var index = $(this).index();
            $(".ys-tab-rmfl-wrap").addClass("none").eq(index).removeClass("none");
        })
    })


    // 品牌餐饮加盟hover
    $(".ys-per-tjxm").each(function () {
        $(this).hover(function () {
            $(this).find(".ys-tab-rmfl-1-shade").animate({"top":"0"},300);
        },function () {
            $(this).find(".ys-tab-rmfl-1-shade").animate({"top":"-100%"},300);
        })
    })

    // 新闻hover放大效果
    $(".ys-hyxw-l").hover(function () {
        $(this).find("img").animate({"width":"102%","height":"102%","left":"-1%","top":"-1%"},200);
    },function () {
        $(this).find("img").animate({"width":"100%","height":"100%","left":"0","top":"0"},200);
    })

    // 新闻小图hover放大效果
    $(".ys-hyxw-l-2").each(function () {
        $(this).hover(function () {
            $(this).find("img").animate({"width":"102%","height":"102%","left":"-1%","top":"-1%"},200);
        },function () {
            $(this).find("img").animate({"width":"100%","height":"100%","left":"0","top":"0"},200);
        })
    })


    var mySwiper2 = new Swiper('.ys-zxcy .swiper-container',{
        loop:true,
        grabCursor: true,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    $('.ys-zxcy .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipePrev()
    })
    $('.ys-zxcy .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipeNext()
    })



    // 人气排行榜效果
    $(".ys-per-phb").each(function () {
        $(this).hover(function () {
            $(".ys-phb-show-title").removeClass("none").next().addClass("none");
            $(this).find(".ys-phb-show-title").addClass("none").next().removeClass("none");
        },function () {
            $(".ys-phb-show-title").removeClass("none").next().addClass("none");
            $(this).find(".ys-phb-show-title").addClass("none").next().removeClass("none");
        })
    })


    // 品牌餐饮加盟专区hover效果
    $(".ys-per-hyzt-img-list").each(function () {
        $(this).hover(function () {
            $(this).find("img").animate({"width":"102%","height":"102%","left":"-1%","top":"-1%"},200);
        },function () {
            $(this).find("img").animate({"width":"100%","height":"100%","left":"0","top":"0"},200);
        })
    })
    $(".ys-per-xmzt-img").each(function () {
        $(this).hover(function () {
            $(this).find("img").animate({"width":"102%","height":"102%","left":"-1%","top":"-1%"},200);
        },function () {
            $(this).find("img").animate({"width":"100%","height":"100%","left":"0","top":"0"},200);
        })
    })
    // 品牌专区切换
    $(".zt-btn").each(function () {
        $(this).hover(function () {
            var index = $(this).index();
            $(this).addClass("zt-btn-active").siblings().removeClass("zt-btn-active");
            $(".ys-zt-wrap").addClass("none").eq(index).removeClass("none");
        },function () {
            var index = $(this).index();
            $(this).addClass("zt-btn-active").siblings().removeClass("zt-btn-active");
            $(".ys-zt-wrap").addClass("none").eq(index).removeClass("none");
        })
    })


    // 问答专区轮播
    setInterval(function(){
        $(".ys-wdzq-list").each(function(){
            $(this).animate({
                "top":"-146px"
            },300,function(){
                $(this).find(".ys-per-wdzq:first-child").remove().appendTo($(this));
                $(this).css("top",0);
            })
        })
    },10000)

// 问答专区下面的轮播
    setInterval(function(){
        $(".ys-wdlb-list").each(function(){
            $(this).animate({
                "top":"-40px"
            },300,function(){
                $(this).find(".ys-per-wdlb:first-child").remove().appendTo($(this));
                $(this).css("top",0);
            })
        })
    },3000)


    // 限制资讯专区字数
    $(".ys-zx-title").each(function () {
        if($(this).text().length>24){
            $(this).text($(this).text().substring(0,23)+"...");
        }

    })








    // 左侧导航出现
    $(window).scroll(function(){
        if($(window).scrollTop()>$(".floors")[0].offsetTop || $(document).scrollTop()>$(".floors")[0].offsetTop){
            $(".ys-floor-wrap").removeClass("none");
            if(($(window).scrollTop()>$(".floors")[0].offsetTop && $(window).scrollTop()<$(".floors")[1].offsetTop) || ($(document).scrollTop()>$(".floors")[0].offsetTop && $(document).scrollTop()<$(".floors")[1].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(0).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[1].offsetTop && $(window).scrollTop()<$(".floors")[2].offsetTop) || ($(document).scrollTop()>=$(".floors")[1].offsetTop && $(document).scrollTop()<$(".floors")[2].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(1).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[2].offsetTop && $(window).scrollTop()<$(".floors")[3].offsetTop) || ($(document).scrollTop()>=$(".floors")[2].offsetTop && $(document).scrollTop()<$(".floors")[3].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(2).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[3].offsetTop && $(window).scrollTop()<$(".floors")[4].offsetTop) || ($(document).scrollTop()>=$(".floors")[3].offsetTop && $(document).scrollTop()<$(".floors")[4].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(3).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[4].offsetTop && $(window).scrollTop()<$(".floors")[5].offsetTop) || ($(document).scrollTop()>=$(".floors")[4].offsetTop && $(document).scrollTop()<$(".floors")[5].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(4).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[5].offsetTop && $(window).scrollTop()<$(".floors")[6].offsetTop) || ($(document).scrollTop()>=$(".floors")[5].offsetTop && $(document).scrollTop()<$(".floors")[6].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(5).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[6].offsetTop && $(window).scrollTop()<$(".floors")[7].offsetTop) || ($(document).scrollTop()>=$(".floors")[6].offsetTop && $(document).scrollTop()<$(".floors")[7].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(6).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[7].offsetTop && $(window).scrollTop()<($(".floors")[7].offsetTop+450)) || ($(document).scrollTop()>=$(".floors")[7].offsetTop && $(document).scrollTop()<($(".floors")[7].offsetTop+450))){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(7).addClass("ys-per-floor-active");
            }else{
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(8).addClass("ys-per-floor-active");
            }

        }else{
            $(".ys-floor-wrap").addClass("none");
        }
    })
    $(window).resize(function(){
        if($(window).scrollTop()>$(".floors")[0].offsetTop || $(document).scrollTop()>$(".floors")[0].offsetTop){
            $(".ys-floor-wrap").removeClass("none");
            if(($(window).scrollTop()>$(".floors")[0].offsetTop && $(window).scrollTop()<$(".floors")[1].offsetTop) || ($(document).scrollTop()>$(".floors")[0].offsetTop && $(document).scrollTop()<$(".floors")[1].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(0).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[1].offsetTop && $(window).scrollTop()<$(".floors")[2].offsetTop) || ($(document).scrollTop()>=$(".floors")[1].offsetTop && $(document).scrollTop()<$(".floors")[2].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(1).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[2].offsetTop && $(window).scrollTop()<$(".floors")[3].offsetTop) || ($(document).scrollTop()>=$(".floors")[2].offsetTop && $(document).scrollTop()<$(".floors")[3].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(2).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[3].offsetTop && $(window).scrollTop()<$(".floors")[4].offsetTop) || ($(document).scrollTop()>=$(".floors")[3].offsetTop && $(document).scrollTop()<$(".floors")[4].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(3).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[4].offsetTop && $(window).scrollTop()<$(".floors")[5].offsetTop) || ($(document).scrollTop()>=$(".floors")[4].offsetTop && $(document).scrollTop()<$(".floors")[5].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(4).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[5].offsetTop && $(window).scrollTop()<$(".floors")[6].offsetTop) || ($(document).scrollTop()>=$(".floors")[5].offsetTop && $(document).scrollTop()<$(".floors")[6].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(5).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[6].offsetTop && $(window).scrollTop()<$(".floors")[7].offsetTop) || ($(document).scrollTop()>=$(".floors")[6].offsetTop && $(document).scrollTop()<$(".floors")[7].offsetTop)){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(6).addClass("ys-per-floor-active");
            }else if(($(window).scrollTop()>=$(".floors")[7].offsetTop && $(window).scrollTop()<($(".floors")[7].offsetTop+450)) || ($(document).scrollTop()>=$(".floors")[7].offsetTop && $(document).scrollTop()<($(".floors")[7].offsetTop+450))){
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(7).addClass("ys-per-floor-active");
            }else{
                $(".ys-per-floor").removeClass("ys-per-floor-active").eq(8).addClass("ys-per-floor-active");
            }
        }else{
            $(".ys-floor-wrap").addClass("none");
        }
    })


    // 点击跳转楼层
    $(".ys-per-floor").each(function(){
        $(this).click(function(){
            $(this).addClass("ys-per-floor-active").siblings().removeClass("ys-per-floor-active");
            var index = $(this).index();
            var top = $(".floors")[index].offsetTop;
            // console.log(top);
            $("html,body").animate({scrollTop:top},1000);
        })
    })

    // 点击返回顶部
    $(".ys-toTop").click(function () {
        $("html,body").animate({scrollTop:0},1000);
    })
})