# Comments

- Do not add any comments to the code. Do not add JSDoc or JavaDoc comments either.

# Error handling

- When an error occurs, raise an exception. Do not return errors as a return value. Do not wrap return values into objects like `Either` or `Result`. A function's return type must only represent the happy-day scenario (successful completion).
- Prefer early returns to reduce the level of nesting, for example:

```js
// Instead of
function getConfig(file: string) {
  const json = loadFile(path);
    if (!document) {
      return undefined;
    }
    const config = JSON.parse(document)
    if (!config) {
      return undefined;
    }
    return new Config(config);
}
```

# Functional chaining

- Prefer functional chaining methods (like `filter`, `map`, `flatMap`, `reduce`) over `for` loops and `if-else` conditions.
- Do not use the chaining operations like `.then()` and `.error()` for promises. Instead, use `await` and `try-catch`.

# Immutability

- Always use immutable/read-only data structures.
- If the language supports it, explicitly mark all properties/attributes in interfaces, type definitions and classes as read-only.
- Use read-only containers like read-only arrays, read-only sets and read-only maps whenever possible.
- Declare variables and parameters as read-only (e.g. `const` in JavaScript or `final` in Java).
- Functions must not receive mutable containers (like arrays, sets and maps) as parameters. If possible, avoid mutable containers altogether. If that makes the code too complex, at least keep mutable containers confined to the function in which they are defined. For example:

```js
// bad pattern: pass a mutable container to another function
function main() {
  const myArray = [1, 2, 3]; // not great: mutable container
  addMore(myArray); // bad: pass mutable container to another function
}
function addMore(array: number[]) { // bad: receive mutable container
  array.push(4, 5, 6); // bad: modify mutable container
}

// good pattern: avoid mutable containers altogether
function main() {
  const array1 = [1, 2, 3] as const; // good: immutable container
  const array2 = withMore(array1); // good: pass only immutable containers
}
function withMore(array: readonly number[]) { // good: receive only immutable containers
    return [...array, 4, 5, 6] as const; // good: return only immutable containers
}

// acceptable pattern: mutate containers only in the function where they are defined
function main() {
  const myArray = [1, 2, 3]; // acceptable: mutable container that's only used in this function
  addMore().forEach(value => myArray.push(value)); // acceptable: mutate container only in the function where it's defined
}
function getMore() { // good: don't receive mutable containers
  return [4, 5, 6] as const; // good: return only immutable containers
}
```

# Readability

- Split code into functions that are as small as possible to increase their readability and re-usability.

- Keep the nesting of blocks (`for` loops, `if-else` blocks and nested (arrow) functions) as shallow as possible. Try to move nested code into separate top-level functions to reduce the nesting/complexity of the parent function.

- Group functions with the same purpose into one file, and create separate files for functions with different purposes.
- Sort functions in the order in which they are called (so that the file can be read sequentially, in the same order as the code executes). The main function belongs to the top of the file, and utility functions to the bottom.

# Statelessness

- Avoid global variables (except for immutable constants).
- Avoid using classes. Whenever supported by the programming language, use plain data objects (like object literals in JavaScript).
- In TypeScript, consider creating a `namespace` or an object literal instead of a singleton class.

# Short functions and shallow nesting

- Write short functions (ideally, 10 lines of code or less). Split more complex logic into smaller functions.
- Avoid deep nesting of `if` conditions and loops. Ideally, nest only one or two levels deep. Move nested code that requires deeper nesting into its own function.
- Avoid defining complex arrow functions with multiple lines of code inside function calls. Instead, create a separate named function and pass it as parameter, for example:

```ts
// short arrow functions that fit into one or two lines should be defined inline:
myArray.forEach(value => console.log(value));

// avoid nesting arrow functions with multiple lines:
myArray.forEach(value => {
  // multiple lines of code
});

// instead, create a stand-alone function:
myArray.forEach(value => doSomething(value));
function doSomething(value: number) {
  // multiple lines of code
}
```

