$(function () {
    // 点击订阅
    $(".ys-dy-submit").click(function(){
        var tell = $(".ys-dy-input").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!tell){
            $(".ys-dy-input").focus();
            return false;
        }else{
            if(!myreg.test(tell)){
                $(".ys-dyxx-msg").text("请输入正确的手机号！");
                return false;
            }else{
                $(".ys-dyxx-msg").text("");
            }
        }
    })



    // 点击弹出表单
    $(".ys-pjbtn").click(function () {
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


})