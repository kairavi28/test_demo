function greaterThanSize() {
    var size, c = 1;
    size = Math.random();
    while (size <= c) {
        console.log("The current size is " + size + " and count is " + c);
        c++;
    }
}