function getIndexToIns(arr, num) {
    let index;
    arr = arr.sort(function (a, b) { return a - b }); // Sort numbers ascending
    // console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (num < arr[i] || num === arr[i]) {
            return index = i;
        }
    }
    return index = arr.length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));