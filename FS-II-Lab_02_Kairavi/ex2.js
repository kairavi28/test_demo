function emptyArray(myArray) {
    if (Array.isArray(myArray)) {
        console.log(myArray);
        var num = myArray.length;
        for (i = 0; i < num; i++) {
            myArray.pop(i);
            console.log(myArray);
        }
        //console.log(myArray);
    }
}