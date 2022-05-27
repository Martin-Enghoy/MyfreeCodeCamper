
//  Use Recursion to Create a Countdown
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countDown = countdown(n - 1);
        countDown.unshift(n);
        return countDown;
    }
}

console.log(countdown(7));
console.log(countdown(10));
console.log(countdown(-1));
