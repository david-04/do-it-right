# File naming conventions

- All source files and directories other than React components must have kebab-case names (e.g. `src/db-tools/load-customer.js`).
- React components must have PascalCase names (e.g. `src/components/MyComponent.jsx`).

# Import/export

- Export items (like variables, functions, types, classes, interfaces, namespaces) right where they are defined, e.g.:

```js
export const MY_CONSTANT = "value";
export function myFunction() { };
export class MyClass { ... };
```

- Do not create separate `export` statements that export items that were defined earlier.
- Do not export or import items under different alias names. Each item should be referenced by its original name across the whole code base.
- Do not create barrel files (like `index.js`) that re-export items. Each module must import items from right where they are defined.
- If the project uses ECMAScript modules (esm), always import local files/relative paths with the file extension `.js` or `.jsx` (e.g. `import "./my-file.js"`). By default, assume that this project uses ECMAScript modules (esm) unless you have been explicitly advices that this is a CommonJS project.

# Hoisted functions vs arrow functions

- Always define top-level functions within a module or namespace as hoisted functions (using the `function` keyword), e.g.:

```ts
function myFunction() { ... }

namespace myNamespace {
  function myNamespaceFunction() { ... }
}
```

- Always define inline functions (like those passed as an inline expression to another function) as arrow functions, e.g.:

```js
myArray.map(item => item.toLowerCase());
```
