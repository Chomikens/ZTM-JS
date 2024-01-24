# Loops Tips 

## Return in loops 

Using `for`, `for of` `do loop`or `do while` - we can stop function runnig in oposite to [forEach](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysHigherOrderFunction.md#foreach) method.

```js
function handleCheckUser(userName, password) {
    for (const element of database) {
        if (userName === element.userName && password === element.password) {
            return true; // If it find it it will return true
        }
    }
    return false; // Otherwise it return false
}
```

