function promptUser() {
    var promptMsg = window.prompt("Please enter a message to be displayed in console.", "Final exam is next week!");
    DisplayMessage(promptMsg);
}

function DisplayMessage(message) {
    if (message == null) {
        console.log("Message is Null");
    } else if (message == "") {
        console.log("Message is Empty");
    } else {
        console.log(message);
    }
}