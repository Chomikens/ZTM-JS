
# Combining Optional Chaining (`?.`) and Nullish Coalescing (`??`)

When working with deeply nested objects, there might be instances where not only the existence of nested properties is uncertain, but you also want to provide a default value in case the final target or any part of the chain is `null` or `undefined`. Combining `?.` and `??` allows you to safely navigate through the objects and set defaults efficiently.

## Syntax and Use

The general approach is to first use optional chaining to safely access properties or call functions within an object structure, and then use nullish coalescing to provide a default value if the result of the optional chaining is `null` or `undefined`.

```js
const result = obj?.prop?.nestedProp ?? defaultValue;
```

## Detailed Example

Consider an object `user` that may or may not have an `address` property, and even if it does, the `zip` code may not be set. You want to safely access `user.address.zip` and provide a default value if it's not found.

```js
const user = {
  name: 'Jane Doe',
  address: {
    street: '123 Main St',
    // Note: 'zip' is intentionally omitted
  }
};

const zipCode = user.address?.zip ?? '00000'; // Provides a default zip code
console.log(zipCode); // "00000"
```

In this example, `user.address?.zip` attempts to access `zip` within `address`. If `address` is `undefined` or `zip` is not present, the expression will result in `undefined`, triggering the nullish coalescing operator to return the default value `'00000'`.

## Benefits

-   **Safety and Readability:** This pattern allows for safe access and manipulation of object properties without verbose and complex error handling.
-   **Simplicity:** It simplifies the code by reducing the need for multiple conditional statements to check for the existence of each property in the chain.
-   **Default Values:** It provides a straightforward way to define default values for potentially undefined properties, making the code more resilient and predictable.
