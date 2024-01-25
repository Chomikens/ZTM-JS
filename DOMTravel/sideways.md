# Traversing sideways

There are three ways to traverse sideways:
- nextElementSibling
- previousElementSibling
- Combining [parentElement](https://github.com/Chomikens/ZTM-JS/blob/12-DOMTravel/DOMTravel/upwards.md#parentelement), [children](https://github.com/Chomikens/ZTM-JS/blob/12-DOMTravel/DOMTravel/downwards.md#children), and index


## nextElementSibling
You can select the next element with nextElementSibling.

```html
<ul class="list">
  <li><a href="#">Link 1</a></li>
  <li><a href="#">Link 2</a></li>
  <li><a href="#">Link 3</a></li>
  <li><a href="#">Link 4</a></li>
  <li><a href="#">Link 5</a></li>
</ul>
```

```js
const firstListItem = document.querySelector('li')
const secondListItem = firstListItem.nextElementSibling

console.log(secondListItem)
// <li><a href="#">Link 2</a></li>
```

## previousElementSibling
Likewise, you can select the previous element with previousElementSibling.

```js
const secondListItem = document.querySelectorAll('li')[1]
const firstListItem = secondListItem.previousElementSibling

console.log(firstListItem)
// <li><a href="#">Link 1</a></li>
```