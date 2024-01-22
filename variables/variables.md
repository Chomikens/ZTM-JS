# How do declare variable? 

## Old way
Using `var` - but now it's not recomended (unless you need it) because of it's function scope.
It can be reassing (like `let`)

## New way 
- using `const` - it's constant - you can't reassign it's value (like `let`)

```js
const firstVariable = `Hey I'm first variable`
```

- using `let` - you can reassign it's value to new like below 
```js
let secondVariable = 1
console.log(secondVariable) // 1

secondVariable = 2
console.log(secondVariable) // 2
```