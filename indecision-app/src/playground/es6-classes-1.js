class Person {
    constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
    }

    getGreeting() {
        return `Hi I am ${this.name} !`;
    }

    getDescription() {
        return `Hi this is bla bla ${name}`;
    }
} 

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) {
            description += `Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age , homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += `I am from ${this.homeLocation}`;
            return greeting;
        }
        return greeting;
    }
}

console.log('hellooooo');
const me = new Traveler('Andrew Mead' , 10, 'New York');
console.log(me.getGreeting());

/*
console.log(me.getDescription());

const other = new Student();
console.log(other);

console.log(other.getDescription()); */