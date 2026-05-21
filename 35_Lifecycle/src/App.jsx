import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Alpha from "./components/Alpha";

function App() {
  const [count, setCount] = useState(0);

  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("App component mounted");
  });

  return (
    <div style={{ backgroundColor: "blue" }}>
      {toggle && <Alpha />}
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle Alpha</button>
    </div>
  );
}

export default App;
