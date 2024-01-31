# Destucturing 

To access object properties we can use `dot notion` or `bracket notation`. [See more](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/objects.md#how-to-get-value)
But what if we want to short it and make it more readable? 

## Example 

```js 
const simpleObject = {
    name:"Dominik",
    nickName:"Kotorozec"
    secondNickname: "Ziemniaki i Mastodonty",
}

// Get values without destucturing  : 

const firstName = simpleObject.name 

// With Destucturing 

const {name, nickName} = simpleObject 
console.log(name)
```