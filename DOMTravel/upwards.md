# Traversing upwards

There are two ways to traverse upwards:
 - parentElement
 - closest


## parentElement 
parentElement is a property that lets you select the parent element. The parent element is the element that encloses the current element. In the following HTML, .list is the parent element of all <li>. Each <li> is the parent element of their respective <a>.

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
const list = firstListItem.parentElement

console.log(list)
```

## closest() 
closest lets you select the closest ancestor element that matches a selector. 
**closest starts searching from the current element**, then proceeds upwards until it reaches the document. It stops and returns the first element it finds. 

**It not search nested elements**

```js
const firstLink = document.querySelector('a')
const firstLinkThroughClosest = firstLink.closest('li')

console.log(firstLinkThroughClosest)
```