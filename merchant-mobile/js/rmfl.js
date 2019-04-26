$(function () {

// 品牌排行榜
    $(".ys-per-xmphb").each(function () {
        $(this).hover(function () {
            $(this).addClass("ys-per-xmphb-active").siblings().removeClass("ys-per-xmphb-active");
        },function () {
            $(this).addClass("ys-per-xmphb-active").siblings().removeClass("ys-per-xmphb-active");
        })
    })


    // banner   轮播
    setInterval(function () {
        $(".ys-banner-lb-list").animate({top:"-97px"},500,function () {
            $(this).find(".per-banner-lb:first-child").remove().appendTo($(this));
            $(this).css("top",0);
        })
    },4000)

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
})