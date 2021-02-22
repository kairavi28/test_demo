function hasFriday13() {
    var year = window.prompt("Enter year");
    var month = window.prompt("Enter month");
    var d = new Date(year + "-" + month + "-13");
    var day = d.getDay();
    if (day == 5) {
        alert("It's Friday the 13th");
        console.log("It's Friday the 13th");
    } else {
        alert("Crystal Lake");
        console.log("Crystal Lake");
    }
}