//scripts for exercise 2
var a = -5;
var b = -2;
var c = 17;
console.log("Value of a is :", a);
console.log("Value of b is :", b);
console.log("Value of c is :", c);
if (a > b && a > c) {
    console.log("value of a is bigger");
} else if (b > a && b > c) {
    console.log("value of b is bigger");
} else if (c > a && c > b) {
    console.log("c is the greatest number");
} else {
    console.log("all values could be equal");
}
//script for exercise 3
var framework = "react";
console.log("The framework is ", framework);
//switch statement
switch (framework) {
    case ("react"):
        console.log("javascript");
        break;
    case ("angular"):
        console.log("typescript");
        break;
    default:
        console.log("nothing");
}