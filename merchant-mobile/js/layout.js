// 最近搜索
var recently = [];
// 搜索回车
$(".search").bind('keypress', function(e){
    if(e.keyCode == '13'){
        var searchName = $(this).val();
        searchName = $.trim( searchName );
        window.location.href = '/' + "keywords="+ searchName;
        $(this).val('');
        // 回车进行存储
        setHistoryItems (searchName);
    }
})
// 进入页面进行获取-赋值
getHistoryItems();
function getHistoryItems () { // 获取历史列表
    var history = JSON.parse(getStore('searchHistory'));
    if (!history) {
        return false;
    }
    // 如果有值，循环放在页面中
    if (history.length) {
        recently = history.slice(0, 10); 
        var str = '';
        for(var i=0;i<recently.length;i++){
            str += `
                <li><a href="#" class="word-br">${recently[i]}</a></li>
            `;
        }
        $('.i-recently-search-list').html(str);
    }
}
function setHistoryItems (value) {
    if(!value){
        return false;
    }
    var setHistory = JSON.parse(getStore('searchHistory'))
    if (setHistory) {
        var checkrepeat = false;
        setHistory.forEach(item => {
            if (item == value) {
                checkrepeat = true;
            }
        })
        if (!checkrepeat) { // 没有重复的添加上
            recently.unshift(value);
        }
    } else {
        recently.unshift(value);
    }
    setStore('searchHistory', recently);
}

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

// 点击首页菜单弹出层
$(".i-header-menu").on("click",function (e) {
    e.stopPropagation();
    $(".i-menu-wrap").slideToggle(300);
    $(".layer-search-mask").fadeIn(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
// 点击阴影关闭
$(".i-menu-wrap a").on("click",function (e) {
    e.stopPropagation();
    $(".i-menu-wrap").slideToggle(300);
    $(".layer-search-mask").fadeOut(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
$(".back-btn").on("click",function (e) {
    e.stopPropagation();
    $(".i-menu-wrap").slideToggle(300);
    $(".layer-search-mask").fadeOut(300);
    $("html").toggleClass("hei-100");
    $("body").toggleClass("hei-100");
})
$(".layer-search-mask").on("click",function (e) {
    e.stopPropagation();
    $(".i-menu-wrap").slideToggle(300);
    $(".layer-search-mask").fadeOut(300);
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
