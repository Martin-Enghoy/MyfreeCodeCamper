function factorialize(num) {
    let fact = 1;
    if (num < 0) {
        return;
    }
    else if (num == 0) {
        return 1;
    }
    else {
        for (let i = 1; i <= num; i++) {
            fact *= i;
            console.log(fact)
        }
        return fact;
    }
}

console.log(factorialize(5));   