# React

- This project uses React for the frontend.
- React components must be functional components (so that hooks can be used).
- Each React component must have it's dedicated props type definition.
- Each React component's root element must have the component name as a CSS class name.
- There must be a CSS file with the same name as the React component (in the same folder), and the component must import it.
- All styles must be in the CSS file. Do not add styles inline in tsx code.
- All CSS selectors must be scoped/tied to root element/component name class.
- This is an example of a React component:

```tsx
import "./MyComponent"; // import the accompanying styles

export type MyComponentProps = { // dedicated "props" type
  readonly name: string;
};

export function MyComponent({ name }: EditVideoFormProps) { // functional component
  return (
    <div className="MyComponent"> { /* root element has component name as CSS class name */ }
      Hello <span className="name">{name}</span> { /* no inline styles, only CSS classes allowed */ }
    </div>
  )
}
```

- This is an example of the accompanying CSS file for this component:

```css
.MyComponent > .name { /* every selector is tightly coupled/scoped to the component's class name */
  color: red;
}
```

