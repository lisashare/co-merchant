$(function () {
    document.body.addEventListener('touchstart',function(){});
    // 最近搜索
    var recently = [];
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
            if( $(document).find('.i-recently-search-list').length ){
                var str = '';
                for(var i=0;i<recently.length;i++){
                    str += `
                        <li><a href="#" class="word-br">${recently[i]}</a></li>
                    `;
                }
                $('.i-recently-search-list').html(str);
            }
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