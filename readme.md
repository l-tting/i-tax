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