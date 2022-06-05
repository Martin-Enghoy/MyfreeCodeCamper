// If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

// duck => Is eat() defined here? No.
// Bird => Is eat() defined here? => Yes. Execute it and stop searching.
// Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
// Object => JavaScript stopped searching before reaching this level.

function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(penguin.fly());