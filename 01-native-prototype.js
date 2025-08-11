let person = {
  name: "kyra",
  greet: function () {
    console.log("hello " + this.name);
  },
};

let anotherPerson = Object.create(person);
anotherPerson.name = "bob";

person.greet();
anotherPerson.greet();

console.log(anotherPerson.__proto__ == person);
