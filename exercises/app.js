// This car will only let you drive if you are over 18. Make it do the following:
//using prompt() and alert(), ask a user for their age.

const userAge = parseInt(prompt('What is your age?'));

if (userAge < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (userAge === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}



// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"
