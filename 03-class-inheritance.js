class Animal {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); //memanggil constructor dari animal
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks!`);
  }

  fetch() {
    console.log(`${this.name} runs after the ball`);
  }
}

const myDog = new Dog("buddy", "bulldog");
myDog.speak();
myDog.fetch();
console.log(myDog.name);
