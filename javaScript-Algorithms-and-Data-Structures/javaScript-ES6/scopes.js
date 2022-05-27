//  The var i declared below is global, and when iterated further, will affect other for loops after.
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//     if (i === 2) {
//         printNumTwo = function () {
//             return i;
//         };
//     }
// }
// console.log(printNumTwo());


//  Local vs. Global <-- var vs. let, especially inside functions.
function checkScope() {
    let i = 'function scope';
    if (false) {
        i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}