# Mutable methods
Methods **that change** oryginal array **(not recomended)**

```js
const mutableMethodsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
 
 - ### `unshift()` - add item to start

```js
mutableMethodsArray.unshift(0) 
console.log(mutableMethodsArray) // const mutableMethodsArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```
 - ### `shift()`- delete item from start

```js
mutableMethodsArray.shift() 
console.log(mutableMethodsArray) // const mutableMethodsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

 - ### `pop()`  - delete item to end

 ```js
mutableMethodsArray.pop() 
console.log(mutableMethodsArray) // const mutableMethodsArray = [1, 2, 3, 4, 5, 6, 7, 8]
```

 - ### `push()` - add item to end

 ```js
mutableMethodsArray.push(9) 
console.log(mutableMethodsArray) // const mutableMethodsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]
```

 - ### `splice(indexOfStart*, ItemsToDelete*, ItemsToAdd* )` - delete or add items to specify point

 ```js
mutableMethodsArray.splice(1, 0, "01", "02")  // Whe start at index 1, delete 0 items, add 01 (string) and 02 (string),
console.log(mutableMethodsArray) // const mutableMethodsArray = [1, '01', '02', 2, 3, 4, 5, 6, 7, 8, 9]
```

- ### `sort()` 
By default, sort converts elements to strings and compares their UTF-16 code unit values. This means that when sorting numbers, it may not behave as expected. For instance, 10 will come before 2 because '10' is lexicographically smaller than '2'.

 ```js
const exampleArray = [1, 2, 3, 11, 5,]
exampleArray.sort()  
console.log(exampleArray) // [1,11, 2, 3, 5]
```

To fiter numbers we must use custom function like below: 

```js
exampleArray.sort((a, b) => a - b); 
console.log(exampleArray) // [1, 2, 3, 5, 11]
```