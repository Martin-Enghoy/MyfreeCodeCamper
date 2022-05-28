//  Instead of the old ES5 of:
//      const name = user.name
//      const age = user.age
//

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

const { today, tomorrow } = HIGH_TEMPERATURES;


//      For different variables to be used:

// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;


//      Nested Objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

const { today: { low: lowtoday, high: hightoday } } = LOCAL_FORECAST;


//      Assign Variables from Arrays
let a = 8, b = 6;
[b, a] = [a, b];
const [e, f, , , c] = [1, 2, 3, 4, 5, 6];

//      Rest Parameter to Reassign Array Elements (when excessive)
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    const [x, y, ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);

//      Destrucuting for Function use
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
// const half = (stats) => (stats.max + stats.min) / 2.0; 
const half = ({ max, min }) => (max + min) / 2.0;