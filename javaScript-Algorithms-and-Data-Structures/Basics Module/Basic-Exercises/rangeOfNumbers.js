function rangeOfNumbers(startNum, endNum) {
    if (startNum == endNum) {
        return [startNum];
    }
    else {
        const range = rangeOfNumbers(startNum + 1, endNum);
        range.unshift(startNum);
        return range;
    }
};

console.log(rangeOfNumbers(5, 10));
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
