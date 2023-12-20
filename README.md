# Essential Javascript Concepts for React

These are the concepts covered in this roadmap:

- Destructuring: an assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
- Rest / Spread operator: Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.
- The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy
- An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage: Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods
- Short-circuit evaluation occurs when using logical operators like `&&` (AND) and `||` (OR). Let's take a closer look at each of these operators. The logical AND operator (`&&`) returns `true` if both of its operands are `true`, and it returns `false` if at least one of them is `false`.
  Optional chaining lives up to its name. In the chain of object property access we can check that each value is not undefined or null. This check can be extremely useful when accessing deeply nested object values. It has been a highly anticipated feature and it keeps you from having to do numerous null checks.
- Array.prototype.map() The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array
- The filter() method is an ES6 method that provides a cleaner syntax to filter through an array. It returns new elements in a new array without altering the original array
- The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator
- The sort() sorts the elements of an array. The sort() overwrites the original array. The sort() sorts the elements as strings in alphabetical and ascending order
- Working with Immutable arrays: This is a technique used to update, add, or delete elements of an array without changing the original array
- A Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed
- The async function declaration creates a binding of a new async function to a given name. The await keyword is permitted within the function body, enabling asynchronous, promise-based behavior to be written in a cleaner style and avoiding the need to explicitly configure promise chains
