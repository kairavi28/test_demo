function hasNumber(myArr, num) {
    if (Array.isArray(myArr)) {
        if (Number.isInteger(num)) {
            var isPresent = myArr.includes(num);
            if (isPresent == true) {
                console.log("Array: ", myArr, "Number: ", num);
                console.log(isPresent, " The number is present in given array");
            } else {
                cconsole.log("Array: ", myArr, "Number: ", num);
                console.log(isPresent, " The number is NOT present in given array");
            }
        }
    } else {
        console.log("Please enter numbers only!");
    }
}