import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    let val = count + 1;
    setCount(val);
    console.log(count);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    } else {
      console.warn("Count value can't be less than 0");
    }
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={increment}>➕ INCREMENT</button>
        <button onClick={decrement}>➖ DECREMENT</button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          🔄️ RESET
        </button>
      </div>
    </>
  );
}

export default App;
