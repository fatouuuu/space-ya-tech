let billAmount = 2000;
let tipPercentage = 0.5;
let numberOfPeople = 2;

function calculateTipAmount (billAmount, tipPercentage, numberOfPeople) {
    return (billAmount * tipPercentage) / numberOfPeople;
}

// console.log(calculateTipAmount(billAmount, tipPercentage, numberOfPeople));

//encapsulation: 

/* uses abstraction as well in the `calculateTipAmount` method */
//step 1: create an object that will hold the related data
//step 2: pass in the fn to calc tip amount

let billInformation = {
    billAmount: 2000,
    tipPercentage: 0.5,
    numberOfPeople: 2,
    calculateTipAmount: function(){
        return(this.billAmount * this.tipPercentage) / this.numberOfPeople
    }
}
// console.log(billInformation.calculateTipAmount());

//abstraction 

let person = {
    firstName: 'Fatou',
    occupation: 'Web Developer',
    age: 24,
    location: 'Nairobi',

    introduce: function() {
       return (`Hi, my name is ${this.firstName} and I am a ${this.occupation}. I am ${this.age} years old, and I live in ${this.location}`);
    }
}
// console.log(person.introduce());


//polymorphism
/*inheritance is also at work here. Cat and Dog are both children of Animal */
class Animal {
    speak(){
        // console.log("Animals have different sounds")
    }
}

class Cat extends Animal {
    speak(){
        // console.log("Cat says Meow Meow");
    }
}

class Dog extends Animal {
    speak(){
        // console.log("Dog says Woof Woof");
    }
}

const Mittens = new Cat()
Mittens.speak() 

const Bruno = new Dog()
Bruno.speak()

//test
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
class Student extends Person {
    sayHello() {
        console.log(`Hi, my name is ${this.name} and I'm a student`);
    }
}

const Ian = new Person('Ian')
Ian.sayHello()

const Kuhi = new Student('Kuhi')
Kuhi.sayHello()