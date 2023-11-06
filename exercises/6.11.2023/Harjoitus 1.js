// Osa A

/*function doIt() {
    return function() {
        console.log("Inside f");
    };
}

const f = doIt();
f(); // This will log "Inside f"
console.log("Hello World");*/



// Osa B

/*function doIt(condition) {
    if (condition) {
        return function() {
            console.log("world");
        };
    } else {
        return function() {
            console.log("hello");
        };
    }
}

doIt(false)(); // Outputs "hello"
doIt(true)();  // Outputs "world"*/

// Osa C

/*function makeAdder(valueToAdd) {
    return function(number) {
        return valueToAdd + number;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // Outputs 7
console.log(add10(2)); // Outputs 12*/

// Osa D

/*function Person(name, age) {
    let _name = name;
    let _age = age;

    // Private validation functions
    function validateName(newName) {
        if (newName.length < 2) {
            throw new TypeError("Name must be at least 2 characters long");
        }
    }

    function validateAge(newAge) {
        if (newAge < 0) {
            throw new TypeError("Age cannot be negative");
        }
    }

    this.setName = function(newName) {
        validateName(newName);
        _name = newName;
    };

    this.setAge = function(newAge) {
        validateAge(newAge);
        _age = newAge;
    };

    this.getName = function() {
        return _name;
    };

    this.getAge = function() {
        return _age;
    };
}

let jack = new Person("jack", 20);
jack.setName("paul");
jack.setAge(80);

console.log(jack.getName()); // Outputs "paul"
console.log(jack.getAge());  // Outputs 80
*/