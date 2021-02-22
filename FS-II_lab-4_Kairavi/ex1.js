function windowDetails() {
    console.log("Window innerHeight:", window.innerHeight);
    console.log("Window innerWidth:", window.innerWidth);
    console.log("Window outerHeight:", window.outerHeight);
    console.log("Window outerWidth:", window.outerWidth);
    if (window.fullscreen) {
        console.log("window isFullScreen:", true);
    } else {
        console.log("window isFullScreen:", false);
    }
    console.log(window.location.href);
    let visibleScrolls = window.scrollbars.visible;
    let visibleMenus = window.menubar.visible;
    let visibleStatus = window.statusbar.visible;
    let history = window.history;
    console.log("window scrollbars visible", visibleScrolls);
    console.log("window menubars visible", visibleMenus);
    console.log("window statusbars visible", visibleStatus);
    console.log(history);
}