// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    // console.log(recordCollection[id][prop] != "tracks");
    // console.log(recordCollection[id]);
    // console.log(prop === "tracks");
    // console.log(!recordCollection[id].hasOwnProperty(prop));
    if (prop === "tracks" && !recordCollection[id].hasOwnProperty(prop)) {
        records[id][prop] = [value];                               //  This should append a property to the targeted.
    }
    else if (prop === "tracks" && value != "") {
        records[id][prop].push(value);
    }
    else if (prop != "tracks" && value != "") {
        records[id][prop] = value;
    }
    else if (value === "") {
        delete records[id][prop];
    }

    return records;
}

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));

console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
