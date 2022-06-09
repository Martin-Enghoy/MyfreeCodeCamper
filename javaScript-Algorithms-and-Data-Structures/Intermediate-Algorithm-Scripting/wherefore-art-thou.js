function whatIsInAName(collection, source) {
    //  @param: [1] array of objects, [2] single object with varying props
    //  @process: use [2] to check intersection in [1]
    //  @return: array of the objects in the array that are supers of [2]

    const arr = [];
    // console.log(Object.keys(source));
    let keys = Object.keys(source); // an array
    // console.log(keys);
    // console.log(collection.length);

    for (let i = 0; i < collection.length; i++) {
        let pushObject = true;
        let objKeys = Object.keys(collection[i]);
        for (let j = 0; j < keys.length; j++) {
            if (!(objKeys.includes(keys[j]) && collection[i][keys[j]] === source[keys[j]])) {
                pushObject = false;
            }
        }
        if (pushObject) {
            arr.push(collection[i]);
        }
    }
    return arr;
}

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 }));


// fcc Solution #1

// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const souceKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(obj => {
//         for (let i = 0; i < souceKeys.length; i++) {
//             if (!obj.hasOwnProperty(souceKeys[i]) ||
//                 obj[souceKeys[i]] !== source[souceKeys[i]]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }


// fcc Solution #2
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const sourceKeys = Object.keys(source);

//     return collection
//         .filter(obj => sourceKeys
//             .every(key => obj.hasOwnProperty(key) &&
//                 obj[key] === source[key]));
// }


// fcc Solution #3
// function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const souceKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(obj => souceKeys
//         .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
//         .reduce((a, b) => a && b));
// }