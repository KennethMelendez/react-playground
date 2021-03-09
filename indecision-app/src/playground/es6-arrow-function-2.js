console.log('Kenneth MNelendez');

//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(55,1));

// this - keyword is no longer bound

const user = {
    name: 'Kenenth',
    cities: ['Queens', 'New York', 'Dubplin'],
    printPlacesLives() {
    return this.cities.map((city) => `${this.name} has lived in ${city}.`);
    }
}

console.log(user['printPlacesLives']());

// challange area

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy );
    }
    // numbers - array of numbers
    // multiplyBy - single number
    //multiply - return a new arrat where the number have been multiplied
};

console.log(multiplier['multiply']());