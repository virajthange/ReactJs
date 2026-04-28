import { createContext } from "react";

// createContext is a function that creates a Context object. When React renders a component that subscribes to this Context object, it will read the current context value from the closest matching Provider above it in the tree.

// The default value argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue. Instead, the consuming components will receive undefined.  

// createContext is used to create a Context object. When React renders a component that subscribes to this Context object, it will read the current context value from the closest matching Provider above it in the tree. The default value argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use defaultValue. Instead, the consuming components will receive undefined.

const MyContext = createContext();

export default MyContext;