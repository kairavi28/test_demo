function Halloween() {
    var month, year, day, result;
    var date = window.prompt("Enter date in format 'yyyy/mm/dd'");
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    console.log("Date (yyyy/mm/dd):", (year + '/' + month + '/' + day));

    if (month.length < 2) {
        console.log("Just Another Day");
        var result = "Just Another Day";
    } else if (month.length = 2 && month == 10) {
        if (day == 31) {
            console.log("Happy Halloween!!");
            var result = "Happy Halloween!!";
        } else {
            console.log("Just Another Day");
            var result = "Just Another Day";
        }
    }
    document.getElementById('disp').innerHTML = result;
}