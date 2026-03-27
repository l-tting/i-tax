// 1. Student Grading System
// Write a function that takes a score (0–100) and returns a grade.
// Rules:
// 80–100 → A
// 70–79 → B
// 60–69 → C
// 50–59 → D
// Below 50 → F

let marks = Number(prompt("Enter marks here"));

function get_grade(marks) {
  let grade;
  if (marks >= 80 && marks <= 100) {
     grade = "A"
  } else if (marks >= 70 && marks <= 79) {
      grade = "B"
  } else if (marks >= 60 && marks <= 69) {
     grade = "C"
  } else if (marks >= 50 && marks <= 59) {
     grade = "D"
  } else if (marks >= 0 && marks < 50) {
     grade = "E"
  } else {
     grade = "Invalid input"
  }
  return grade
}


let grade = get_grade(marks)
console.log(grade)


let number = Number(prompt("Enter a random number"))

let even = (number%2==0) ? "Even value" : "Odd value"
console.log(even)


if(number%2==0){
   console.log("Even")
}else{
   console.log("Odd")
}

let x = 10
x *= 5
console.log(x) //50


let age = Number(prompt("Enter age"))

let valid_driver = (age >=18) ? "Can drive" :"Not of age"
console.log(valid_driver)



let num1 = Number(prompt("enter num1"))
let num2 = Number(prompt("enter num2"))
let num3 = Number(prompt("enter num3"))
let num4 = Number(prompt("enter num4"))

let sum = num1 + num2 + num3 + num4
// let avg = sum / 4
// console.log(avg)


function averageOf4Numbers(a,b,c,d){
      let sum = a + b + c + d
      return sum / 4
}

let avg = averageOf4Numbers(num1,num2,num3,num4)
console.log(avg)