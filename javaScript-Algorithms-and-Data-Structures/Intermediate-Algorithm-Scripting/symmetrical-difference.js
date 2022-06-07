// @param: check if items in arr1 and arr2 only exists in one of each. (Symmetric Difference)
// @return: symmetric differrence
// @output: array of items
function diffArray(arr1, arr2) {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            newArr.push(arr1[i]);
        }
        // if (!arr2.includes(arr1[i])) {
        //   newArr.push(arr1[i]);
        // }
    }
    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j])) {
            newArr.push(arr2[j]);
        }
        // if (!arr2.includes(arr1[i])) {
        //   newArr.push(arr1[i]);
        // }
    }
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
