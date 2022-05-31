//  Array declaration
let yourArray = ['String', 5, true, 4, 3];


// Array assignment
let myArray = ["a", "b", "c", "d"];
myArray[1] = 'x';
console.log(myArray);


// Array push and unshift
function mixedNumbers(arr) {
    let i = 0;
    const arrPush = [7, 'VIII', 9]
    const arrUnshift = ['I', 2, 'three']

    for (i = 0; i < 3; i++) {
        arr.push(arrPush[i])    // Add Back
    }
    for (i = 2; i >= 0; i--) {
        arr.unshift(arrUnshift[i])  // Add Front
    }
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


// Array pop and shift
function popShift(arr) {
    let popped = arr.pop(); // Remove Back
    let shifted = arr.shift(); // Remove Front
    return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));


// Splicing to remove
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 1);   // This removes the first index, so the indeces changes
arr.splice(3, 4);   // Starting index and number of elements
console.log(arr);


// Splicing to replace
function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
    return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// Slicing to copy array items
function forecast(arr) {
    let newArr = arr.slice(2, 4);   // Start and Stop Index
    return newArr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// Spread Operator to copy entire arrays
function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.push([...arr]);
        num--;
    }
    return newArr;
}

console.log(copyMachine([true, false, true], 2));


// Spread Operator to add items in between
function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ['learning', ...fragment, 'is', 'fun'];
    return sentence;
}

console.log(spreadOut());


// indexOf() used for array item existence
function quickCheck(arr, elem) {
    if (arr.indexOf(elem) != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// Deepest Array (5 levels)
let myNestedArray = [
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    ['loop', 'shift', 6, 7, 1000, 'method', ['deep']],
    ['concat', false, true, 'spread', 'array', [['deeper']]],
    ['mutate', 1327.98, 'splice', 'slice', 'push', [[['deepest']]]],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];