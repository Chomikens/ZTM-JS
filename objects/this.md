# This in objects 

Short def: 
This is the object that the function is a property of

## Usage
We can also use this to execute same code for multiple objects

```js


function logName() {
    console.log(this.name)
}
const name = "Kotorożec"


const firstObj = {
    name:"Dominik",
    logName:logName,
}

const secondObj = {
    name:"Lalala",
    logName:logName,
}

firstObj.logName() // Dominik 
secondObj.logName() // Lalala

logName() // Kotorożec - global variable. But here is a twist: However, in strict mode, the value of this remains undefined in functions that are called in such a manner. If you're not in strict mode, this does indeed refer to the global object, 

// Second twist: 
//: When you declare a variable with const, let, or class at the top level (outside of any function, block, or module), it does not create a property on the global object. Instead, it creates a variable in the global lexical environment which is not accessible via the this keyword.

// So, when you declare const name = "Kotorożec", you're not actually setting a property on the global object. As a result, this.name within logName (when called as a standalone function and assuming this refers to the global object like in non-strict mode or in a browser environment) doesn't refer to the name you've defined with const.

// If you wanted name to be a property of the global object, you'd have to explicitly set it as such:
window.name = "Kotorożec"; // In a browser environment
// or
global.name = "Kotorożec"; // In a Node.js environment

```

In JavaScript, the this keyword is a special variable that refers to the current context or object within which it is used. Its behavior can sometimes be a bit tricky to grasp, as it depends on how and where it is employed. Here are some important points to understand about this:

 ### "this" in object methods:
When you use this inside an object method (a function that is a property of an object), it refers to the object itself. In our example, we have one methods, handleSayHi, where we use `this` - more about [this](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/this.md)
 ```js
 const example = {
  //... 
    handleSayHi: function () {
        this.name === "Dominik" && this.lastName === "Kantorowicz" 
        ? console.log("Hi Kotorożec!")
        : console.log("Hi User!")
    },
}

 ```

 In the handleSayHi method, this refers to the example object. This allows you to access the object's properties like name and lastName.

 ### "this" in nested object:

 ```js
const outer = {
    name: "Outer",
    inner: {
        name: "Inner",
        logName: function () {
            console.log(this.name); // will refer to inner name
        }
    }
};

outer.inner.logName(); // "Inner"

 ```

 #### So how to refer to "Outer?" from example? 
 Use `arrow function` . If you want to ensure that this inside a nested object's method refers to a specific context, such as the outer object, you can use arrow functions. Arrow functions don't have their own this context and instead inherit it from the surrounding code. 

 ```js
 const outer = {
    name: "Outer",
    inner: {
        name: "Inner",
        logName: () => {
            console.log(this.name);
        }
    }
};

outer.inner.logName(); // "Outer"

 ```
