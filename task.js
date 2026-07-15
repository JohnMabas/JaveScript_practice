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

