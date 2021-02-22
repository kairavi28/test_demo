function openTabs() {
    var urlList = ['http://www.google.com', 'http://www.msn.com', 'http://www.yahoo.com'];
    var wnd;
    for (var i = 0; i < 3; i++) {
        wnd = window.open(urlList[i], '', '');
    }
}