function destroyer(arr) {
    const args = Object.values(arguments).slice(1);
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let remove = false;
        for (let j = 0; j < args.length; j++) {
            if (arr[i] === args[j]) {
                remove = true;
            }
        }
        if (!remove) {  // Check false
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
