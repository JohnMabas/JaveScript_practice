
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

// studentsIds(students, '2367')

let deleteStudents = (students, Id) => {
    students.forEach((value, key) => {
        if(value === Id ){
            students.delete(key)
        }
    })
    console.log(students)
}
deleteStudents(students, '4579')



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


//  console.log(programmingLanguages)





