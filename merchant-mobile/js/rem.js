(function(){
    setRem();
    window.addEventListener('orientationchange' in window?"orientationchange":"resize",setRem);
    function setRem(){
        var html = document.getElementsByTagName('html')[0];
        var pageWidth = html.getBoundingClientRect().width;
        html.style.fontSize = pageWidth/15+'px';
    }
})();