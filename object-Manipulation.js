
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


