import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import MemoAlpha from "./components/Alpha";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    name: 'viraj'
  });
  // Whenever the component re-renders, the reference of the obj state changes, even if the content of the object remains the same. This is because in JavaScript, objects are reference types, and when we update the state with a new object (even if it has the same properties and values), it creates a new reference in memory. As a result, React will consider it as a different object and trigger a re-render of the component.

  useEffect(() => {
    console.log("Parent component triggered...");
  });

  return (
    <>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      {/* <MemoAlpha data={1} />        Will not re-render because data is same as previous render. If we change data to count, it will re-render every time count changes. */}
      {/* <MemoAlpha data={count} /> */}
      {/* {Will re-render every time count changes because data is different from previous render. } */}

      <MemoAlpha data={obj.name} />
      {/* Will not re-render because data is same as previous render. If we change data to obj, it will re-render every time obj changes. */}
      {/* <MemoAlpha data={obj} /> */}
      {/* Will re-render every time obj changes because data is different from previous render. */}

      {/* <MemoAlpha data = {{name: 'viraj'}} /> */}
    </>
  );
}

export default App;
