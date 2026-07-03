
//  Q1. Create a Map of students IDs and Names
//     - Add at least 5 students
//     -Retrieve a name using a students IDs
//     -Delete one entry and print the Map
const students = new Map();
students.set('mabas', '1277');
students.set('john', '2379');
students.set('Hope', '4579');
students.set('Joy', '4670');
students.set('Dang', '2367');


let studentsIds = (students, Id) => {
    students.forEach((value, key) => {
    if(value === Id){
        // return item
        console.log(`${key} - ${value}`)
    }

    })
}

studentsIds(students, '2367')

let deleteStudents = (students, Id) => {
    students.forEach((value, key) => {
        if(value === Id ){
            students.delete(key)
        }
    })
    console.log(students)
}
// deleteStudents(students, '4579')



// 2. Add dulicate languages to test uniqueness
//      - Iterte print all unique entries

const programmingLanguages = new Set();
 programmingLanguages.add('PHP')
 programmingLanguages.add('HTML')
 programmingLanguages.add('Rust')
 programmingLanguages.add('PHP')
 programmingLanguages.add('Rust')
 programmingLanguages.add('JavaScript')
 programmingLanguages.add('CSS')
 programmingLanguages.add('JavaScript')


 programmingLanguages.forEach((n) => {
    console.log(n)
 })


//  3.Build a contact List usisng Map
//  - Use phone number as keys and names as values
//  - Add, update, delete contacts
//  - Search for a contact by number

const contactList = new Map();

let addContact = (phoneNo, name) =>{
    contactList.set(phoneNo, name)
}

let deleteContact = (contactList, name) => {
    contactList.forEach((value, key) =>{
        if(key === name) {
            contactList.delete(key)
        }
    })


}

let search = (contactList, phoneNo) => {
    contactList.forEach((value, key) => {
        if(key === phoneNo){
            console.log(`${value} - ${key}`)
        }
    })
}

addContact(9060096590, 'mabas')
addContact(1234, 'John')
addContact(9956, 'Hope')
addContact(4444, 'Joy')
addContact(5555, 'John')

deleteContact(contactList, 9060096590)
search(contactList, 5555)

// console.log(contactList)


// Q4.....

//  let studentsArr = [
//     {name: 'Mabas', scores: [34,5,22,10,66]},
//     {name: 'John', scores: [3,70,20,11,67]},
//     {name: 'Dang', scores: [5,98,24,12,60]},
//     {name: 'Mabas', scores: [35,56,27,18,62]},
//  ]

//  let averageScores = (studentsArr) => {
//     let avScores = studentsArr.reduce((acc, total) => acc + total, 0)
//     console.log(total)
//  }

//  averageScores()



// Q5.

 let shoppingCart = [
    {name: 'phone', price: '300', quantity: 9, category: 'elctronices'},
    {name: 'shirt', price: '500', quantity: 3, category: 'fashion'},
    {name: 'labtop', price: '600', quantity: 11, category: 'elctronices'},
    {name: 'Trouser', price: '800', quantity: 2, category: 'fashion'},
 ]


let cartCost = shoppingCart.reduce((total, item) => {
    return total + item.price

}, 0)

let mostExp = arr => {
    
}



// console.log(cartCost)

















