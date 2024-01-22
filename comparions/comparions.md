# Javascript comparions 

- `===` (**Strict equal** - check if value and [type](https://github.com/Chomikens/ZTM-JS/blob/1-types/types/types.md) are equal)
```js
const firstNum = 5
const secondNum = "5"
firstNum === secondNum // false 
```
- `==` (**Loose equal** - check if value are equal)
```js
const firstNum = 5
const secondNum = "5"
firstNum == secondNum // true
```
- `!===` (**Strict unequal** - check if value  and type are **not** equal)
 ```js
const firstNum = 5
const secondNum = 4
console.log(firstNum !== secondNum) // true -it's not eqal. Type is equal but value not
```
- `!==` (**Loose unequal** - check if value are unequal)
 ```js
const firstNum = 5
const secondNum = "4"
console.log(firstNum !== secondNum) // true -it's not equal. Value is unequal.
```

- `>`(greater then - only focus on values )
- `<` (smaller then - only focus on values )
- `<=` (greater or qual - only focus on values )
- `>=` (smaller or equal - only focus on values )