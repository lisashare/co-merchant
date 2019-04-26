$(function () {
    // 展开全文
    var allText = $(".ys-cyzt-top-desc").text();
    if(allText.length>230){
        $(".ys-djzk-btn").removeClass("none");
        $(".ys-cyzt-top-desc").text(allText.substring(0,170)+"...");
    }else{
        $(".ys-djzk-btn").addClass("none");
    }
    // 点击展开
    $(".ys-djzk-btn").click(function () {
        if($(this).find("span:first-child").hasClass("none")){
            $(".ys-cyzt-top-desc").text(allText.substring(0,170)+"...");
        }else{
            $(".ys-cyzt-top-desc").text(allText);
        }
        $(".ys-djzk-btn span").toggleClass("none");
    })



    // 火爆饮品hover效果
    $(".ys-hbyp-top-img").each(function () {
        $(this).hover(function () {
            $(this).find(".ys-hbyp-img-desc").animate({"bottom":"0"},300);
        },function () {
            $(this).find(".ys-hbyp-img-desc").animate({"bottom":"-100%"},300);
        })
    })


    $(".ys-cyzt-tell").focus(function(){
        $(".ys-cyzt-tell").siblings().text("");
    })
    // 表单提交
    $(".ys-cyzt-submit").on("click",function(e){
        $(".ys-cyzt-user").blur();
        $(".ys-cyzt-tell").blur();
        var name = $(".ys-cyzt-user").val();
        var tell = $(".ys-cyzt-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!name){
            $(".ys-cyzt-user").focus();
            return false;
        }else{
            if(!tell){
                $(".ys-cyzt-tell").focus();
                return false;
            }else{
                if (!myreg.test(tell)) {
                    $(".ys-cyzt-tell").siblings().text("请输入正确的手机号码");
                    return false;
                }
            }
        }
        e.stopPropagation()
    })


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