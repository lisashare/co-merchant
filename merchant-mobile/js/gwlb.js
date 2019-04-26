$(function(){
    // 加盟项目切换
    $(".ys-per-jmgw-img").each(function () {
        $(this).hover(function () {
            $(this).find(".ys-jmgw-desc").animate({"bottom":0},300);
        },function () {
            $(this).find(".ys-jmgw-desc").animate({"bottom":"-101%"},300);
        })
    })

    // 综合排序，加盟分类切花
    $(".ys-per-tab").each(function () {
        $(this).click(function () {
            var index = $(this).index();
            $(this).addClass("ys-per-tab-active").siblings().removeClass("ys-per-tab-active");
            $(this).parents(".ys-jmxm-wrap").find(".ys-tab-jmxm").addClass("none").eq(index).removeClass("none");
        })
    })
})