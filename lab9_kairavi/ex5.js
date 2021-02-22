function userPrompt() {
    var choice = window.prompt("What operation would you like to perform (+ or - or * or /)?");
    var ch = choice.trim().toLowerCase();
    switch (ch) {
        case "+":
            add();
            break;
        case "-":
            sub();
            break;
        case "*":
            mul();
            break;
        case "/":
            div();
            break;
        default:
            console.log("Unknown operation entered!");
    }
}

var add = function addNumbers() {
    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");
    var num_one = parseInt(first);
    var num_two = parseInt(second);
    if (Number.isInteger(num_one) && Number.isInteger(num_two)) {
        var result = num_one + num_two;
        console.log("Adding two numbers", num_one, "and", num_two);
        console.log("The sum is", result);
    } else {
        console.log("Please enter numbers to perform addition");
    }
}

var sub = function subtractNumbers() {
    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");
    var num_one = parseInt(first);
    var num_two = parseInt(second);
    if (Number.isInteger(num_one) && Number.isInteger(num_two)) {
        var result = num_one - num_two;
        console.log("Subtracting two numbers", num_one, "and", num_two);
        console.log("The difference is", result);
    } else {
        console.log("Please enter numbers to perform subtraction");
    }
}

var mul = function multiplyNumbers() {
    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");
    var num_one = parseInt(first);
    var num_two = parseInt(second);
    if (Number.isInteger(num_one) && Number.isInteger(num_two)) {
        var result = num_one * num_two;
        console.log("Multiplying two numbers", num_one, "and", num_two);
        console.log("The result is", result);
    } else {
        console.log("Please enter numbers to perform multiplication");
    }
}

var div = function divideNumbers() {
    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");
    var num_one = parseInt(first);
    var num_two = parseInt(second);
    if (Number.isInteger(num_one) && Number.isInteger(num_two)) {
        var result = num_one / num_two;
        console.log("Dividing two numbers", num_one, "and", num_two);
        console.log("The result is", result);
    } else {
        console.log("Please enter numbers to perform division");
    }
}