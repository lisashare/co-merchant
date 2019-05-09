
// 固定底部-关闭弹窗x
$('.layer-close').on('click', function(){
    $('.tel-layer-wrap').fadeOut();
    $('.article-layer-wrap').fadeOut();
})
$('.article-btn').on('click', function(){
    // 取值data-name
    var projectNameTel = $(this).data("name");
    if(projectNameTel){
        $(".project-name").val(projectNameTel);
    }else{
        $(".project-name").val("");
    }
    $('.article-layer-wrap').fadeIn();
})
$('.tel-btn').on('click', function(){
    var projectName = $(this).data("name");
    if(projectName){
        $(".project-name").val(projectName);
    }else{
        $(".project-name").val("");
    }
    $('.tel-layer-wrap').fadeIn();
})
// 固定底部-留言电话
$(".tel-layer-btn").on("click",function () {
    // 验证电话
    var telEle = $(this).siblings('.tel');
    var flag = regTelFun (telEle);
    if(flag){
        $('.tel-layer-wrap').fadeOut();
    }else{
        return false;
    }
})
$(".article-layer-btn").on("click",function () {
     // 验证电话
    var articleEle = $(this).siblings('.tel');
    var flag = regTelFun (articleEle);
    if(flag){
        $('.article-layer-wrap').fadeOut();
    }else{
        return false;
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
    $(".common-search-mask").fadeToggle(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
// 点击阴影关闭
$(".common-layer-search a").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeToggle(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
$(".common-back-btn").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeToggle(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
$(".common-search-mask").on("click",function (e) {
    e.stopPropagation();
    $(".common-layer-search").slideToggle(300);
    $(".common-search-mask").fadeToggle(300);
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

// 切换隐藏显示-首页
$("#FengTab").FengTab({
    callBack:  ellipEle
});
// 切换隐藏显示-排行榜
$("#FengTab2").FengTab({
    Con : ".foodsWrapper", 
    // 设定选项卡内容区域 class 
    ConDiv : "ul", 
    // 设定选项卡内容 元素 
    CurName : "sidehigh", 
});

// 选择留言 form start
$(".choose-up").on("click",function () {
    $(".form-express-list").toggleClass("none");
})
$(".form-express-list li").each(function () {
    $(this).click(function () {
        $(".form-project-name").val($(this).text());
        $(this).addClass("choose-right").siblings().removeClass("choose-right");
        $(".form-express-list").toggleClass("none");
    })
})

$(".form-tell").focus(function(){
    $(".form-tell").siblings().text("");
})
$(".form-user").focus(function(){
    $(".form-user").siblings().text("");
})

$(".submit-btn").on("click",function(){
    $(".form-user").blur();
    $(".form-tell").blur();
    var name = $(".form-user").val();
    var tell = $(".form-tell").val();
    var myreg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if(!name){
        // $(".form-user").focus();
        $(".form-user").siblings().text("请输入您的姓名");
        return false;
    }
    if(!tell){
        // $(".form-tell").focus();
        $(".form-tell").siblings().text("请输入您的手机号码");
        return false;
    }else{
        if (!myreg.test(tell)) {
            $(".form-tell").siblings().text("请输入正确的手机号码");
            return false;
        }
    }
})
// form end