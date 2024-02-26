
# Hoisting: A Simple Guide

Imagine you're reading a book where some characters are introduced at the very beginning, even before the story starts. This way, you know who they are and what they're about as soon as you encounter them in the story. In the world of JavaScript, a similar concept called "hoisting" happens, but with functions and variables.

## What is Hoisting?

Hoisting is like the JavaScript engine's way of organizing a script. Before the script starts running line by line, JavaScript "moves" function declarations and certain variables to the top of their environment. This means you can use functions and variables before you've seen them declared in the code.

### A Real-life Example:

```javascript
console.log(sing()); // This works!
function sing() {
    console.log("lalala");
}
```

In this example, even though the `sing` function is called before it's defined, JavaScript knows about it because of hoisting. It's as if the function declaration is moved to the top, making it available everywhere in its scope.

### Variable Hoisting: A Special Case

When it comes to variables declared with `var`, hoisting partially applies. The variable name is moved to the top, but its value isn't set until the code reaches the declaration.

### Another Example to Illustrate:

```javascript
a(); // Outputs: "Bye"
function a() {
    console.log("Hi");
}
a(); // Still outputs: "Bye"
function a() {
    console.log("Bye");
}
a(); // Again, outputs: "Bye"
```

In this scenario, calling the function `a()` before and after its declaration outputs "Bye". This is because the last declaration of function `a()` overrides the previous ones. It's as if JavaScript updates its memory with the latest information about function `a()` each time it encounters a new declaration.
