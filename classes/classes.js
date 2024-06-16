class Human {

    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    showData() {
        console.log(`Name is ${this.name}, age is ${this.age}, from ${this.country}`);
    }

}

const person1 = new Human('никита', 16, 'minsk');
const person2 = new Human('Dima', 19, 'Brest');

person1.showData();
person2.showData();
