
## Reference Types

Unlike primitive types, reference types include objects such as `arrays`, `objects`, and `functions`. Instead of holding the actual data directly, variables associated with reference types store a reference to the location in memory where the data is stored. This means that when you manipulate an object through one reference, you affect all references to the same object.

```js
let array1 = [1, 2, 3];
let array2 = array1; // array2 now refers to the same array as array1
array2.push(4); // Modifies the array via array2
console.log(array1); // Outputs: [1, 2, 3, 4] - array1 is also affected` 
```
### Comparing Reference Types

When comparing reference types, the comparison checks the memory address rather than the actual data. Two objects containing identical data are considered different if they do not share the same memory address.

```js
[1, 2, 3] === [1, 2, 3]; // Returns false because they are two different memory slots
{} === {}; // Returns false for the same reason` 
```
### Assigning and Copying Reference Types

Assigning a reference type to another variable does not create a new object; instead, it merely copies the reference to the original memory location. Therefore, changes made through either reference are reflected across all references to that object.

```js
const obj1 = { key: 'value' };
const obj2 = obj1; // obj2 and obj1 point to the same object
obj2.newKey = 'newValue'; // Modifying obj2 also modifies obj1
console.log(obj1); // Outputs: { key: 'value', newKey: 'newValue' }` 
```
This behavior underscores the importance of understanding reference types to avoid unintended mutations and side effects, particularly when working with complex data structures or when passing objects between functions.


### Deep and Shallow Copy

To create a new object that is a copy of an existing object but does not share the same reference, you can perform a shallow copy using methods like `Object.assign()` or spread syntax `{...obj}` for objects and `[...arr]` for arrays. However, these methods only copy the object at the first level. Nested objects are still referenced, which is where deep copying techniques or libraries come into play to duplicate every level of the object.