# Creating Objects from Entries

In JavaScript, the `Object.fromEntries()` method is used to transform a list of key-value pairs into an object. This can be particularly useful when you have an array of entries and you want to convert it into an object.

## Syntax

```js
const entries = [
    ["name", "Dominik"],
    ["nickname", "kotorozec"],
    ["age", 13]
];

const objFrom = Object.fromEntries(entries);

console.log(objFrom); // Output: { name: "Dominik", nickname: "kotorozec", age: 13 }
```