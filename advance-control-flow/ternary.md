# Ternary operator 
It's like if statement but shorter. Also can be nestem but don't nest more then two leves. 


## Syntax 
```js
condition 
? expression if true 
: expression if false
```

## Practical example 

```js

// Array of users

const userArray = ["Alice", "Bob", "Charlie"];

/**
 * Retrieves the user's name from an input field in the HTML document.
 * Assumes there is an input element with the class 'input'.
 *
 * @return {string} The value of the input field.
 */

function getUserName(){
    const name = document.querySelector(".input").value // Get a value from input
    return name 
}

/**
 * Checks if the provided name matches any name within the given array.
 *
 * @param {string} name - The name to be validated.
 * @param {string[]} array - An array of valid user names.
 * In the documentation, the notation {string[]} is used to indicate that the parameter array is expected to be an array of strings.
 * @return {boolean} Returns true if the name is found in the array, false otherwise.
 */

function isUserValid(name, array){
    for (let user of array) {
        if(name === user) {
            return true
        }
    }
    return false
}

/**
 * Displays a message to the user based on the validation of their name.
 * Retrieves the user's name using getUserName(), and checks for validity
 * using isUserValid(). Logs a welcome message if the user is valid, 
 * or a login prompt otherwise.
 */
function showFeed () { 
    const name = getUserName()
    isUserValid(name, userArray) 
    ? console.log("Hello user")
    : console.log("Please pass correct login or password")
}



```

## Nesting 
```js
const toy =
  gender === 'boy' // If gender is a boy
    ? birthMonth === 'December' // and he's birthday is on Dec
      ? 'santa hat' // Give him santa hat
      : 'toy car' // but if he;s boy born in Februrary for example give him toy car
    : birthMonth === 'December' // If she is a girl born in Dec
    ? 'candy cane' // give her candt cane
    : 'doll' // Otherwise give her doll 
```