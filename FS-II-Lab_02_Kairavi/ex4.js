//findArrIndex(["abc", "edabit", "yyy", "xxx"], "yyy");

//findArrIndex(["a", "b", "c", "d"], "b");

function findArrIndex(myArr, str) {
    if (Array.isArray(myArr)) {
        var num = myArr.length;
        for (i = 0; i < num; i++) {
            if (myArr[i] == str) {
                var index = myArr.indexOf(str);
                console.log("Array", myArr, "String to search ", str, " index is ", index, " and position is ", index + 1);
            }
        }
    }
}