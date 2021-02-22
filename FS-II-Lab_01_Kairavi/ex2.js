function helloWorlds(num) {
    if (Number.isInteger(num)) {
        var i;
        for (i = 0; i < num; i++) {
            console.log("Hello World!");
        }
    } else {
        console.log("Goodbye World!");
    }
}