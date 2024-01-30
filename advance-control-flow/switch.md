# Switch 

## How it works? 

### Example

```js

/**
 * @param {string} direction - allow user to define direction 
 * @return {string} whatHappens - return string 
 */


// Here JS see we declare function but not call it. So it goes down and serach calling func - it find in in line 38. 
function moveCommand(direction) {
    // We declare let because user can reassign it multiple times!
    let whatHappens 

    switch(direction) { // Here is check if direction is equal to "forward"
        case "forward":
            whatHappens = "You encounter monster" // When true it reeasign variable to this string
            break // and here we break loop.
        case "left":
            whatHappens = "You find gold chest"
            break
        case "right":
            whatHappens = "You die!"
            break
        case "backward":
            whatHappens = "You coward! Run forward and fight!"
            break
        default: // What if user dont pass any argument or pass another to func? It will show default behawior:
             whatHappens = "Please insert direction to play a game"
             }

    return whatHappens;
}
   
    moveCommand("forward") /
```