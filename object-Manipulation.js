
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





