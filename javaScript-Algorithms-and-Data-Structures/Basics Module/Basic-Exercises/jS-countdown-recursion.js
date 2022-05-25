
//  Use Recursion to Create a Countdown
function countdown(n) {
    if (n < 1) {
        return [];
    }
    else {
        const countDown = countdown(n - 2);
        countDown.push(n);
        return countDown;
    }
}

console.log(countdown(7));
