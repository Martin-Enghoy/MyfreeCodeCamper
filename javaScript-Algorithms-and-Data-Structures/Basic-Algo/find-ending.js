function confirmEnding(str, target) {
    let tempStr = '';
    // console.log(((target.length - str.length) * (-1)) - 1)
    // console.log(((target.length - str.length) * (-1)))
    for (let i = str.length - target.length; i < str.length; i++) {
        tempStr += str[i];
        console.log(tempStr);
    }
    if (tempStr === target) {
        return true;
    }
    else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));
