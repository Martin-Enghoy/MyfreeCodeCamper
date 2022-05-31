//  jS console to check output value of a variable
let a = 5;
let b = 1;
a++;
console.log(a)

let sumAB = a + b;
console.log(sumAB);


//  Check data type
let seven = 7;
let three = "3";
console.log(seven + three);

console.log(typeof seven)
console.log(typeof three)


//  Debugging matrix
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
      row = []; // <---- row array needed to be reinitialized 
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }
    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  