function chunkArrayInGroups(arr, size) {
    let i, j, sizeCheck = 0, tempArr = [], newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (sizeCheck != size) {
            tempArr.push(arr[i]);
            console.log(tempArr);
            sizeCheck++;
        }
        if (tempArr.length === size) {
            newArr.push(tempArr);
            sizeCheck = 0;
            tempArr = [];
        }
        else if (i === arr.length - 1) {
            newArr.push(tempArr);
        }
    }
    return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));