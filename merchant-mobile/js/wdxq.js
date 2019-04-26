$(function () {
    // 经纪人
    $(".ys-jjr-user").focus(function () {
        $(".ys-jjr-user").siblings().text("");
    })
    $(".ys-jjr-tell").focus(function () {
        $(".ys-jjr-tell").siblings().text("");
    })
    // 点击提交留言
    $(".ys-jjr-submit").on("click",function(){
        $(".ys-jjr-user").blur();
        $(".ys-jjr-tell").blur();
        var name = $(".ys-jjr-user").val();
        var tell = $(".ys-jjr-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!name || (name=="请输入您的姓名")){
            $(".ys-jjr-user").siblings().text("请输入姓名");
            return false;
        }else{
            if(!tell || (tell=="请输入您的电话")){
                $(".ys-jjr-tell").siblings().text("请输入手机号码");
                return false;
            }else{
                if (!myreg.test(tell)) {
                    $(".ys-jjr-tell").siblings().text("请输入正确的手机号码");
                    return false;
                }
            }
        }
    })


    $(".ys-jjr-user").focus(function () {
        $(".ys-jjr-user").siblings().text("");
    })
    $(".ys-wyytw-tell").focus(function () {
        $(".ys-wyytw-tell").siblings().text("");
    })
    // 点击提交留言
    $(".ys-wyytw-submit").on("click",function(){
        $(".ys-wyytw-user").blur();
        $(".ys-wyytw-tell").blur();
        var name = $(".ys-wyytw-user").val();
        var tell = $(".ys-wyytw-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!name || (name=="请输入您的姓名")){
            $(".ys-wyytw-user").siblings().text("请输入姓名");
            return false;
        }else{
            if(!tell || (tell=="请输入您的电话")){
                $(".ys-wyytw-tell").siblings().text("请输入手机号码");
                return false;
            }else{
                if (!myreg.test(tell)) {
                    $(".ys-wyytw-tell").siblings().text("请输入正确的手机号码");
                    return false;
                }
            }
        }
    })


    
    // 点击去提问聚焦
    $(".ys-qtw-btn").on("click",function () {
        $(".ys-wyytw-text").focus();
    })
    

    //兼容IE8placeholder
    // 判断浏览器是否支持 placeholder
    if (!placeholderSupport()) {
        $('[placeholder]').not(".ys-wdxq-input").focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('wytw');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('wytw');
                input.val(input.attr('placeholder'));
            }
        }).blur();
    }
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }


    // 我也能回答
    $(".ys-wyhd-btn").each(function () {
        $(this).click(function () {
            $(".ys-hd-main:first-child").removeClass("none").siblings().addClass("none");
            $(".ys-hd-layer").animate({top:0},300);
        })
    })
    
    
    // 点击提交答案
    $(".ys-hd-submit").click(function () {
        var tell = $(".ys-hd-tell-input").val();
        var myreg =/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(myreg.test(tell)){
            $(".right").removeClass("none");
            $(".empty").addClass("none");
            $(".errow").addClass("none");
        }else {
            if(!tell){
                $(".empty").removeClass("none");
                $(".right").addClass("none");
                $(".errow").addClass("none");
            }else{
                $(".errow").removeClass("none");
                $(".empty").addClass("none");
                $(".right").addClass("none");
            }
            return false;
        }
    })

    // 点击问答框中的关闭,点击正确弹出框关闭
    $(".ys-hd-main:first-child .layer-close,.right .layer-close").click(function () {
        $(".ys-hd-layer").animate({top:"-100%"},300);
    })

    // 点击电话未填弹窗关闭,点击电话错误弹出框
    $(".empty .layer-close,.errow .layer-close").click(function () {
        $(this).parents(".ys-hd-main").addClass("none");
    })


    // 点击去提问
    $(".qtw-btn").click(function () {
        $(".ys-hd-main:first-child").removeClass("none").siblings().addClass("none");
        $(".ys-hd-layer").animate({top:0},300);
    })


})