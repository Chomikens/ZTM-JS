# JavaScript Learning Notes

## Start
- [Where to put JS?](https://github.com/Chomikens/ZTM-JS/blob/0-WhereToPutJS/Where-to-put-JS/index.html)

## JS Engine
- [JS Engine - intro](https://github.com/Chomikens/ZTM-JS/blob/0a-js-engine/js-engine.md#js-engine)
- [Interpreters and Compilers](https://github.com/Chomikens/ZTM-JS/blob/0a-js-engine/interpreters-and-compilers.md#interpreters-and-compilers)
  - [JIT Compilers](https://github.com/Chomikens/ZTM-JS/blob/0a-js-engine/jit-compiler.md#just-in-time-jit-compiler-explained)
- [CallStack](https://github.com/Chomikens/ZTM-JS/blob/0a-js-engine/callstack.md#the-call-stack-in-javascript)
  -[Stack overflow](https://github.com/Chomikens/ZTM-JS/blob/0a-js-engine/callstack.md#the-call-stack-in-javascript)
- [How to write optimised code for engine](https://github.com/Chomikens/ZTM-JS/blob/0b-optimised-code/how-to-write-optimised-code.md#how-to-write-optimiesed-code)

## Fundamentals

### Variables
- [Variables](https://github.com/Chomikens/ZTM-JS/blob/3-variables/variables/variables.md)

### Data Types: Primitives
- [Primitives types](https://github.com/Chomikens/ZTM-JS/blob/1-types/types/types.md)
- [ES10: String - trimStart(), trimEnd()](https://github.com/Chomikens/ZTM-JS/blob/1-types/types/trimmingStrings.md#trimming-strings)

### Logic
#### Basic
- [Comparisons](https://github.com/Chomikens/ZTM-JS/blob/2-compations/comparions/comparions.md)
- [Control flow](https://github.com/Chomikens/ZTM-JS/tree/4-controlFlow/control-flow)
- [Operators](https://github.com/Chomikens/ZTM-JS/blob/5-logicalOperators/logical-operators.md)

#### Advanced: Control flow
- [Ternary operator](https://github.com/Chomikens/ZTM-JS/blob/4b-adv-controlFlow/advance-control-flow/ternary.md#ternary-operator)
- [Switch](https://github.com/Chomikens/ZTM-JS/blob/4b-adv-controlFlow/advance-control-flow/switch.md#switch)

### Functions
#### Basic
- [Declaring](https://github.com/Chomikens/ZTM-JS/blob/6-function/fuction/function.md)
- [Default values](https://github.com/Chomikens/ZTM-JS/blob/6b-default-values/function-default-values.md#function-defaut-values)
- [Passing params as argument](https://github.com/Chomikens/ZTM-JS/blob/6-function/fuction/arguments-and-params.md)
- [Scope](https://github.com/Chomikens/ZTM-JS/blob/15-scope/scope/scope.md#scope)

#### Advanced
- [Callback and async code - basic](https://github.com/Chomikens/ZTM-JS/blob/6-function/fuction/callbacks.md)
- [Closure](https://github.com/Chomikens/ZTM-JS/blob/6-function/fuction/closure.md)
- [Curring](https://github.com/Chomikens/ZTM-JS/blob/6-function/fuction/curring.md)
- [Compose](https://github.com/Chomikens/ZTM-JS/blob/6-function/fuction/compose.md)

### Loops
- [For, For in, For of, While, Do while](https://github.com/Chomikens/ZTM-JS/blob/9-loops/loops.md)
- [Return in loops](https://github.com/Chomikens/ZTM-JS/blob/9-loops/loops-tips.md#return-in-loops) vs. [Return in forEach](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysHigherOrderFunction.md#important---return-in-foreach)

## Data Structures

### Data Types: Advanced
#### Arrays - basic
- [Arrays](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arrays.md)
- [Intro methods](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysMethodsIntro.md)
- [Mutable Methods](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysMethodsMutable.md)
- [Immutable Methods](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysMethodsUnmutable.md)
- [Looping](https://github.com/Chomikens/ZTM-JS/blob/9-loops/loops.md)

#### Arrays - advanced
- [Advance: Higher-Order Methods: forEach, map, filter...](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysHigherOrderFunction.md)
  - [Return in forEach](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysHigherOrderFunction.md#important---return-in-foreach)
  - [#ES7: Includes method](https://github.com/Chomikens/ZTM-JS/blob/7-arrays/arrays/arraysHigherOrderFunction.md#includes---es-7)

#### Object - basic
- [Object - basics](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/objects.md)

#### Object - advanced
- [`This` in object](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/this.md)
- [Instantation:Class, Extends and Super. Prototype Inheritance](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/instantation.md#instantation)
- [Destructuring](https://github.com/Chomikens/ZTM-JS/blob/8b-destr/object-destucturing.md#destucturing)
- [Passing by reference](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/passingByReference.md#passing-by-reference-in-objects)
- [#ES8: Object entries & Object values](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/es8-object-values.md#object-values-and-entries)
- [#ES10: Object fromEntries](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/es10-object-from-entries.md#creating-objects-from-entries)
- [#ES2020: optional chaining](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/optional-chaining.md#optional-chaining-operator-)
- [#ES2020: nullish coalescing - intro](https://github.com/Chomikens/ZTM-JS/blob/5-logicalOperators/logical-operators.md#nullish-coalescing-operator-)
- [#ES2020: Combining Optional Chaining and Nullish Coalescing](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/nullish-coalescing.md#combining-optional-chaining--and-nullish-coalescing-)

#### Reference Types
 - [Reference types](https://github.com/Chomikens/ZTM-JS/blob/8-objects/objects/reference-types.md)

## DOM Manipulation

### Introduction
- [HTML Collection vs Node List](https://github.com/Chomikens/ZTM-JS/blob/10-domSelectors/DOMselectors/selectors.md)
- [DOM Selectors](https://github.com/Chomikens/ZTM-JS/blob/10a-selectors/selectors/selectors.md)
- [Introduction to attributes](https://github.com/Chomikens/ZTM-JS/blob/10b-atributes/attributes/attributes.md#introduction-do-attributes)
- [DOM attributes](https://github.com/Chomikens/ZTM-JS/blob/10b-atributes/attributes/attributes.md#getsetremove-attributes-from-dom)

### Styling in JS
- [inline](https://github.com/Chomikens/ZTM-JS/blob/11-stylingJS/styling/styling-inline.md) vs [classes](https://github.com/Chomikens/ZTM-JS/blob/11-stylingJS/styling/styling-using-classes.md)

### DOM Travels
- [Downwards](https://github.com/Chomikens/ZTM-JS/blob/12-DOMTravel/DOMTravel/downwards.md)
- [Upwards](https://github.com/Chomikens/ZTM-JS/blob/12-DOMTravel/DOMTravel/upwards.md)
- [Sideways](https://github.com/Chomikens/ZTM-JS/blob/12-DOMTravel/DOMTravel/sideways.md)

### Events
#### Basic
- [Events intro](https://github.com/Chomikens/ZTM-JS/blob/13-events/events/intro.md)
- [Default Behaviors](https://github.com/Chomikens/ZTM-JS/blob/13-events/events/default-behaviors.md)

#### Advanced
- [Event propagation](https://github.com/Chomikens/ZTM-JS/blob/13-events/events/event-propagation.md)
- [Event delegation](https://github.com/Chomikens/ZTM-JS/blob/13-events/events/event-delegation.md)
- [The event loop](https://github.com/Chomikens/ZTM-JS/blob/13-events/events/event-loop.md)

### Manipulating text and content
- [Changing Text and HTML](https://github.com/Chomikens/ZTM-JS/blob/14-DOMchange/changing-DOM/changeHTMLAndContent.md#changing-text-and-html)
- [Creating HTML Elements](https://github.com/Chomikens/ZTM-JS/blob/14-DOMchange/changing-DOM/createElement.md#creating-html-elements)
  - [Adding multiple elements to the DOM](https://github.com/Chomikens/ZTM-JS/blob/14-DOMchange/changing-DOM/addMultipleElements.md#adding-multiple-elements-to-the-dom)
- [Removing Elements from the DOM](https://github.com/Chomikens/ZTM-JS/blob/14-DOMchange/changing-DOM/removeElement.md#removing-elements-from-the-dom)

## Projects and Exercises

### Exercises
- [Logic](https://github.com/Chomikens/ZTM-JS/blob/2a-exerci/exercise-first/app-solutions.js)
- [Control flow](https://github.com/Chomikens/ZTM-JS/blob/4a-exercise/exercises/app.js)
- [Functions](https://github.com/Chomikens/ZTM-JS/blob/6a-exercise/exercise/app.js)
- [Arrays methods](https://github.com/Chomikens/ZTM-JS/blob/7a-exercises/exercices/advance/exercise5.js)
- [Object and arrays](https://github.com/Chomikens/ZTM-JS/blob/8a-exercises/exercise/app.js)
- [Objects: advance](https://github.com/Chomikens/ZTM-JS/blob/8a-exercises/exercise/advance-objects/app.js)
- [Advance loops](https://github.com/Chomikens/ZTM-JS/blob/9a-loops-exerc/advanced-looping-exercise.js)
- [JavaScript logic](https://github.com/Chomikens/ZTM-JS/blob/7a-exercises/exercices/advance/findsum.js)

### Projects
- [Objects and arrays - facebook](https://github.com/Chomikens/ZTM-JS/tree/8b-project/project)
- [To do list - event delegation](https://github.com/Chomikens/ZTM-JS-DOM-Challange/blob/main/app.js)
