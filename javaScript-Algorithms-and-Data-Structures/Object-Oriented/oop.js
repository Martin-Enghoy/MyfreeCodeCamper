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