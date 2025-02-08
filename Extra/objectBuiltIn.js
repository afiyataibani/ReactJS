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

// 2. Assign => Copies properties from a source object to a target object
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const assign = Object.assign(person, obj1, obj2);
console.log(assign);

// 3. Keys => Returns an array of the keys of an object
const obj3 = { e: 5, f: 6 };
const obj4 = { g: 7, h: 8 };
const keys = Object.keys(obj3);
console.log(keys);
const key = Object.keys(assign);
console.log(key);

// 4. Values => Returns an array of the property values of an object
const obj5 = { i: 9, j: 10, k: 11 };
const values = Object.values(obj5);
console.log(values);

// 5. Entries => Creates an object from a list of keys/values
const obj6 = { l: 12, m: 13, n: 14 };
const entries = Object.entries(obj6);
console.log(entries);

// 6. Freeze => Prevents from removing or altering existing properties
const obj7 = { o: 15, p: 16, q: 17, r: 18 };
const freeze = Object.freeze(obj7);
obj7.r = 19;
console.log(freeze);

// 7. Seal => Allows modifications, but prevents additions and deletions of properties
const obj8 = { s: 19, t: 20, u: 21 };
const seal = Object.seal(obj8);
obj8.u = 22;
console.log(seal);

// 8. getPrototypeOf => Returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object
const obj9 = { v: 22, w: 23 };
console.log(Object.getPrototypeOf(obj9));

// 9. setPrototypeOf => Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null
// const obj10 = { x: 24, y: 25, z: 26 };
const proto = {
  fun: function () {
    console.log("hello");
  },
  name: "XYZ",
};

const obj11 = {};
Object.setPrototypeOf(obj11, proto);
console.log(Object.getPrototypeOf(obj11));
