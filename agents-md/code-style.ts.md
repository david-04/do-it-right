# Namespacing

- When creating types that belong to a function or a parent type, hide them within a namespace that shadows the parent function or type, e.g.:

```ts
export namespace myFunction {
  export type MyOptions { readonly Key: string };
}

export function myFunction(options: myFunction.MyOptions) { }

export type MyParentType {
  readonly child: MyParentType.MyChildType;
}

export namespace MyParentType {
  export type MyChildType { readonly myProperty: number };
}
```

- Avoid creating `type` definitions for functions' return types. If (and only if) necessary, automatically infer the type:

```ts
function myFunction() {
  return { key: "value" } as const;
}
type MyFunctionReturnType = ReturnType<typeof myFunction>;
```

# No JavaScript

- This project uses TypeScript. Do not plain JavaScript files.

# Type annotations and inference

- Do not add return type annotations to functions, if TypeScript can infer the return type automatically.
- Do not add type annotations to variables, if TypeScript can infer the type automatically.
- When assigning an object literal or array literal to a variable, annotate the literal with `as const`, e.g.:

```ts
const myObject = { key: "value" } as cont;
const myArray = ["item"] as const;
```

- Do not annotate object an array literals `ast const` when passing them inline to a function, e.g.:

```ts
myFunction({ key: "value" }); // no "as const"
myFunction(["item"]); // no "as const"
```

- Do not create `type` definitions or `interfaces` that can be inferred. Also avoid creating `type` definitions for the return type of functions. Instead, let TypeScript infer the type whenever possible. If a return type is needed (e.g. for a parameter in another function), use automatically inferred types wherever possible, for example:

```ts
const MY_CONSTANT = { key: "value" } as const;
type MyConstantType = typeof MY_CONSTANT; // infer the type from an exixsting value

function myFunction() {
  return { key: "value" } as const;
}
type MyFunctionReturnType = ReturnType<typeof myFunction>; // infer the type from the function's return value
```

# Utility types

- Prefer using TypeScript's built-in utility types, for example:

```ts
// avoid repeating modifiers:
type MyType = { readonly property1?: string,  readonly property2?: number };

// instead, use utility types:
type MyType = Readonly<Partial<{ property1: string, property2: number }>;
```

- Prefer the `Record` utility type over the indexer signature

```ts
type MyType = { [index: string]: number }; // bad: avoid indexer structure
type MyType = Record<string, number>; // good: use the "Record" utility type
```

# Type safety

- Never bypass/disable TypeScript's type checking.
  - Do not use the assertion operator (`!`).
  - Do not force-cast types (e.g. `myValue as unknown as MyType`).
  - Do not use the type `any`. Use `unknown` instead.
  - Do not add `@ts-ignore-error` or `@ts-expect-error` annotations.

- Instead of bypassing/disabling TypeScript's type checking, implement runtime checks that allow TypeScript's type system to safely confirm that a value is of a given type.
- Do not use `null`. Use `undefined` instead.

