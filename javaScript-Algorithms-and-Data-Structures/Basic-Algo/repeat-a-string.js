function repeatStringNumTimes(str, num) {
    let temp = str;
    if (num <= 0) {
        return "";
    }
    else {
        for (let i = 0; i < num - 1; i++) {
            str += temp;
        }
        return str;
    }
}

console.log(repeatStringNumTimes("abc", 3));