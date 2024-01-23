# Not mutable methods 
Methods that **don't change** original array 

 - ### `slice (indexOfStart*, ItemsToDelete*, ItemsToAdd* )` - delete or add items to specify point / or make a copy of array
Good for making a copy of array 

```js 
const copyOfArray = mutableMethodsArray.slice()
console.log(copyOfArray)
```

- ### `concat (array)` - add two array together or make a copy 
```js 

const copyOfArrayByAdding = copyOfArray.concat()
console.log(copyOfArrayByAdding) // make a copy of array [1,2,3,4,5,6,7,8,9]

const copyOfArrayByAdding = copyOfArray.concat(mutableMethodsArray)
console.log(opyOfArrayByAdding) // [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
```
- ### `toSort()` - sort array (need polyfill)
Converts elements to strings and compares their UTF-16 code unit values. This means that when sorting numbers, it may not behave as expected. For instance, 10 will come before 2 because '10' is lexicographically smaller than '2'.

```js 
const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();

const numbers = [1,2,3,4,5];
const sortedMonths = months.toSorted((a,b) => a-b);
```

- ### `flat(levelofDepth)` - flat nested array 
Create new array flated on params level 

Memory Usage: Flattening a very large and deeply nested array can result in a significant increase in memory usage. If the resulting array is too large to fit into the available memory, it may cause your program to crash or run out of memory.

 Performance: The performance of flat() will degrade as the size and complexity of the array increase. Flattening a large array or a deeply nested array can be computationally expensive and time-consuming.

 Maximum Call Stack Size: In JavaScript, there is a limit to the size of the call stack (the number of nested calls that can be made). If you use flat(Infinity) on an extremely deeply nested array, it's theoretically possible to exceed this limit, resulting in a "Maximum call stack size exceeded" error.

```js 
const nestedArrays =[1, 2, [3, [4, 5] /* this is second level nesting*/,], [6, 7]]
const flatedOnOneLevel = nestedArrays.flat(1) // flat on first level -> [ 1, 2, 3, [ 4, 5 ], 6, 7 ]
const flatIninity = nestedArrays.flat(Infinity) // Output: [1, 2, 3, 4, 5, 6, 7]
```