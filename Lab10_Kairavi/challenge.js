var Nemo = function findingNemo() {
    const string = window.prompt("Enter a string as an input");
    var search = string.trim().indexOf("Nemo");
    if (search == 0) {
        search = search + 1;
    }
    var result = "I found Nemo at " + search + "!";
    document.getElementById("disp").innerHTML = result;
}