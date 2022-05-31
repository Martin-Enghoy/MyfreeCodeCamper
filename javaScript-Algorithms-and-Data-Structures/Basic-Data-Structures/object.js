// Object declaration and appending props
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
};

foods['bananas'] = 13;
foods['grapes'] = 35;
foods['strawberries'] = 27;

console.log(foods);


// Change a deeper prop
let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
        totalUsers: 51,
        online: 42
    }
};

userActivity.data.online = 45;
console.log(userActivity);


// Bracket notation
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
};

function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory("apples"));

// delete
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// hasOwnProperty()
let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    if (
        userObj.hasOwnProperty('Alan') &&
        userObj.hasOwnProperty('Jeff') &&
        userObj.hasOwnProperty('Sarah') &&
        userObj.hasOwnProperty('Ryan')
    ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEveryoneHere(users));


// for... used in function for key-value pairs
const users2 = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
}

function countOnline(usersObj) {
    let onlineUser = 0;
    for (let user in usersObj) {
        // console.log()
        if (usersObj[user]['online'] == true) {
            onlineUser++;
        }
    }
    return onlineUser;
}

console.log(countOnline(users2));


// Acquire keys from object
function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users2));

// Append in sub-key
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    userObj.data.friends.push(friend)
    return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));