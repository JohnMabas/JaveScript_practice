// Q1.............
const numbers = [1, 7, 10, 15, 20, 25, 30];

const evenNum = numbers.filter(num => num % 2 === 0)
// console.log(evenNum)
const multiplied = numbers.map(num => num * 3)
// console.log(multiplied)
const greaterNum = numbers.find(num => num > 18)
// console.log(greaterNum)
const greaterTwo = numbers.every(num => num > 2)
// console.log(greaterTwo)
const divisibleFive = numbers.some(num => num % 5 === 0)
// console.log(divisibleFive)


// Q2...............
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 91 },
  { name: "David", score: 65 },
  { name: "Eve", score: 38 }
];

const studentName = students.map(name => name.name)
// console.log(studentName)
const passedScore = students.filter(score => score.score >= 50)
// console.log(passedScore)
const findScore = students.find(stu => stu.score === 91)
// console.log(findScore)
const averageScore = students.reduce((total, average) => total += average.score , 0) / students.length
// console.log(averageScore)
const studentSort = students.sort((a, b) => b.score - a.score);
// console.log(studentSort)

// Q3.................
const orders = [
  {
    id: 1,
    customer: "John",
    items: [
      { name: "Laptop", price: 1000, quantity: 1 },
      { name: "Mouse", price: 20, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Jane",
    items: [
      { name: "Keyboard", price: 50, quantity: 1 },
      { name: "Monitor", price: 200, quantity: 2 }
    ]
  },
  {
    id: 3,
    customer: "Mike",
    items: [
      { name: "USB Cable", price: 10, quantity: 5 }
    ]
  }
];

orders.forEach(val => val.items
    .map(val=> val.price)
    .reduce((total, customer) => total += customer, 0)
)
