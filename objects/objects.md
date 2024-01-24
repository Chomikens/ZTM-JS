# Object

## Basic syntax 
 It is used to store various keyed collections and more complex entities. It can store all types - also function(which is called methods)

```js
const example = {
   // Key: Value
   name:"Dominik",
   lastName:"Kantorowicz",
   // When u need to use space or make invalid key name use brackets
   ["Invalid key syntax"]: "trolololo",
    // Method first way
    handleSayHi: function () {
        // We talk about this little bit bellow
        this.name === "Dominik" && this.lastName=== "Kantorowicz" 
        ? console.log("Hi Kotorożec!")
        :console.log("Hi User!")
    },

    //Method - shortland (ES6+) 

    handleSayBye() {
        console.log('Bye')
    }
}
```

## How to get value 
You can get object value using two ways: 

- by `.` (dot) notation (you will use it in most cases):

```js
console.log(example.name) // Dominik
console.log(example.handleSayHi()) // Hi Kotorożec!
console.log(example.handleSayBye()) // Bye
``` 

- by brackets notation `[]`. You can use it if name of key is invalid (first example) or when you need to get a value by variable (second example)

```js 

// Invalid key name

console.log(example["Invalid key syntax"])

// get a value by variable
const propertyToGetFromObject = "name"
console.log(example[propertyToGetFromObject]) // Dominik 
```

## How to delete item from object 
Just use method `delete` 

```js
 delete example.name
 console.log(example.name) // undefined - we delete it above

 ```

 ## How to change item value? 

 ```js
 example.name="Kotorożec" // Now our object name will be "Kotorożec"
 ```