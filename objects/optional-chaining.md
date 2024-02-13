
# Optional Chaining Operator (`?.`)

The Optional Chaining Operator (`?.`) allows you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid. The `?.` operator is like the `.`, except that instead of causing an error if a reference is nullish (`null` or `undefined`), the expression short-circuits with a return value of `undefined`.

## Syntax

```javascript
obj?.prop       // Accessing a property
obj?.[expr]     // Accessing a property through an expression
func?.(args)    // Calling a function if it exists` 
```
## Example

```javascript

const person = {
  name: 'John',
  address: {
    street: 'Main St',
    city: 'Anywhere'
  }
};

const streetName = person.address?.street;
console.log(streetName); // "Main St"` 
```

If `address` was not part of `person`, `person.address?.street` would return `undefined` instead of throwing an error.

## Use Cases

-   Safely accessing nested object properties
-   Optional function calls
-   Conditional property access in arrays and objects