//  Rest Parameter to accept a larger number of arguments into the Function
//      function sum is able to take any number of arguments and return their sum.
const sum = (...args) => args.reduce((a, b) => a + b, 0);

//  Spread Operator - unpacks an array for proper copying on new array
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

//  Shorthand declaration of Object Property

const createPerson = (name, age, gender) => {
    return {
        name,
        age,
        gender
    };
};


//  Concise Declarative Functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);


