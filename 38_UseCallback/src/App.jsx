import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);
  console.log("Parent rendered...");

  function handleClick() {
    console.log(count);
    console.log("Button clicked...");
  }
  const handleClickCallback = useCallback(() => {
    handleClick();
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>

      {/* This will cause the Child component to re-render every time the Parent component re-renders, even if the Child component does not use the handleClick function. This is because the handleClick function is recreated on every render of the Parent component, and therefore has a different reference each time. */}
      {/* <Child handleClick={handleClick} /> */}

      {/* By using useCallback, we can memoize the handleClick function and prevent it from being recreated on every render of the Parent component. This will allow the Child component to only re-render when the handleClick function actually changes, which can improve performance in certain cases. */}
      <Child handleClickCallback={handleClickCallback} />
    </>
  );
}

export default App;
