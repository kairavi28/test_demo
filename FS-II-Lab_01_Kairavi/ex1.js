function findOddOrEven() {
    for (i = 0; i < 10; i++) {
        if (i == 0) {
            var res = i + " is even";
            console.log(res);
        } else if (i % 2 == 0) {
            var res = i + " is Even";
            console.log(res);
        } else {
            var res = i + " is Odd";
            console.log(res);
        }
    }
}