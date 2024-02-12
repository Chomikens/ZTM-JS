# Object: values and entries 

## Example to work with 

```js
const exampleObject = {
    userName0: "Name",
    userName1: "Name1",
    userName2: "Name2",
}
```

## Before ES 8 - Object keys 
The `Object.keys()` method returns an array containing the names of all enumerable properties of an object.
`Returns`: An array of strings representing the keys of the provided object.

### Syntax
```js
Object.keys(obj)
```

### Example 
```js
Object.keys(exampleObject).forEach(key => {
    console.log(`This is a key: ${key} so we use brackets notation to get values:`, exampleObject[key])
})
```


## Object values 
The `Object.values()` method returns an array containing the values of all enumerable properties of an object.
`Returns:` An array containing the values of the provided object.


```js
Object.values(exampleObject).forEach(value => console.log("Just use value:" ,value))
```

## Object entries 
The `Object.entries()` method returns an array containing arrays of key-value pairs of all enumerable properties of an object.
`Returns:` An array of arrays, where each inner array contains a key-value pair.


### Example 
```js
Object.entries(exampleObject) 

/* Output: [
    [ 'userName0', 'Name' ]
    [ 'userName1', 'Name1' ]
    [ 'userName2', 'Name2' ]
 ] 
 */ 

const namesOfUsers = Object.entries(exampleObject).map(el => return el[1])

```