//  JAVASCRIPT OBJECTS WOOOOOOOO
//      1.) If your object has any non-string properties, JavaScript will automatically typecast them as strings.
//      2.) JSON IS ACTUALLY JAVASCRIPT OBJECT NOTATION

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

/////////////////////////////////////////////////////

//  COMPLEX OBJECT DECLARATION WITHIN ARRAY
const myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "As It Is",
        "title": "Okay - Acoustic Version",
        "release_year": 2019,
        "formats": [
            "Spotify",
            "Apple Music",
            "Youtube"
        ],
    }
];

/////////////////////////////////////////////////////

//  ACCESSING NESTED OBJECTS 
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

/////////////////////////////////////////////////////

//  ACCESSING NESTED ARRAYS
const myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];
//      set the variable secondTree to the second item in the trees list from the myPlants object.
const secondTree = myPlants[1].list[1];
