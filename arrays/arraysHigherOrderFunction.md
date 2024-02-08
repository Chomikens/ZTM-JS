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


## findIndex
The `findIndex` method is similar to the `find` method, but it returns the index of the first element in the array that satisfies the given condition. If no element is found, it returns -1. Here's the syntax and an example:

### Syntax:
```js
const index = array.findIndex(callback(element, index, array));
```
### Example:
```js
// Using a named function to find the index of an element by a condition
function findIndexLuke(element) {
    return element.name === 'Luke';
}

const lukeIndex = exampleArray.findIndex(findIndexLuke);
console.log(lukeIndex); // It will contain the index of the object with name 'Luke'.
```

## find 

The `find` method is used to search for the first element in an array that satisfies a given condition. It returns the first element that passes the condition or `undefined` if no element is found. Here's the syntax and an example:

### Syntax:
```js
const result = array.find(callback(element, index, array));
```
### Example:
```js
// Using a named function to find an element by a condition
function findLuke(element) {
    return element === 'Luke';
}

const luke = exampleArray.find(findLuke);
console.log(luke); // It will contain the element with name 'Luke'.

```

## filter 
The filter method is used to create a new array containing all elements from the original array that satisfy a given condition. It returns a new array with elements that pass the condition. Here's the syntax and an example:

### Syntax
```js
const filteredArray = array.filter(callback(element, index, array));
```

### Example 
```js
// Using a named function to filter elements by a condition
function isEven(element) {
    return element % 2 === 0;
}

const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isEven);
console.log(evenNumbers); // It will contain an array of even numbers [2, 4, 6, 8, 10].

```

## reduce 
The reduce method is used to accumulate or reduce an array of values into a single value by applying a given function to each element of the array. It iterates through the array and maintains a running total or accumulated result based on the function's logic. Here's the syntax and an example:

### Syntax: 
```js
const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);

```
-   `callback`: A function that defines the logic for accumulating values. It takes four arguments:
    -   `accumulator`: The accumulated result.
    -   `currentValue`: The current element being processed.
    -   `index`: The index of the current element.
    -   `array`: The original array being iterated.
-   `initialValue` (optional): An initial value for the accumulator. If provided, the accumulation starts with this value. If omitted, the first element of the array is used as the initial accumulator value.

### Example: 
```js
// Using reduce to calculate the sum of all elements in an array
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // It will contain the sum of all numbers (15 in this case).

```

## includes - (ES 7)
The `includes` method determines whether an array includes a certain value among its entries, returning true or false as appropriate. It's a simple and efficient way to check for the presence of a value within an array.

`includes` works differently when applied to `strings` versus when it's used on `arrays`. The behavior of includes is context-dependent—its functionality changes based on whether it's called on an array or a string, although the core idea remains the same: to check for the presence of an element within an array or a substring within a string.

### Syntax: 
```js
const result = array.includes(/*value or variables*/)
```


### Example: 
```js
// Using includes to check if value exists
const number = [1, 2, 3, 4, 5];
const checkIf = numbers.includes(4);// true

```