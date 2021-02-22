var int_one, int_two;
int_one = window.prompt("Input the First interger");
int_two = window.prompt("Input the Second integer");
//comparing values
if (int_one > int_two) {
    console.log("First integer whose value is", int_one, "is bigger");
    console.log("The larger of", int_one, "and", int_two, "is", int_one);
} else if (int_two > int_one) {
    console.log("Second integer whose value is", int_two, "is bigger");
    console.log("The larger of", int_one, "and", int_two, "is", int_two);
} else {
    console.log("Both integers are equal");
}