function getKeyValuePairs(obj) {
    let array_keys = new Array();
    let array_val = new Array();
    let result = new Array();
    console.log(Object.values(obj));
    for (const [key, value] of Object.entries(obj)) {
        array_keys.push(`${key}`);
        array_val.push(`${value}`);
    }
    result.push(array_keys, array_val);
    console.log(result);
}

getKeyValuePairs({ a: 5, b: 10, c: 16 }); // [['a','b','c'],['5','10','16']]