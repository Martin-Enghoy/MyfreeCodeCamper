//  The infamous 'this' in javaScript

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//  Getters and Setters
class Thermostat {
    constructor(temp) {
        this.temp = temp;
    }

    // getter
    get temperature() {
        return (5 / 9) * (this.temp - 32);
    }

    // setter
    set temperature(newTemp) {
        this.temp = (newTemp * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius