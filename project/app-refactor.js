// Create database object 
// Put there object thath hold username and password
const database = [
    {
        userName:"Dominik",
        password:"strongpass",
    },
    {
        userName:"Stefan",
        password:"weakpass",
    },
    {
        userName:"Ingrid",
        password:"Das is toll",
    },
]

const newsfeed = [
    {
    userName:"Dominik",
    userFeed:"Hey I'am admin - welcome do feed",
    }, 
    {
    userName:"User",
    userFeed:"Hey I'am user - welcome do feed"
    },
]

// Build form (use here prompt for now) that hold username and password
const userNameInput = prompt("What's your login?")
const userPasswordInput = prompt("What's your password?")


// Check if username and password is correct 
// Write for it custom function 

function handleCheckUser(userName, password) {
    for (const element of database) {
        if (userName === element.userName && password === element.password) {
            return true;
        }
    }
    return false;
}

function handleShowFeed(userName, password) {
   if(handleCheckUser(userName, password)){
    console.log(newsfeed)
   } else {
    console.log("Nope")
   }
}

handleShowFeed(userNameInput,userPasswordInput)