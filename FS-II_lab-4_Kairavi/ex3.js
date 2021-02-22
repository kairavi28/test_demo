function displayAlert() {
    alert("Hi, this is an alert box!");
}

function displayPrompt() {
    prompt("This is a prompt!");
}

function displayConfirm() {
    var txt;
    var c = confirm("Hi, this is a confirm box. Do you want to close this browser window?.");
    if (c == true) {
        window.close();
    } else {

    }
}