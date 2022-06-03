function bouncer(arr) {
    let falseArr = [false, null, 0, "", undefined, NaN];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!falseArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));