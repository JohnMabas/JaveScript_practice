
// let car = prompt("Which is your fav car?")

// let facCars = {
//     [car]: 5
// }
// console.log(facCars)


// Cosntructor Function..
function Car(name, model){
    this.name = name;
    this.model = model
}
const bmwCar = new Car("BMW", "XI")
console.log(bmwCar)

// new Object..
const person = new Object()
person.name = "Mabas"
person.age = 23;
console.log(person);

// Factory..
function createUser(name, age){
    return {
        name,
        age
    }
}

const user1 = createUser("John", 33)
console.log(user1)

let profile = {
    name: "mabas",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} work at ${this.company}`)
    },
    address: {
        city:"Banglore",
        pin: 56032,
        state: "Jos",
        country: "India",
        greeting: function() {
            console.log("Welcome in India")
        }
    },
    // salary: 100
}

// for ... in

for (let key in profile){
    console.log(key)
    console.log(profile[key])
}

console.log(profile.salary)

if(!profile.salary) {
    console.log("The salary property doesn't exist")
}

profile.address.greeting()
console.log(profile.name)
console.log(profile.company)


profile.message()


// Object Reference..

let fruit = { name: "mango"}
const oneMoreFruit = { name: "mango"};


console.log(fruit == oneMoreFruit)
console.log(fruit === oneMoreFruit)

fruit = oneMoreFruit;

console.log(fruit == oneMoreFruit)
console.log(fruit === oneMoreFruit)


// Static Methods...

const target = {p:1, q:2};
const source = {a:3, b:5};

const returnObj = Object.assign(target, source);
console.log(returnObj)


// object to Array
const myObj = {
    a: "tapas",
    b: 32
}

const myArr = Object.entries(myObj)
console.log(myArr)

// Array to object
const entries = new Map([
    ["foo", "bar"],
    ["baz", 42]
]);

const objEntries = Object.fromEntries(entries)
console.log(objEntries)

// freeze...

const emp = {
    sal: 100
}

Object.freeze(emp)

emp.salary = 200
console.log(emp)

console.log(Object.isFrozen(emp))



 





