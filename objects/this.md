# This in objects 

 In JavaScript, the this keyword is a special variable that refers to the current context or object within which it is used. Its behavior can sometimes be a bit tricky to grasp, as it depends on how and where it is employed. Here are some important points to understand about this:

 ### "this" in object methods:
When you use this inside an object method (a function that is a property of an object), it refers to the object itself. In our example, we have one methods, handleSayHi, where we use `this` - more about [this]()
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
