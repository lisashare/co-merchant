$(function () {
// 首屏效果
    $(".ys-jm-banner img").animate({
        top:"0",
        opacity:1
    },2000);


    if($(".ys-qxxm-desc span").text().length>190){
        $(".ys-qxxm-desc span").text($(".ys-qxxm-desc span").text().substring(0,190)+"...");
    }

    // 旗下项目文字省略号
    $(".ys-qxxm-text span").each(function () {
        if($(this).text().length>80){
            $(this).text($(this).text().substring(0,80)+"...");
        }
    })
})