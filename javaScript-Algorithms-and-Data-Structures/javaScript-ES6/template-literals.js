//  javaScript ES6 Template literals which eliminate tiresome string declaration
//  ` ` and ${var} 

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // const failureItems = [
    //   `<li class="text-warning">${result.arr[0]}</li>`,
    //   `<li class="text-warning">${result.arr[1]}</li>`,
    //   `<li class="text-warning">${result.arr[2]}</li>`
    // ];
    const failureItems = [];
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return failureItems;
}

const failuresList = makeList(result.failure);