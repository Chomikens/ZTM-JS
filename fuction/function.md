
# Function

## Ways to declare functions

- ### Function declaration **(hoisted)**
```js
function name (parametr1, parametr2) {

// Tips
// What exactly do function when you give it params? 
// It;s create temporary variable named like your pamars
// do something 

 return parametr1 * parametr2
	 // When 'return' is executed, the function stops.
	// Statements after 'return' are not executed.
	//console.log("I'm not working, because return")
}
 ```
 
- ### Function expression **(not hoisted)**
```js
	const expressionFunction = function(parameter1, parameter2) {
    return parameter1 * parameter2;
}
 ```
 
- ### Function expression `ES6+ - arrow function` **(not hoisted)**
```js
const handleFunction = (param1, param2) => {
return param1 * param2
}

// Tips#1 - you can write even less code when you dont have parametrs
const handleWithoutParams = () => {
return `You are doing great!`

// Tips#2 - you can write even less code when your function does one thing
const handleWithoutImplicitReturn = () => "You are doing great!"
```
  ## Ways to invoke/call functions 
  
  ```js
  name (argument1, argument2)
  // When we call/invoke function we can pass arguments - which function convert to it's paramets - order is important
  ```
  
## When use expression and declaration 

In short - when you need anonymous function use `arrow function` in other case use `function name () {}`