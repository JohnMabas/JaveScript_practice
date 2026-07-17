// let user = ['{"name": "mabas", "age": 21, "location": "Jos"}'];
// let obj = JSON.parse(user);
// let res = `My name is ${obj.name} and am ${obj.age} years old, and am located in ${obj.location}`;

// console.log(res)

const car = {
  brand: "Benz",
  model: "E250",
  year: 2023,
  owner: {
    name: "Mabas",
    city: "Jos",
  },
  features: [
    "Airbags",
    "Radio",
    "Bluetooth",
    "Camera",
    "Electronic Stability Program (ESP),"
  ],
};

let jsonData = JSON.stringify(car, null, 2);
console.log(jsonData);

let newCar = JSON.parse(jsonData);
console.log("Owner Name:", newCar.owner.name);
console.log("Second Feature:", newCar.features[1]);

if (car.brand === newCar.brand) {
    console.log("The brands are the same.");
} else {
    console.log("The brands are different.");
}
