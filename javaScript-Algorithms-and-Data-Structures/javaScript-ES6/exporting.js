//  Exporting javaScript functions to be used by other files
//      Must be exported first before getting imported.

const uppercaseString = (string) => {
    return string.toUpperCase();
}

const lowercaseString = (string) => {
    return string.toLowerCase()
}

export { uppercaseString, lowercaseString };


//  Exporting default fallback  
export default function subtract(x, y) {
    return x - y;
}