//  Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

//  Match Non-Whitespace
let sample2 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result2 = sample2.match(countNonWhiteSpace);

//  Provides a range of iterations
//      ohRegex to match the entire phrase Oh no only when it has 3 to 6 letter h's.
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; 
let result3 = ohRegex.test(ohStr);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;              //  Floor
let result4 = haRegex.test(haStr);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;             //  Exact
let result5 = timRegex.test(timStr);

//  Checks for possible existence of the character prior to ?
//      You can think of this symbol as saying the previous element is optional.
let favWord = "favorite";
let favRegex = /favou?rite/; 
let result6 = favRegex.test(favWord);
