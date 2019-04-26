$(function () {
    // 如果项目列表超过10条显示按钮
    if($(".ys-xgwz-list li").length>10){
        $(".ys-xgwz-list li:gt(9)").addClass("none");
        $(".ys-lookmore-btn").removeClass("none");
    }
    $(".ys-lookmore-btn").click(function () {
        $(".ys-xgwz-list li:gt(9)").removeClass("none");
        $(".ys-lookmore-btn").addClass("none");
    })
})