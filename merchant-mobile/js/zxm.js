$(function () {
    // banner处点击选择分类
    $(".ys-per-zxm-select").each(function () {
        $(this).click(function () {
            var index = $(this).index();
            $(".ys-per-select-list").addClass("none").eq(index).removeClass("none");
        })
    })
    // 点击下拉中的每个选项
    $(".ys-per-select").each(function () {
        $(this).click(function (e) {
            e.stopPropagation();//子元素中用来阻止父元素的事件
            $(this).parents(".ys-per-zxm-select").find("span").text($(this).text());
            $(".ys-per-select-list").addClass("none");
        })
    })

    // 热门商机效果
    $(".ys-rmsj-img-wrap").each(function () {
        $(this).hover(function () {
            $(this).find(".ys-rmsj-img-shade").animate({"top":"0"},300);
        },function () {
            $(this).find(".ys-rmsj-img-shade").animate({"top":"-100%"},300);
        })
    })


    // 轮播
    var mySwiper1 = new Swiper('.ys-zxm-lb-wrap .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 4
    })


    // 开店创业资讯效果
    $(".ys-per-kdcy-top").each(function () {
        $(this).hover(function () {
            $(this).find(".ys-kdcy-shade").animate({"top":"0"},300);
        },function () {
            $(this).find(".ys-kdcy-shade").animate({"top":"-100%"},300);
        })
    })

})