# Higher Order Function on arrays 
Higher-order functions are functions that take other functions as arguments or return functions


## Example Array for methods 
```js
const exampleArray = [
    {name:"Dominik", lastName:"Kantorowicz"},
    {name:"Stefan", lastName:"Dolorem"},
    {name:"Łukasz", lastName:"Lorem"},
    {name:"Luke", lastName:"Skywalker"},
    ]

```
## ForEach 
The forEach method is used to iterate through each item in an array. Unlike other higher-order functions like map or filter, forEach does not return a new array. Instead, it is used to execute a provided function once for each array element. This makes forEach ideal for performing operations or side effects on an array, without the need to create a new array as a result.

### Syntax 
```js
//With callback

function callback (element, index, array) {
    console.log(element.name,) // Logs the name of the current element
     console.log(index); // Logs the index of the current element
}
exampleArray.forEach(callback) // It will console.log us each name in our array of object 

// With anonymous function 

exampleArray.forEach((element,index, array) => {
        console.log(element) // It will console.log us each name in our array of object 
})
```

### Important - return in forEach 
forEach takes a callback function and executes it for each element of the array, but does not stop its operation when it encounters a return instruction in that callback function. A return instruction inside a function passed to forEach returns a value only for that callback function, but does not affect the operation of the forEach method as a whole.

```js
[1, 2, 3].forEach(num => {
    if (num === 2) {
        return; // It will only return for 2 but not rest
    }
    console.log(num); // Numbers 1 i 3 will be console.log.
});
```

## Map 
The map method is used to create a new array by applying a given function to each element of the original array. It returns a new array with the results. Here's the syntax and an example: 

### Syntax 
```js
const newArray = array.map(callback(element, index, array));

```

### Example 
```js
// Using a named function to extract just the names
function extractName(element, index, array) {
    return element.name;
}

const namesArray = exampleArray.map(extractName);
console.log(namesArray); // It will contain an array of names from exampleArray.

```