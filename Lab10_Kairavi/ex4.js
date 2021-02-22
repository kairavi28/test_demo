function take_input() {
    var input = window.prompt("Enter a string as input");
    var str_input = input.trim();
    str_fun(str_input);
}
var str_fun = function findCase(str) {
    str_lower = str.toLowerCase();
    if (str == str_lower) {
        //lowercase
        alert("lowercase");
    } else if (str == str_lower.toUpperCase()) {
        //uppercase
        alert("uppercase");
    } else {
        //mixed
        alert("mixed");
    }
}