const person = {
    name: "Afiya",
    fun: function (){
        console.log("Hello")
    }
};

const person1 = Object.create(person);
console.log(person1);
console.log(person1.name);
console.log(person1.fun());