// Destructuring Objects
let student = {
    fName: "Pooja",
    age: 20,
    salary: 40000
}

// console.log(student.fName)
// let{fName} = student;
// let{age} = student;
// let{salary} = student;
let{fName, age, salary} = student
console.log(fName)
console.log(age)
console.log(salary)

//Destructuring Arrays:
let fruits = ["Apple", "Mango", "Grapes"]

let[fruit1, fruit2, fruit3] = fruits
console.log(fruit1)

