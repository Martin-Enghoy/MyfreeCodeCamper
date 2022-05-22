//  JAVASCRIPT OBJECTS WOOOOOOOO
//       1.) If your object has any non-string properties, JavaScript will automatically typecast them as strings.

const myDog = {
    name: "Sky",
    legs: 4,
    tails: 1,
    friends: ["Star", "Sunny", "Cloud", "Summer", "Storm"]
};

//  Adds another property called bark into our existing myDog object.
myDog.bark = "woof";

// deletes speficied property in myDog object.
delete myDog.tails;

/////////////////////////////////////////////////////

//  CALLING VALUES IN OBJECT USING DOT (.) NOTATION
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;


/////////////////////////////////////////////////////

//  CALLING VALUES IN OBJECT USING BRACKET ([]) NOTATION
//      The bracket notation is also used to iterate through the values of the Object's Properties.
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj2["an entree"];
console.log(entreeValue);
const drinkValue = testObj2["the drink"];
console.log(drinkValue);

const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

const playerNumber = 16;
const player = testObj3[playerNumber];

/////////////////////////////////////////////////////

//  UPDATING OBJECT PROPERTIES (Using either notation)
const myCat = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

myCat.name = "Happy Coder";
// myCat["name"] = "Happy Coder";

/////////////////////////////////////////////////////

//  CONVERTING A SWITCH CASE INTO AN OBJECT FOR EASY LOOKUP
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    // switch(val) {
    //   case "alpha":
    //     result = "Adams";
    //     break;
    //   case "bravo":
    //     result = "Boston";
    //     break;
    //   case "charlie":
    //     result = "Chicago";
    //     break;
    //   case "delta":
    //     result = "Denver";
    //     break;
    //   case "echo":
    //     result = "Easy";
    //     break;
    //   case "foxtrot":
    //     result = "Frank";
    // }
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }

    result = lookup[val];
    return result;
}

phoneticLookup("charlie");

/////////////////////////////////////////////////////

//  hasOwnProperty Check FOR CONDITIONAL FUNCTION
function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    }
    else {
        return "Not Found";
    }
}