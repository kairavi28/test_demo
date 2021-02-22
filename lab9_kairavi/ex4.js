function userPrompt() {
    var choice = window.prompt("Would you like to add or subtract?");
    var ch = choice.trim().toLowerCase();
    switch (ch) {
        case "add":
            addNumbers();
            break;
        case "subtract":
            subtractNumbers();
            break;
        default:
            console.log("Unknown operation entered!");
    }
}

function addNumbers() {
    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");
    var num_one = parseInt(first);
    var num_two = parseInt(second);
    var result = num_one + num_two;
    console.log("Adding two numbers", num_one, "and", num_two);
    console.log("The sum is", result);
}

function subtractNumbers() {
    var first = window.prompt("Enter the first number");
    var second = window.prompt("Enter the second number");
    var num_one = parseInt(first);
    var num_two = parseInt(second);
    var result = num_one - num_two;
    console.log("Subtracting two numbers", num_one, "and", num_two);
    console.log("The difference is", result);
}