// This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

// Note that the function has no name and is not stored in a variable. 
// The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
// This pattern is known as an immediately invoked function expression or IIFE.

(function () {
    console.log("A cozy nest is ready");
})();

// makeNest();


let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();