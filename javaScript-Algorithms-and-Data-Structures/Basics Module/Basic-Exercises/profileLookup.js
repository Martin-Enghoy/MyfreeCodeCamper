// Setup
// GLOBAL DECLARATION?
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // console.log(contacts.hasOwnProperty(name));
    let nameBool = false, propBool = false;                     // <--------------- !!!!!!!!!!! DO NOT DECLARE VARIABLES LIKE THIS: let i, j = 0; ONLY J WILL BE 0 AND NOT i;
    for (let i = 0; i < contacts.length; i++) {
      // console.log(name == contacts[i].firstName[name]);
      // console.log(i);
      if (name == contacts[i].firstName) {
        // console.log(contacts[i].firstName)
        nameBool = true;
        if (contacts[i].hasOwnProperty(prop)) {
          propBool = true;
          return contacts[i][prop];
        }
      }
      console.log(i, nameBool, contacts[i].firstName);
      console.log(i, propBool, "prop");
    }
  
    if (nameBool == false && propBool == false) {
      return "No such contact";
    }
    else if (nameBool == true && propBool == false) {
      return "No such property";
    }
  
    // console.log(name === contacts[0].firstName);
    // console.log(contacts[0].hasOwnProperty(prop));
    // if (name === contacts.firstName[name]) {
      
    // }
    
    // if (name === contacts[]) {
    //   if (contacts.hasOwnProperty(prop)) {
    //     return contacts[prop];
    //   }
    //   else {
    //     return "No such property";
    //   }
    // }
    // else {
    //   return "No such contact";
    // }
  }
  
  lookUpProfile("Akira", "likes");
  console.log(lookUpProfile("Bob", "number"));