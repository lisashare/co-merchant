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

// 品牌排行榜
    $(".ys-per-phb").each(function () {
        $(this).hover(function () {
            $(this).parent().find(".ys-phb-show-title").removeClass("none").next().addClass("none");
            $(this).find(".ys-phb-show-title").addClass("none").next().removeClass("none");
        },function () {
            $(this).parent().find(".ys-phb-show-title").removeClass("none").next().addClass("none");
            $(this).find(".ys-phb-show-title").addClass("none").next().removeClass("none");
        })
    })

    // 换一换
    var mySwiper1 = new Swiper('.ys-rmxm-box .swiper-container',{
        loop:true,
        grabCursor: true,
        speed:500,
        autoplay:4000,
        autoplayDisableOnInteraction : false,
        slidesPerView: 1
    })
    $('.rmxm-left').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipePrev();
    })
    $('.rmxm-right').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipeNext();
    })
})