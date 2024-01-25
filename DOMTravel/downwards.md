# Traversing downwards

There are three ways to traverse downwards:
 - querySelector or querySelectorAll
 - children
 - firstElementChild

## querySelector or querySelectorAll 

```html
<div class="component">
  <h2 class="component__title">Component title</h2>
</div>
```

```js
const component = document.querySelector('.component')
const title = component.querySelector('.component__title') // Here we grab it from component abouve

console.log(title) // <h2 class="component__title"> ... </h2>
```

## children 
children is a property that lets you select direct descendants (elements that are immediately nested in another element). It returns a [HTML Collection](https://github.com/Chomikens/ZTM-JS/blob/10-domSelectors/DOMselectors/selectors.md#html-collection) that updates when children elements are changed.


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
const list = document.querySelector('.list')
const listItems = list.children 

console.log(listItems)
```

## firstElementChild / children[index]
```js
const list = document.querySelector('.list')
const firstItem = list.firstElementChild // Grab first child 
constSecond = list.children[1]

```