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
Write a JavaScript function that reverses a number.

4.Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.