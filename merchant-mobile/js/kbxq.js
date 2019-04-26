$(function () {
    //口碑评价字数限制
    $(function () {
        $(".ys-kbpj-comment").each(function () {
            if($(this).length>70){
                $(this).text($(this).text().substring(0,70)+"...")
            }
        })
    })
    $(".ys-kdcb-user").focus(function () {
        $(".ys-kdcb-user").siblings().text("");
    });
    $(".ys-kdcb-tell").focus(function () {
        $(".ys-kdcb-tell").siblings().text("");
    });
    // 点击开始计算
    $(".ys-kdcb-submit").click(function(){
        $(".ys-kdcb-user").blur();
        $(".ys-kdcb-tell").blur();
        var name = $(".ys-kdcb-user").val();
        var tell = $(".ys-kdcb-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!name || (name=="请输入您的姓名")){
            $(".ys-kdcb-user").siblings().text("请输入姓名");
            return false;
        }else{
            if(!tell || (tell=="请输入可接收资料的手机号")){
                $(".ys-kdcb-tell").focus();
                return false;
            }else{
                if (!myreg.test(tell)) {
                    $(".ys-kdcb-tell").siblings().text("请输入正确的手机号码");
                    return  false;
                }
            }
        }

    })

    
    
    // 点击弹出表单
    $(".ys-common").click(function () {
        $(".ys-layerform-wrap").fadeIn(200);
        $(".ys-shade").fadeIn(200);
    })
    // 点击关闭表单弹窗
    $(".ys-layerform-close").click(function () {
        $(".ys-layerform-wrap").fadeOut(200);
        $(".ys-shade").fadeOut(200);
    })
    $(".ys-xpj-comment").focus(function () {
        $(".ys-xpj-comment").siblings().text("");
    })
    $(".ys-xpj-user").focus(function () {
        $(".ys-xpj-user").siblings().text("");
    })
    $(".ys-xpj-tell").focus(function () {
        $(".ys-xpj-tell").siblings().text("");
    })
    // 点击提交评论
    $(".ys-ydd-submit").click(function(){
        $(".ys-xpj-comment").blur();
        $(".ys-xpj-user").blur();
        $(".ys-xpj-tell").blur();
        var comment = $(".ys-xpj-comment").val();
        var name = $(".ys-xpj-user").val();
        var tell = $(".ys-xpj-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!comment || (comment=="请输入您对该项目的评价")){
            $(".ys-xpj-comment").focus();
            return false;
        }
        if(!name || (name=="请输入您的姓名")){
            $(".ys-xpj-user").focus();
            return false;
        }
        if(!tell || (tell=="请输入您的电话")){
            $(".ys-xpj-tell").focus();
            return false;
        }else{
            if (!myreg.test(tell)) {
                $(".ys-xpj-tell").siblings().text("请输入正确的手机号码");
                return  false;
            }else{
                $(".ys-layerform-wrap").fadeOut(200);
                $(".ys-shade").fadeOut(200);
            }
        }
    })



    // 经纪人轮播
    var mySwiper1 = new Swiper('.ys-jjr-lb .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    $('.ys-jjr-lb .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipePrev();
    })
    $('.ys-jjr-lb .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipeNext();
    })


    // 换一换
    var mySwiper2 = new Swiper('.ys-tjjmxm-box .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    // 点击换一换切换
    $('.ys-rmgz-hyh').on('click', function(e){
        e.preventDefault()
        mySwiper2.swipeNext()
    })




    //兼容IE8placeholder
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
})