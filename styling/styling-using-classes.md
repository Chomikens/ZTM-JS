# Styling using JS by classes 

## className vs ClassList 

We can manipulate elemenet css classes using: 

### Example HTML 

```html
<h1>Hey I'm heading 1</h1>
<h2>Hey I'm heading 2</h2>
```

- ### className 
It can be usefull when we dealing with an element that will only have one class at a time.
**className is string type** so can also use all string method on it. 

```js
const headingOne = document.querySelector("h1") 
headingOne.className = "classOne"
headingOne.className = "classTwo" // It's overwrite className
```

### classList
When dealing with multiple classes, classList is more convenient and expressive. It provides methods like `add`, `remove`, `toggle`, and `contains`. DOMTokenList object type. 

### classList.add('class') 
Using this method we can add class to our element or multiple classes seperate via commas


```js
const headingOne = document.querySelector("h2") 
headingOne.classList.add('classOne') // Add classOne
headingOne.classList.add('classTwo') // Add classTwo - now we have: classOne classTwo
headingOne.classList.add('classThree', 'classFour') // Like above
```


### classList.remove('class') 
Using this method we can remove class from our element or multiple classes seperate via commas


```js
const headingOne = document.querySelector("h2") 
headingOne.classList.remove('classOne') // Remove classOne
headingOne.classList.remove('classTwo') //  Remove  classTwo - now we have: ""
headingOne.classList.remove('classThree', 'classFour') // Like above
```

### classList.contains('class') 
Using this method we check if class exist. Return true in execist and false if dont. 

```js
const headingOne = document.querySelector("h2") 
if (headingOne.classList.contains("classTwo")) { // Check if class exists
    headingOne.classList.remove('classTwo') // If yes - remove it
} else 
eadingOne.classList.add('classTwo') // if now - add it 

```

### classList.toggle('class') 
Using this method we toggle between classes - it like contains with if statement. 

```js
// With contains
if (headingOne.classList.contains("classTwo")) { // Check if class exists
    headingOne.classList.remove('classTwo') // If yes - remove it
} else 
 headingOne.classList.add('classTwo') // if now - add it 

 // with toggle
headingOne.classList.toggle("classTwo")

```