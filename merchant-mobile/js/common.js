$(function () {
    // 在线留言轮播

    var mySwiper3 = new Swiper('.ys-zxzx-lb .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    $('.ys-zxzx-lb .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper3.swipePrev()
    })
    $('.ys-zxzx-lb .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper3.swipeNext()
    })
    // 点击选择留言
    $(".ys-per-zxly").each(function () {
        $(this).click(function () {
            $(".ys-zxly-textarea").val($(this).text());
        })
    })


    $(".ys-zxly-user").focus(function () {
        $(".ys-zxly-user").siblings().text("");
    })
    $(".ys-zxly-tell").focus(function () {
        $(".ys-zxly-tell").siblings().text("");
    })
    // 点击提交留言
    $(".ys-zxly-submit").on("click",function(){
        $(".ys-zxly-user").blur();
        $(".ys-zxly-tell").blur();
        var name = $(".ys-zxly-user").val();
        var tell = $(".ys-zxly-tell").val();
        var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        if(!name || (name=="请输入您的姓名")){
            $(".ys-zxly-user").siblings().text("请输入姓名");
            return false;
        }else{
            if(!tell || (tell=="请输入您的电话")){
                $(".ys-zxly-tell").siblings().text("请输入手机号码");
                return false;
            }else{
                if (!myreg.test(tell)) {
                    $(".ys-zxly-tell").siblings().text("请输入正确的手机号码");
                    return false;
                }
            }
        }
    })


    // 点击搜索icon出现搜索框
    $(".ys-search-icon").click(function () {
        $(".ys-top-nav-list").animate({"width":"0"},300,function () {
            $(".ys-input-box").fadeIn(300);
        });
    })


    // 点击关闭搜索框
    $(".ys-input-close").click(function () {
        $(".ys-input-box").fadeOut(300,function () {
            $(".ys-top-nav-list").animate({"width":"343px"},300);
        });
    })


    // 首页项目专题处新闻小图样式
    $(".ys-per-xmzt-img").each(function () {
        $(this).hover(function () {
            $(this).find("img").animate({"width":"101%","height":"102%","left":"-1%","top":"-1%"},100);
        },function () {
            $(this).find("img").animate({"width":"100%","height":"100%","left":"0","top":"0"},100);
        })
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