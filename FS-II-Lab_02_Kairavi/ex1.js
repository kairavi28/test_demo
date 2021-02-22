function buildArray(num) {
    var myArray = new Array();
    if (Array.isArray(myArray)) {
        for (i = 0; i < num; i++) {
            myArray.push(i);
        }
        console.log("Array is ", myArray);
    }
}