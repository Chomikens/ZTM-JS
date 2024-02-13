// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:

const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  if (!arr.length) return 0
  let higher = 0;
      for (let number = 0; number < arr.length; number++) {
        if (arr[number > higher]) {
          higher =arr[number]
        }
      }
  return higher
}

function biggestNumberInArray2(arr) {
  if (!arr.length) return 0
  let higher = 0;
      arr.forEach(el => {
       el > higher ? higher = el : ""
      })
  console.log(higher) 
}

function biggestNumberInArray3(arr) {
  if (!arr.length) return 0
  let higher = 0;

  for (item of array) {
    item > higher ? higher = item : ""
  }
  console.log(higher) 

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not

amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}


function checkBasket(basket, lookingFor) {
  for (key in basket ) {
    if(lookingFor === key && basket[key] > 0) {
        return `${key} is in basket and remain ${basket[key]}`
    }
  }
  return false
}


const glasses = checkBasket(amazonBasket, "glasses")
console.log(glasses)