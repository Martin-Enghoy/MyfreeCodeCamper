// Object Declaration
let dog = {
    name: "Sky",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }    // Add a function
};


// Print / Call
console.log(dog.name);
console.log(dog.numLegs);
console.log(dog.sayLegs());
dog.sayLegs();


// Constructor
function Dog() {
    this.name = "Sky";
    this.color = "Brownish White";
    this.numLegs = 4;
}

let hound = new Dog();


// Own Properties check
let ownProps = [];
for (let prop in canary) {
  if (canary.hasOwnProperty(prop)) {
    ownProps.push(prop);
  }
}

// Constructor with params
// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
// }

// let terrier = new Dog("Sky", "brown");


// instanceof to check constructor usage
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
myHouse instanceof House;


