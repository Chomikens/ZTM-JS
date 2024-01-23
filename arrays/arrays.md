# Arrays 

- Arrays are **list-like objects** - they are used to store multiple values in a single variable, and these values can be of any data type, including `numbers`, `strings`, `objects`, and even other `arrays`.
    - From **performance reason** is good to store one type of variables: f.e booleans, another object, functions etc.
- **Zero-Indexed**: Each element in an array has an index, starting with 0 for the first element, 1 for the second, and so on. 
This is known as zero-based indexing.  

## Syntax 

```js
const exampleArray = [1, 2, 3, 4]

// Get first element: 
console.log(exampleArray[0])

// Array of array
const arrayOfArray = [[1,2,3,4], [5,6,7,8]]

// Get first element -first 0 is to 0index array (first :)), second 0 is to 0index element (first :): 
console.log(arrayOfArray[0][0])
```