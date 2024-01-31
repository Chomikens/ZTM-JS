# Function defaut values 

Function parametrs can have default values. It can be helpfull when we have property that we want to defined. 
For example function that calculate our income and taxrate. 

## Example 

```js
function calculateTax (income, tax = 0.23) {
    return `Your tax is ${income * tax}`
}

const yourTax = calculateTax(100) // Here in arguments we pass only income, because tax is default
console.log(yourTax)
```

## Example II  - what if after default value is another params? 

```js
function calculateTax (income, tax = 0.23, userName) {
    return `${userName}: your tax is ${income * tax}`
}

const yourTax = calculateTax(100, "Dominik") 
console.log(yourTax) // This will show us: undefined: your tax is NaN
```

### Why this code show us `undefined`: your tax is`NaN`
Because JS count appearance of params and arguments. 
 - `Income` - is correct; 
 - `tax` - is reassing to "Dominik" so we multiply 100 * Dominik - this is NaN (Yes! if we want to change deafulat values we can do it!) 
 - `userName` - is undefined; 

 ### How to fix it? 
 - by passing undefined in argument that matches place of tax 

 ```js
 
const yourTax = calculateTax(100, undefined, "Dominik") 
 
 ```