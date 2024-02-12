# Trimming strings

In JavaScript, you can use the `trimStart()` and `trimEnd()` methods to remove whitespace characters from the beginning and end of a string, respectively. This can be useful when dealing with user inputs or when manipulating strings retrieved from external sources where extra spaces might be present.

## Syntax

```js
const email1 = '    kotorozec@gmail.com';
const email2 = 'kotorozec@gmail.com      ';

email1.trimStart(); // Output: "kotorozec@gmail.com"
email2.trimEnd();   // Output: "kotorozec@gmail.com"
```

## Usage

-   `trimStart()`: Removes whitespace characters from the beginning of a string.
-   `trimEnd()`: Removes whitespace characters from the end of a string.

These methods do not modify the original string but instead return a new string with the leading or trailing whitespace removed.

It's important to note that these methods only remove whitespace characters such as spaces, tabs, and line breaks. They do not remove other non-printable characters.
