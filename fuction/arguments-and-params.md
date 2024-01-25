# Passing function to function - when params starts to be arguments 

## Example with explain 


```js 
function handleCheckUser(userName, password) { // We pass paramters for function to check user
    for (const element of database) {
        if (userName === element.userName && password === element.password) {
            return true;
        }
    }
    return false;
}

function handleShowFeed(userName, password) {  // We pass paramters for function to show or not feed 
   if(handleCheckUser(userName, password)){  // IMPORTANT - Here we pass handleShowFeed params as arguments for this function. So it's goes back to place when we declare it and pass those arguments to params. 
    console.log(newsfeed)
   } else {
    console.log("Nope")
   }
}

handleShowFeed(userNameInput,userPasswordInput) // Here we pass arguments for final function 

```