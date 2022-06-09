function spinalCase(str) {
    let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");   // add a space between lowercase and Uppercase
    newStr = newStr.replace(/\s+|_+/g, '-').toLowerCase();  // replace space and _ with -
    return newStr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));


// fcc solution #2

// function spinalCase(str) {
//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//     // Split on whitespace and underscores and join with dash
//     return str
//         .toLowerCase()
//         .split(/(?:_| )+/)
//         .join("-");
// }


// fcc solution #3

// function spinalCase(str) {
//     // "It's such a fine line between stupid, and clever."
//     // --David St. Hubbins

//     return str
//         .split(/\s|_|(?=[A-Z])/)
//         .join("-")
//         .toLowerCase();
// }