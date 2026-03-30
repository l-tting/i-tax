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


let inventory =[

      { name: "Phone", details:{ price: 500, quantity: 2, category: "Electronics" } },
      { name: "Laptop", details: { price: 1000, quantity: 1, category: "Electronics" } },
      { name: "Apple", details: { price: 2, quantity: 50, category: "Grocery" } }
]
// use the above object to get total revenue for each product if revenue = price * quantity



console.log(inventory[0].details.price * inventory[0].details.quantity)
console.log(inventory[1].details.price * inventory[1].details.quantity)


let total_revenue = 0
for(let i=0 ;i < inventory.length; i++){
   let revenue = inventory[i].details.price * inventory[i].details.quantity
   total_revenue += revenue
   
}

console.log(total_revenue)


0
1000
2000
100



let data = [
  {
    id: 1,
    customer: { name: "John", tier: "Gold" },
    items: [
      { name: "Phone", price: 500, quantity: 1 },
      { name: "Case", price: 50, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: { name: "Alice", tier: "Silver" },
    items: [
      { name: "Laptop", price: 1200, quantity: 1 },
      { name: "Mouse", price: 25, quantity: 2 }
    ]
  },
  {
    id: 3,
    customer: { name: "Bob", tier: "Bronze" },
    items: [
      { name: "Keyboard", price: 100, quantity: 1 },
      { name: "USB Cable", price: 10, quantity: 3 }
    ]
  },
  {
    id: 4,
    customer: { name: "Eve", tier: "Gold" },
    items: [
      { name: "Monitor", price: 300, quantity: 2 }
    ]
  },
  {
    id: 5,
    customer: { name: "Charlie", tier: "Silver" },
    items: [
      { name: "Tablet", price: 400, quantity: 1 },
      { name: "Stylus", price: 80, quantity: 1 }
    ]
  },
  {
    id: 6,
    customer: { name: "David", tier: "None" },
    items: [
      { name: "Headphones", price: 150, quantity: 2 }
    ]
  }
]