import { useState } from "react";

export default function SetAsync() {
  const [count, setCount] = useState(0);

  //   function increment() {
  //     console.log(count); //It prints the old value , because setCount() is an asynchronous function which gets executed after synchronous tasks , it batches the task in queue
  //     setCount(count + 1);
  //   }

  function inc() {
    setCount(function (prev) {
      prev = prev + 1;
      prev = prev * 3;
      console.log(prev); //Here we can access the current value
      return prev;
    });
  }
  return (
    <>
      <h1>Async</h1>
      <h3>Count: {count}</h3>
      {/* <button style={{ width: "150px", padding: "10px" }} onClick={increment}>
        INCREMENT
      </button>  */}

      <button style={{ width: "150px", padding: "10px" }} onClick={inc}>
        INCREMENT
      </button>
    </>
  );
}
