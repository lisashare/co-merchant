$(function () {
    // 判断浏览器是否支持 placeholder
    if (!placeholderSupport()) {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }



    $(".ys-zs-kdcb-tell").focus(function () {
        $(".ys-msg").text("");
        $(".ys-zs-kdcb-tell").css("border-color","#666666");
    })
    // 点击开始计算
    $(".ys-zs-kdcb-submit").click(function(){
        var title = $(".ys-zs-top-msg h1").text();
        $(".ys-layer-title").text(title);
        $(".ys-zs-kdcb-tell").blur();
        var tell = $(".ys-zs-kdcb-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!tell || tell=="请输入手机号"){
            $(".ys-msg").text("请输入手机号").css("color","#ff1d43");
            $(".ys-zs-kdcb-tell").css("border-color","#ff1d43");
            return false;
        }else{
            if(!myreg.test(tell)){
                $(".ys-msg").show().text("号码有误");
                $(".ys-zs-kdcb-tell").css("border-color","#ff1d43");
                return false;
            }else{
                $(".ys-msg").hide();
                $(".ys-shade").removeClass("none");
                $(".ys-kdcb-layer").fadeIn(200);     //计算成本显示
            }
        }
    })



//点击开店成本关闭按钮
    $(".ys-kdcb-close").click(function(){
        $(".ys-kdcb-layer").fadeOut(200);
        $(".ys-shade").fadeOut(200);
    })


// 点击选择留言
    $(".ys-per-wyzx").each(function () {
        $(this).click(function () {
            $(".ys-wyzx-textarea").val($(this).text());
        })
    })



    $(".ys-wyzx-user").focus(function () {
        $(".ys-wyzx-user").siblings().text("");
    })
    $(".ys-wyzx-tell").focus(function () {
        $(".ys-wyzx-tell").siblings().text("");
    })
    // 点击提交留言
    $(".ys-wyzx-submit").on("click",function(){
        $(".ys-wyzx-user").blur();
        $(".ys-wyzx-tell").blur();
        var name = $(".ys-wyzx-user").val();
        var tell = $(".ys-wyzx-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!name){
            $(".ys-wyzx-user").siblings().text("请输入姓名");
            return false;
        }else{
            if(!tell){
                $(".ys-wyzx-tell").siblings().text("请输入手机号码");
                return false;
            }else{
                if (!myreg.test(tell)) {
                    $(".ys-wyzx-tell").siblings().text("请输入正确的手机号码");
                    return false;
                }
            }
        }
    })



    // 轮播图
    setInterval(function () {
        $(".ys-lb-ppzx-r").animate({top:"-73px"},500,function () {
            $(this).find(".per-ppzx-r-a:first-child").remove().appendTo($(this));
            $(this).css("top",0);
        })
    },3000)



    var mySwiper = new Swiper('.ys-zs-top-r-img .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })



})