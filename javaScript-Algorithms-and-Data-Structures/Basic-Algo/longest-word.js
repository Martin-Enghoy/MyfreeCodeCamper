function findLongestWordLength(str) {
    let arrayIndex = 0;
    let wordLength = 0;
    const splitArray = str.split(" ");
    for (let i = 0; i < splitArray.length; i++) {
        if (splitArray[i].length > wordLength) {
            arrayIndex = i;
            wordLength = splitArray[i].length;
        }
    }

    return splitArray[arrayIndex].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); 