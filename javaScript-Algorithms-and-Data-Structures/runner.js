// const lookup = {
//     "alpha": "Adams",
//     "bravo": "Boston",
//     "charlie": "Chicago",
//     "delta": "Denver",
//     "echo": "Easy",
//     "foxtrot": "Frank"
// }

// let result = lookup["charlie"];
// console.log(result);

const lookup = [
    {
        alpha: "Adams",
        "bravo": "Boston"
    },
    {
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    },
];

let result = lookup[0]["bravo"];
console.log(result);