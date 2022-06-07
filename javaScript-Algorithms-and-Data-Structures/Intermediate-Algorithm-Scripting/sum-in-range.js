function sumAll(arr) {
    let a, b, sum = 0;   // b will always be greater than a
    if (arr[0] < arr[1]) {
        a = arr[0];
        b = arr[1];
    }
    else {
        a = arr[1];
        b = arr[0];
    }
    for (let i = a; i <= b; i++) {
        console.log(sum);
        sum += i;
    }

    return sum;
}

console.log(sumAll([1, 4]));  // 1 + 2 + 3 + 4 = 10