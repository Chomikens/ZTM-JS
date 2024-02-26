
In JavaScript, the execution context for a piece of code (like a function or the global code) goes through two main phases: the **creation phase** and the **execution phase**. Let's break these down a bit for clarity:

### 1. Creation Phase

During the creation phase, before the code is actually executed line by line, JavaScript does a few important things:

-   **Hoisting:** This is where the JavaScript engine "moves" declarations of functions and variables (declared with `var`) to the top of their respective scopes. For functions, the entire function definition is hoisted, meaning you can call a function before its declaration in the code. For variables declared with `var`, only the name is hoisted, and they are initialized with `undefined` until the code execution reaches their actual declaration where they are assigned a value.
    
-   **Scope Chain Establishment:** The engine figures out the scope chain for the variables, which determines the accessibility of variables based on where they are declared.
    
-   **`this` Keyword Setup:** The value of the `this` keyword is determined.
    

### 2. Execution Phase

After the creation phase, the execution phase begins. This is where the JavaScript engine executes the code line by line. Now, thanks to hoisting, all function declarations and variables declared with `var` are already known and accessible within their scope, even before the code that declares them is actually executed.

In summary, yes, hoisting occurs during the creation phase of the execution context, setting the stage for a smooth execution phase where functions and variables are already known to the JavaScript engine.


```js

//Variable Environement
function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; // 3. this variable will be put into the new execution context. It's own variable environment
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
console.log(one()) // 2. New execution context is created on top of the stack.
```