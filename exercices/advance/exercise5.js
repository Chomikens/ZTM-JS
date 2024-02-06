// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
array.forEach(element => {
  console.log(`${element.username}!`)
})

//Create an array using map that has all the usernames with a "? to each of the usernames
const questionUSername = array.map(element => {
  return`${element.username}?`
})

console.log(questionUSername)

//Filter the array to only include users who are on team: red
const teamRed = array.filter(element => {
  return element.team === "red"
})

console.log(teamRed)

//Find out the total score of all users using reduce

const userScore = array.map(element => element.score).reduce((acc, next) => acc + next)
const userScore2 = array.reduce((acc, next) => acc + next.score,0)

// (1), what is the value of i? // index
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


const copyOfArray = [...array]

function modifyItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].items.length; j++) {
      arr[i].items[j] += "!";
    }
  }
  return arr; // Return the modified array
}

const mod = modifyItems(copyOfArray)
console.log(mod)

const anotherWayArray = array.map(object => {
  object.items = object.items.map(el => {
     return el + "!"
 })
 return object
})
console.log(nanotherWayArray)

