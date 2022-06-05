function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
    else {
        prototypeProps.push(prop);
    }
}

// Check Constructor
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    }
    else {
        return false;
    }
}


// Prototype Constructor
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};


// Check prototype
Dog.prototype.isPrototypeOf(beagle);

// Supertype of Dog object
Object.prototype.isPrototypeOf(Dog.prototype);