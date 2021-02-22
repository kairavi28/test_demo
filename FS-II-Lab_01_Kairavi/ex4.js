function startClock() {
    var i = 0;
    var d = new Date();
    do {
        console.log("current date and time is: " + d);
        var res = confirm("Do you want to stop the clock?");
        if (res == true) {
            console.log("You pressed OK");
            break;
        } else {
            console.log("You pressed Cancel");
        }
    } while (i < 10);
}