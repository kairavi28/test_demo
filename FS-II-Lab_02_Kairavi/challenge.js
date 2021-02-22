function speakHacker(str) {
    console.log("string entered:", str);
    var arr = str.split("");
    var len = arr.length;
    var new_arr = new Array();
    var result = [];
    for (i = 0; i < len; i++) {
        if (arr[i].includes("a")) {
            var new_arr = arr[i].replace("a", "4");
        } else if (arr[i].includes("e")) {
            var new_arr = arr[i].replace("e", "3");
        } else if (arr[i].includes("i")) {
            var new_arr = arr[i].replace("i", "1");
        } else if (arr[i].includes("o")) {
            var new_arr = arr[i].replace("o", "0");
        } else if (arr[i].includes("s")) {
            var new_arr = arr[i].replace("s", "5");
        } else {
            var new_arr = arr[i];
        }
        result.push(new_arr);
    }
    console.log("Replaced string:", result.join(""));
}