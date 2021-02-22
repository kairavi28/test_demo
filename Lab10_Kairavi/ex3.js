function StarWarsRelation() {
    var result;
    var name = window.prompt("Enter any character name from Star Wars");
    var str_name = name.trim().toLowerCase();
    if (str_name == "darth vader") {
        result = "Luke, I am your father.";
    } else if (str_name == "leia") {
        result = "Luke, I am your sister.";
    } else if (str_name == "r2d2") {
        result = "Luke, I am your droid.";
    } else {
        result = "Sorry, this name has no relation to Luke Skywalker";
    }
    console.log(result);
    document.getElementById("disp").innerHTML = result;
}