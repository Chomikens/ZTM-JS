/* 
Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together, give the target number. 
For example: answer([1,2,3], 4)should return [1,3]
*/

function findSum (array, target) {
    let pairs = []
    for (let i= 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) { 
            if (array[i] + array[j] === target) {
                pairs.push([array[i], array[j]]); 
           
            }
        }
    }
    return pairs
}

const pairs = findSum([1, 2, 3, 4], 5);
console.log(pairs); 