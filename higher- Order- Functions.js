// 1. add one to each number in an array and display it in the console

// let numbers = [1, 2, 3, 4, 5];

// function addOne(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i] + 1);
//   }
// }

// addOne(numbers);


// Using forEach().....

let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((number) => console.log(number + 1));


let arr = [5, 10, 15];

arr.forEach((item)=>{
  // console.log(item * 2); //10, 20, 30
});
// console.log(arr);


// 2. create a new array that only has the odd numbers from the numbers array
 
// Using filter()......

let arrNum = [1, 2, 3, 4, 5];

let oddArray = arrNum.filter((number) => number % 2 !== 0);
// console.log(oddArray);

/////
let arr1 = ['aaa', 'bbbb', 'ccccc'];

arr1.filter((item, index)=>{
  if (item.length < 3){
    return true;
  } else {
    return false;
  }
  console.log(index);
});