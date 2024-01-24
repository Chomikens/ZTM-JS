// Create database object 
// Put there object thath hold username and password
const database = [
    {
        userName:"Dominik",
        password:"strongpass",
        function:"admin"
    },
    {
        userName:"Stefan",
        password:"weakpass",
        function:"user"
    },
]

// Create newsfeed array that hold objects 
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
const userName = prompt("What's your login?")
const userPassword = prompt("What's your password?")
const userType = prompt("Proof you are admin / user")


// Check if username and password is correct 
// Write for it custom function 
function handleCheckUser (user, password, userType) {
    user === database[0].userName 
    && password === database[0].password 
    && userType === database[0].function
        ? console.log(newsfeed[0].userFeed)
        : console.log(newsfeed[1].userFeed)
}

handleCheckUser(userName,userPassword, userType )

