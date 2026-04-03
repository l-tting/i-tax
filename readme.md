add a bootstrap table and form in index.html
form - has 2 inputs (basic ,benefits)
table - 2 columns, 7 rows

id attribute - attribute used by JS to uniquely identify or target an element
document.getElementByID() - a function used by JS to access a html element by its unique id attribute

document.getElementByID().value - used with input elements -> form inputs ;input, select , textarea
document.getElementByID().innerText - used with any other element
document.getElementByID().innerHTML - used with any other element

<p id='hello'> Hello World</p>
document.getElementByID('hello').innerHTML => Hello World + HTML TAGS
document.getElementByID('hello').innerText => Hello World

JS user interactivity - what a user can do when using an application
Events - specific actions performed by a user when using an application
e.g.filling forms, scroll, zoom,hovering,focus, volume up/down ,submitting forms

.addEventListener() - a function that listens for specific events

After an event , the default behaviour of the browser is to refresh

event.preventDefault() - prevents the default behaviour of the browser (refreshing) after an event occurs

variables - variable naming rules
data types
data types methods
data structures & their methods
operators
conditional statements
loops
functions

**quiz on functions**

1. Student Grading System
   Write a function that takes a score (0–100) and returns a grade.
   Rules:
   80–100 → A
   70–79 → B
   60–69 → C
   50–59 → D
   Below 50 → F

2.Password Strength Checker
Write a function that checks:
length ≥ 8

3.Reverse Number
Write a JavaScript function that reverses a number. e.g.
reverse 2026 to 6206 -> hint: get the string into an array first
strings have no direct method to reverse

4.Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.

CONDITIONAL STATEMENTS
-> The ability to make some decisions based on some input & predefined conditions
-> Types of conditional statements:
1.if else statements
2.switch break
3.ternary operator

if -else
-> for scenarios where there is only one condition to be met, use simple if -else statements otherwise
use if- else if - else statements

e.g
if(condition){
//what happens if the condition is true / met
}else{
//what happens if the condition is false / not met
}

if(condition 1){
//what happens if condition 1 is true
}else if(condition 2){
//what happens if condition 2 is true
}else if(condition 3){
//what happens if condition 3 is true
}else{
//what happens if all conditions are false / not met
}

parts of a function
1.function definition
-> contains function keyword, name of the function and possible parameters
-> e.g. function get_grade(marks)
2.function body
-> the part of the function that executes your actual code
3.function call
-> calling on your function by its name to execute its task and give back an output
e.g. get_grade()

_variable scopes_
global vs local variables

_Ternary operator_
-> are a form / type of conditional statements
-> it is a shorthand for writing a simple if-else statement
-> it used the the ternary operator denoted by '?'
-> can only be used when there is only one condition to be met

task
-> using the ternary operator , write a program that determines whether
a person is eligible to drive or not (assume legal driving age to be 18 and above)

_type conversion vs coercion_

TASK
1.using the sales data of a company over one week below:
let sales = [1233,3400,340,2308,4500,3000,1000]
write a function that gets the average sales of the above data

2.let pc ={ name: "Laptop", price: 1000 }
apply a 15% discount on the price above and computed discounted amount

3.Write a function that:
Takes an array of student marks
let marks = [60,40,70,91,43,51,34,28,45,80,65]
and output the no. of students who had a score of 50 and above

4.let inventory ={
      { name: "Phone", details: { price: 500, quantity: 2, category: "Electronics" } },
      { namedetails:: "Laptop",  { price: 1000, quantity: 1, category: "Electronics" } },
      { name: "Apple", details: { price: 2, quantity: 50, category: "Grocery" } }
}
use the above object to get total revenue for each product if revenue = price * quantity



*LOOPS*
-> Control structures that execute a block of code repeatedly until a specified condition is met
-> eliminates redundancy

*Types of Loops*
1.For Loop - you need a definite starting and ending point
2.While Loop - only concerned with the condition - keeps looping as long as the condition is met


*For Loop in JS* - uses the for keyword
-> has 3 parts  
1.initialization - starting point - where do i start looping from
2.condition - condition to be met so that the loop keeps running
3.update - increment / decrement after each iteration

//loop to output 1 - 1000

for(initialzation;condition;update){
      //block of code executing repeatedly
}

for(let i=1; i<= 1000; i++){
      console.log(i)
}
1++
2
3
4



999++
1000 -> 1001

let numbers = [1,2,3,4,5,6,7,8,9,10] //9 -> 10

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])


for(let i=0; i<numbers.length ; i++){
      console.log(numbers[i])
}

0
1
9



*Objects*
-> Is a data structure that stores data in key value pairs
-> The equivalent of dictionaries in Python

*Properties of Objects*
1.It stores data in key-value pairs
2.We use the key to access the value
3.Key is a string 
4.Values can be of any data type
5.They are mutable


*Why use an object?*



let person = {
      name:"Mike",
      age:20,
     "full address":"Karen",
}

*accessing values in an object*
1.dot notation - can only be used with keys that follow valid identifier naming rules
2.bracket notation - can access keys that follow identifier naming rules or keys that dont

console.log(person["full address"])


Object.keys(person) - gives you keys in an array
Object.values(person)
Object.entries(person)



let transactions = [
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

Write a program that:
1.Loops through all transactions
2.For each transaction; 
   -> calculate the subtotal (price * quantity)
3.Apply a discount based on the tier:
   Gold -> 10%
   Silver -> 5%
   any other -> 0%
4.Return:
      {
            totalRevenue: number,  
            totalDiscountGiven: number, 
            transactions: [
                  {
                        id: number 6
                        finalAmount:number 
                  }
            ]
      }


1000 
100


*OPTIONAL CHAINING*
-> A way to safely access deeply nested objects without running into hard errors if
something is undefined or null
-> It uses the ternary operator (?)

console.log(person?.work_info?.pay)

Mombasa ---- Voi ----- Nairobi ---- Nakuru ---- Kisumu


*Spread Operator*
-> lets you expand or copy elements from arrays or objects
-> ...
*Spread Operator in Arrays*
1.Copy array
2.Merge an array

*Function Tasks*
1.Write a function that:
 Takes an array
 Returns a new array with duplicates removed


2. Write a function that:
Takes email and password
Returns:
"Invalid email" if no @
"Password too short" if < 6 chars
"Login successful" otherwise


*More Tasks on Functions*
1.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '


2.Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'


3.Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5

