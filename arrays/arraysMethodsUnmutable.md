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

```js 
const nestedArrays =[1, 2, [3, [4, 5] /* this is second level nesting*/,], [6, 7]]
const flatedOnOneLevel = nestedArrays.flat(1) // flat on first level -> [ 1, 2, 3, [ 4, 5 ], 6, 7 ]
const flatIninity = nestedArrays.flat(Infinity) // Output: [1, 2, 3, 4, 5, 6, 7]
```