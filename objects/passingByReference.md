
# Passing by Reference in Objects
When you work with objects in JavaScript, you're dealing with references to those objects rather than the actual values themselves. This means that when you assign an object to another variable, both variables point to the same object in memory. Any changes made to the object through one variable are reflected in the other.

```js
const originalObject = { key: 'value' };
const referenceToObject = originalObject;

// Modifying the reference also modifies the original
referenceToObject.key = 'newValue';

console.log(originalObject.key); // Outputs 'newValue'
console.log(referenceToObject.key); // Outputs 'newValue'
```
## Copying Objects
Since objects are passed by reference, to create a new object with the same properties but without linking them, you can use `Object.assign` or the spread operator. These methods perform a shallow copy.

### Using `Object.assign`
`Object.assign` takes a target object and source objects, then copies the properties from the source to the target. It's a shallow copy, meaning if the object has nested objects, those are still passed by reference.

```js
let originalObject = { key: 'value' };
let copiedObject = Object.assign({}, originalObject);

copiedObject.key = 'new value';

// The original object remains unchanged
console.log(originalObject.key); // Outputs 'value'
console.log(copiedObject.key); // Outputs 'new value'
```
### Using the Spread Operator
takes a target object and source objects, then copies the properties from the source to the target. It's a shallow copy, meaning if the object has nested objects, those are still passed by reference.

```js
let originalObject = { key: 'value' };
let copiedObject = { ...originalObject };

copiedObject.key = 'new value';

// The original object remains unchanged
console.log(originalObject.key); // Outputs 'value'
console.log(copiedObject.key); // Outputs 'new value'
```
## Deep Level Copying and Passing References

For deep copying, where you want to duplicate not just the object but also any objects nested within, neither `Object.assign` nor the spread operator suffices, as they only perform shallow copies. For deep copying, you can use other methods, such as JSON serialization or a dedicated deep cloning function.

### Using JSON Serialization:

This method involves converting the object into a JSON string and then parsing that string back into a new object. It's a simple way to deep clone an object but comes with limitations (e.g., it doesn't handle functions, undefined, or circular references). It's important to note that while JSON serialization works for many cases, it may not be suitable for all due to its limitations. For more complex objects, consider using libraries like Lodash's `_.cloneDeep` method for deep cloning.

```js
let originalObject = { key: 'value', nested: { key: 'value' } };
let deepCopiedObject = JSON.parse(JSON.stringify(originalObject));

deepCopiedObject.nested.key = 'new value';

// The original object's nested values remain unchanged
console.log(originalObject.nested.key); // Outputs 'value'
console.log(deepCopiedObject.nested.key); // Outputs 'new value'
```
