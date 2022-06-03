function frankenSplice(arr1, arr2, n) {
    let newArr = [];
    let i = 0, j = 0;
    if (arr2.length === 0) {
        for (i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i]);
        }
    }
    else {
        for (i = 0; i < arr2.length; i++) {
            if (i === n || arr2.length === 0) {
                for (j = 0; j < arr1.length; j++) {
                    newArr.push(arr1[j]);
                }
            }
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));