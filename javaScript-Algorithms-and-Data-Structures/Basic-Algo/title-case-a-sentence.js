function titleCase(str) {
    const splitArray = str.split(" ");
    let newStr = '';
    for (let i = 0; i < splitArray.length; i++) {
        for (let j = 0; j < splitArray[i].length; j++) {
            if (j == 0) {
                newStr += splitArray[i][j].toUpperCase();
            }
            else {
                newStr += splitArray[i][j].toLowerCase();
            }
        }
        if (i !== splitArray.length - 1) {
            newStr += " ";
        }
    }
    return newStr;
}

console.log(titleCase("I'm a little tea pot"));