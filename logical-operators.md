# Logical operators 

## And operator `&&`

The && operator evaluates each operand (statement) for a boolean value (true or false).
- If the first operand is false, it returns that operand without evaluating the second operand. This is known as short-circuit evaluation.
- If the first operand is true, it then evaluates and returns the second operand.
- The return value can be true, false, or even a non-boolean value if used in a non-boolean context.
- In practice, the && operator returns the first falsy value it encounters, or the last value if all are truthy.

Helpfull:
- chaining conditions 
```js
if (username === storedUsername && password === storedPassword)
```

## OR operator `||`

The || operator evaluates each operand (statement) for a boolean value (true or false).
- If the first operand is true, it returns that operand without evaluating the second operand. This is known as short-circuit evaluation.
- If the first operand is false, it then evaluates and returns the second operand.
- The return value can be true, false, or even a non-boolean value if used in a non-boolean context.
- In a practical sense, the || operator returns the first truthy value it encounters, or the last value if all are falsy.

Helpfull:
- default values 
```js
const fullName = firstName || 'Guest'
```

## Nullish Coalescing Operator (`??`)
The Nullish Coalescing Operator (`??`) is a logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. This is useful for assigning default values.


### Syntax

```javascript
leftExpr ?? rightExpr` 
```
### Example

```javascript
const nullValue = null;
const undefinedValue = undefined;
const text = ''; // Empty string is considered a valid value
const defaultValue = 'Default';

console.log(nullValue ?? defaultValue); // "Default"
console.log(undefinedValue ?? defaultValue); // "Default"
console.log(text ?? defaultValue); // ""` 
```
### Use Cases

-   Setting default values for variables that might be `null` or `undefined`
-   Working with potentially missing data without resorting to OR `||` operator which considers any falsy value (e.g., `0`, `''`, `false`) as default trigger

## Not `!`
The ! operator is a unary operator that takes a single operand and inverts its boolean value.
- If the operand is true, the ! operator returns false.
- If the operand is false, the ! operator returns true.
- Essentially, it converts truthy values to false and falsy values to true.

Helpfull: 
- event delegation pattern, 
- early returns

