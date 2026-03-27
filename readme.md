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
      { name: "Laptop", details: { price: 1000, quantity: 1, category: "Electronics" } },
      { name: "Apple", details: { price: 2, quantity: 50, category: "Grocery" } }
}
use the above object to get total revenue for each product if revenue = price * quantity
