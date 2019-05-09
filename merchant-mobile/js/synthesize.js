// window.onload=function(){
//     var HG = document.documentElement.clientHeight;//可视区域高度
//     $('body,html').height(HG).css({'overflow': 'hidden'});
//     $(".load").css({height:'1px',opacity:0})    
// }

$(function () {
    var HG = document.documentElement.clientHeight;//可视区域高度
    var navbut = $('.foot-fixed').outerHeight(true);//底部导航栏高度

    $('.project-right').height(HG).css({'overflow-y': 'auto'});

    var nav_h = $(".synthesize").offset().top; 
    $('.project-right').scroll(function () {
         synt()
    })   
    $('.project-right').on('touchmove',function(){
        synt()
    })
    function synt(){
       if ($('.project-right').scrollTop() >= nav_h) {
            $(".project_fixed").show()
            $(".synthesize").remove().appendTo(".project_fixed");
        }
        if ($('.project-right').scrollTop() < nav_h) {
           $(".project_fixed").hide();
           $(".synthesize").remove().appendTo(".synthesize_w"); 
        } 
    }
 
    //数据加载
    if($(".load").length===1){
        $('.project-right').on("scroll", function () {
            var scTop = $('.project-right').scrollTop();
            var _top = $(".load").offset().top;
            var topnav = $('.project_fixed').outerHeight(true);
            var winHeight = $('.project-right').height()-topnav;
            // console.log(_top,winHeight)
            if (_top < winHeight) {
                if (!$(".load").hasClass("no-more") && isloading === false) {
                    $(".load").css({height:'',opacity:''})  
                    $(".ic-load").show();
                    $(".load-text").html("数据加载中...");
                    // $('.asd').clone().appendTo('.content')
                    httpGetMore(".load");
                }
            }
        });
    }



});
function linkClick(el) {
    var HG = document.documentElement.clientHeight;//可视区域高度
    var index = $(el).index();
    $('.pro-shade').remove();
    if ($(el).hasClass('activt')) {
        fun()
    } else {
        $('.project-right').unbind('touchmove').css({'overflow-y': 'hidden'});
        $(el).addClass('activt').siblings().removeClass('activt');
        $('.dorp-down .down').eq(index).addClass('block').siblings().removeClass('block');
        $('.pronav ul .block a').append('<i class="nav-i"></i>');
        $('.synthesize').append('<div class="pro-shade"></div>');
        
        $('.pro-shade').height(HG);
        $('.pro-shade').on("click", function () {
            fun()
        })

    }
}
function fun() {
    $('.dorp-down .down').removeClass('block');
    $('.synthesize ul li').removeClass('activt');
    $('.nav-i').remove();
    $('.pro-shade').remove();
    $('.project-right').css({'overflow': 'auto'}).bind('touchmove')
}

function showDataList(arr, moreEl) {
    var html = '';
    for (var i = 0; i < arr.length; i++) {
        var o = arr[i];
        //var ind = $.inArray(o.investmentamount, ["1", "3", "5", "10", "20", "50", "100", "200"]);
        var ind = $.inArray(o.investmentamount, ["0", "30", "15", "530", "310", "80", "550", "15200", "1", "3", "5", "10", "20", "50", "100", "200"]);
        var money = ["0", "30万以上", "1-5万", "5-30万", "3-10万", "80-200万", "5-50万", "15-200万", "1万以下", "1-3万", "3-5万", "5-10万", "10-20万", "20-50万", "50-100万", "100万以上"];
        html += '<li><a href="' + o.link + '">';
        html += '<img src="' + prefix + o.adimage + '">';
        html += '<p class="online-title">' + o.title + '</p>';
        html += '<p class="online-name">' + o.companyname + '</p>';
        html += '<p class="online-money"><span class="rmb">￥</span>' + money[ind] + '</p>';
        html += '</a></li>';
    }
    $(moreEl).append(html);
}
var isloading = false;
var sort = $("input[name=sort]").val(),
    query = $("input[name=query]").val(),
    investamount = $("input[name=investamount]").val(),
    cataloginnercode = $("input[name=cataloginnercode]").val();
function httpGetMore(moreEl) {
    isloading = true;
    //var cataloginnercode = $(moreEl).attr("data-cataloginnercode");
    var pageIndex = parseFloat($(moreEl).attr("data-pageindex"));
    var pageSize = parseFloat($(moreEl).attr("data-pagesize"));
    var _data = {
        cataloginnercode: cataloginnercode,
        siteid: siteid,
        sort: sort,//综合搜索值,
        query: query,
        investamount: investamount,//投资金额
        publishtargetid: "Html5",
        pageindex: pageIndex,
        pagesize: pageSize,
        columns: "id,link,investmentAmount,title,adimage,companyID,companyname"
    };
    if ($("input[name=data-catalogInnerCode]").length===1) {
        var cataloginnercodeSub = $("input[name=data-catalogInnerCode]").val();
        _data = {
            cataloginnercode: cataloginnercodeSub,
            siteid: siteid,
            publishtargetid: "Html5",
            pageindex: pageIndex,
            pagesize: pageSize,
            columns: "id,link,investmentAmount,title,adimage,companyID,companyname"
        }
    }
    $.ajax({
        url: prefix + "api/jiameng/projectlibdata",
        type: "GET",
        data: _data,
        dataType: "json",
        success: function (data) {
            console.log(data);
            $(moreEl).attr("data-pageindex", pageIndex + 1);
            var arr = data._RESULT;
            showDataList(arr, ".content.cy-item");
            //$(".ic-load").hide();
            $(".top-load").html("上拉加载数据");
            isloading = false;
            if (data.pagesize * data.pageindex >= data.total) {
                $(".load").html("没有更多数据了").addClass("no-more");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            //alert(XMLHttpRequest.status);
            //alert(XMLHttpRequest.readyState);
            //alert(textStatus);
            $(".load").html("没有更多数据了").addClass("no-more");
        }
    });
}
