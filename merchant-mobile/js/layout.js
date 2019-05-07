
// 关闭弹窗x
$('.layer-close').on('click', function(){
    $('.tel-layer-wrap').fadeOut();
    $('.article-layer-wrap').fadeOut();
})
$('.article-btn').on('click', function(){
    $('.article-layer-wrap').fadeIn();
})
$('.tel-btn').on('click', function(){
    $('.tel-layer-wrap').fadeIn();
})
// 留言电话
$(".tel-layer-btn").on("click",function () {
    // 验证电话
    var telEle = $(this).siblings('input');
    var flag = regTelFun (telEle);
    if(flag){
        $('.tel-layer-wrap').fadeOut();
    }
})
$(".article-layer-btn").on("click",function () {
     // 验证电话
    var articleEle = $(this).siblings('input');
    var flag = regTelFun (articleEle);
    if(flag){
        $('.article-layer-wrap').fadeOut();
    }
})

function regTelFun (ele) {
    var telreg = /^1[3456789]\d{9}$/;
    if (!ele.val().trim()) {
        alert('请输入手机号');
        ele.focus();
        return false;
    }
    if (!telreg.test(ele.val().trim())) {
        alert('手机号格式不正确');
        ele.focus();
        return false;
    }
    return true;
}

// 公共搜索菜单弹出层
$(".header-search").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeIn(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
// 点击阴影关闭
$(".common-layer-search a").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeOut(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
$(".common-back-btn").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeOut(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
$(".common-search-mask").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeOut(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
// 搜索关闭阴影

// 两行...
ellipEle();
function ellipEle(){
    var ellipEle = $('.set-ellip');
    var lineHeight = parseInt($('.set-ellip').css('line-height')) *2 ;
    for(var i=0;i < ellipEle.length;i++){
        if( ellipEle.eq(i).height() > lineHeight){
            ellipEle.eq(i).addClass('line-clamp');
        }
    }
}
// banner swiper
new Swiper('.i-top-banner .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 3000,
    loop: true,
    observer: true, 
    observeParents: true
})

// 切换隐藏显示
$("#FengTab").FengTab({
    callBack:  ellipEle
});
