# JavaScript - types 

## Basic types 
 - String 
 ``` js 
const string = `Hey I'am string type`
const singleString = 'Hey I\'am string type'
const doubleString = "Hey I'am string type"
```
 - Number 
```js
const number = 2
```
- Boolean (used to defined `true` or `false`).We have also **falsey** and **truthy** values
```js
const booleanTypeTrue = true 
const booleanType Fale= false
// Falsey values: 
const falseyFisrt = 0; 
const falseySecond = null;
const falseyThird = "";
const falseyForth = undefined;
const falseyFifth = NaN
const 
```
- Null (used when you want a value to have "0")
```js
const nullType = null
```
- Undefined (used when variabe is not defined) 
```js
const a; 
console.log(a) // undefined
```

- Symbol 
 Symbol value is unique, and when you create a new symbol, it does not equal any other symbol. So, while symbols are passed by value, the value being passed is a unique identifier that doesn't match any other symbol. By they pass by value not by refference 
```js
const sym1 = Symbol("foo")
const sym2 = Symbol("foo")

console.log(sym1 === sym2) // false 
``` 

- BigInt (used to store big numbers)
```js
const alsoHuge = BigInt(9007199254740991);
```

## Advence types  

- Object:
 - [Objects](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/objects.md)
 - [Arrays](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arrays.md)

## Check type of variable 
To check type use `typeof`
```js
const alsoHuge = BigInt(9007199254740991); 
console.log(typeof alsoHuge) 
// biginit
```