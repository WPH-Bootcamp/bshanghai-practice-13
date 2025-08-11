class Animal {
  // ...
}

class Dog extends Animal {
  // ...
}

class Cat {
  // ...
}

const myAnimal = new Animal();
const myDog = new Dog();
const myCat = new Cat();

console.log(myAnimal instanceof Animal);
console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
console.log(myCat instanceof Cat);
console.log(myCat instanceof Animal);

// struktur data
console.log([] instanceof Array);
console.log({} instanceof Object);
