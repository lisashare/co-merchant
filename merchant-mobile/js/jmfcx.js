$(function () {
    // 加盟分类hover样式
    $(".ys-per-jmf-img").each(function () {
        $(this).hover(function () {
            $(this).find("img").animate({width:"102%",height:"102%",left:"-1%",top:"-1%"},200);
        },function () {
            $(this).find("img").animate({width:"100%",height:"100%",left:"0",top:"0"},200);
        })
    })


    // 点击每个算一算弹出表单弹窗
    $(".ys-jsq").each(function () {
        $(this).click(function () {
            $(".ys-layer-title").text($(this).parent().find("a").text());
            $(".ys-layer-price span").text($(this).parent().find(".ys-brand-price").text())
            $(".ys-link").val($(this).parent().find("a").attr("href"));
            $(".ys-shade").fadeIn(200);
            $(".ys-layerform-wrap").fadeIn(200);
        })
    })

    // 点击关闭表单弹窗
    $(".ys-layerform-close").click(function () {
        $(".ys-layerform-wrap").fadeOut(200);
        $(".ys-shade").fadeOut(200);
    })
    // 点击开始计算
    $(".ys-ydd-submit").click(function(){
        var tell = $(".ys-ydd-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(myreg.test(tell)){
            $(".msg").hide();
            $(".ys-layerform-wrap").fadeOut(200);   //表单弹窗隐藏
            $(".ys-kdcb-layer").fadeIn(200);     //计算成本显示
        }else {
            if(!tell){
                $(".msg").show().text("请输入手机号！");
            }else{
                $(".msg").show().text("请输入正确的手机号！");
            }

            return false;
        }

    })





//点击开店成本关闭按钮
    $(".ys-kdcb-close").click(function(){
        $(".ys-kdcb-layer").fadeOut(200);
        $(".ys-shade").fadeOut(200);
    })

    //点击选择店铺类型
    $(".ys-kdcb-select").click(function(){
        $(".ys-dplx-list").toggleClass("none");
    })

//点击选择每一项店铺类型
    $(".ys-per-dplx").each(function(){
        $(this).click(function(){
            $(".ys-kdcb-select").val($(this).text());
            $(".ys-dplx-list").toggleClass("none");
        })
    })




    // 换一换
    var mySwiper1 = new Swiper('.ys-rmgz-box .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        // autoplay:"false",
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    // 点击换一换切换
    $('.ys-rmgz-hyh').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipeNext()
    })
})