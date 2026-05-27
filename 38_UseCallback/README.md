# useCallback Hook in React

## Overview
`useCallback` is a React hook that memoizes a function definition. It returns a cached version of the callback that only changes if one of the dependencies has changed.

## Syntax
```javascript
const memoizedCallback = useCallback(() => {
  // callback logic
}, [dependency1, dependency2]);
```

## useMemo vs useCallback
- `useMemo` memoizes the return value of a function. It caches a computed value and only recomputes it when dependencies change.
- `useCallback` memoizes the function itself. It returns the same function reference across renders unless dependencies change.
- Use `useMemo` for expensive calculations and derived values.
- Use `useCallback` for stable callback references passed to child components or hooks.
- Syntax:
  - `const value = useMemo(() => computeExpensiveValue(), [deps]);`
  - `const callback = useCallback(() => doSomething(), [deps]);`

## Key Points

- **Memoization**: Caches the function so the same reference is returned across renders if dependencies don't change
- **Performance Optimization**: Prevents unnecessary re-renders of child components that receive the callback as a prop
- **Dependency Array**: Similar to `useEffect`, controls when the callback is updated
- **Empty Array**: `[]` means the callback never changes
- **No Array**: Creates a new function on every render (defeats the purpose)

## When to Use

- Passing callbacks to optimized child components (wrapped in `React.memo`)
- Using callbacks as dependencies in other hooks
- Expensive computations that depend on callback identity

## Example

```javascript
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Dependencies empty - function never changes

  return <Child onIncrement={increment} />;
}

function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment</button>;
}
```

## Common Pitfalls

- Over-memoizing simple callbacks (adds overhead without benefit)
- Forgetting dependencies can cause stale closures
- Using when optimization isn't needed


