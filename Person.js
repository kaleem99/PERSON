class Person{
    constructor(name, age, gender, interests){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    Info(){
        return(`Hi my name is ${this.name}, i am ${this.age} years old, my gender is ${this.gender}, my interests are ${this.interests}`)
    }
}

let person = new Person('Kaleem', 20, 'male', ['Enjoying life', ' being active and fit', ' and learning everyday.']);
let greeting = person.Info();
console.log(greeting);