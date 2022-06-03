function mutation(arr) {
    let i, truthArr = [];
    arr = arr.map(element => {
        return element.toLowerCase();
    });
    for (i = 0; i < arr[1].length; i++) {
        if (arr[0].includes(arr[1][i])) {
            truthArr.push(true);
        }
        else {
            truthArr.push(false);
        }
    }
    if (truthArr.includes(false)) {
        return false;
    }
    else {
        return true;
    }
    // while (i < arr[1].length) {
    //   arr[0].includes(arr[])

    //   i++;
    // }
    return false;
}

mutation(["hello", "hey"]);
mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
mutation(["Mary", "Army"]);
mutation(["Mary", "Aarmy"]);
mutation(["Alien", "line"]);
mutation(["floor", "for"]);
mutation(["hello", "neo"]);
mutation(["voodoo", "no"]);
mutation(["ate", "date"]);
mutation(["Tiger", "Zebra"]);
mutation(["Noel", "Ole"]);