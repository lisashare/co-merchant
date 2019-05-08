$(function () {
    var recently = [];
    // 搜索回车
    $(".search").on('keydown', function(e){
        if(e.keyCode == '13'){
            var searchName = $(this).val();
            searchName = $.trim( searchName );
            // 回车进行存储
            setHistoryItems (searchName);
        }
    })
    getHistoryItems();
    function getHistoryItems () { // 获取历史列表
        var history = JSON.parse(getStore('searchHistory'));
        if (!history) {
            return false;
        }
        // 如果有值，循环放在页面中
        if (history.length) {
            recently = history.slice(0, 10); 
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
})