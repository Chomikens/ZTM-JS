# Scope 

There are five kinds of scopes in JavaScript:

- Global scope
- Function scope
- Block scope
- Lexical scope
- Closure scope

## Global scope 
You create a variable in the global scope if you declare the variable outside all functions and curly braces ({}). These variables are called global variables.

```js
const globalVariable = 'some value'
```

## Function scope 
If you create a variable in function, the variable is in a function scope. You can use a function-scoped variable anywhere inside the function.

```js
function someFunction() {
  const functionVariable = 'some value'
}
``` 

You can use a function-scoped variable anywhere inside the function. 
```js
function someFunction() {
  const functionVariable = 'some value'
  console.log(functionVariable) // This will log 'some value'
}

someFunction()
```

**But you cannot use the variable outside the function** 

```js
function someFunction() {
  const functionVariable = 'some value'
  console.log(functionVariable) // This will log 'some value'
}

console.log(functionVariable) // ReferenceError: functionVariable is not defined

```

**Unless function return this variable and then you reasign in**

```js
function someFunction() {
  const functionVariable = 'some value'
  return functionVariable
}

const reassignVariable = someFunction()
console.log(reassignVariable)
```

## Var and Function Scope
The var keyword declares a variable in the function scope if it's used within a function. Unlike let and const, var does not recognize block scope (e.g., within if statements or loops), which can lead to unexpected behavior if not used carefully.

```js
function testFunction() {
  if (true) {
    var blockVariable = 'inside if block';
  }
  console.log(blockVariable);  // This will log 'inside if block', showing var's function scope
}

testFunction();
```

In the above example, blockVariable is accessible outside the if block but still within the function, illustrating the function scope of var.
This behavior is unique to var, as let and const respect block scope and would have resulted in a ReferenceError if used in the same way.