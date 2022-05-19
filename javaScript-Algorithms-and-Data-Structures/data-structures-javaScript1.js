//  DATA STRUCTURE #1 - QUEUE
function nextInLine(arr,item){
    arr.push(item);             // Push values at the back of the Queue.
    // return arr.shift();      // Remove items from the front of the Queue.
    let removed = arr.shift();
    console.log(arr);
    return removed;
}

console.log(nextInLine(["This", "is", "an", "array"], "XD"));
// console.log()
