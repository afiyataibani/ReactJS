// 1. Create => Creates an object from an existing object

const person = {
  name: "Afiya",
  fun: function () {
    console.log("Hello");
  },
};

const person1 = Object.create(person);
console.log(person1);
console.log(person1.name);
person1.fun();
