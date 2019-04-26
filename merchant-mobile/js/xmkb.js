$(function () {
    // 人气排行榜效果
    $(".ys-per-phb").each(function () {
        $(this).hover(function () {
            $(this).parent().find(".ys-phb-show-title").removeClass("none").next().addClass("none");
            $(this).find(".ys-phb-show-title").addClass("none").next().removeClass("none");
        },function () {
            $(this).parent().find(".ys-phb-show-title").removeClass("none").next().addClass("none");
            $(this).find(".ys-phb-show-title").addClass("none").next().removeClass("none");
        })
    })

})