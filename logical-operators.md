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

## Not `!`
The ! operator is a unary operator that takes a single operand and inverts its boolean value.
- If the operand is true, the ! operator returns false.
- If the operand is false, the ! operator returns true.
- Essentially, it converts truthy values to false and falsy values to true.

Helpfull: 
- event delegation pattern, 
- early returns

