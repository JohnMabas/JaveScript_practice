
let user = ['{"name": "mabas", "age": 21, "location": "Jos"}'];
let obj = JSON.parse(user);
let res = `My name is ${obj.name} and am ${obj.age} years old, and am located in ${obj.location}`;

console.log(res)