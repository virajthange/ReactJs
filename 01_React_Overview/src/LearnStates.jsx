import { useState } from "react";

function LearnStates() {
  // Normal Js variable
  let val = 3;
  // Defining state
  

  const [count, inc] = useState(0);
  function incr() {
    // count = count + 1; -> this will not work because state is read only
    inc(count + 1); // This will work because we are using setState function to update the state
  }

  function increment() {
    val = val + 1; // This will not work because val is a normal variable and we cannot change its value
    // But the value of val will change but it will not re-render the component because it is not a state variable
    console.log(val);
  }
  

  return (
    <>
      {/* Js Variable  */}
      <h2>Js variable: {val}</h2>
      <button onClick={increment}>Increment</button>

      {/* State Variable  */}
      <h2>State : {count}</h2>
      <button onClick={incr}>Increment</button>
    </>
  );
}

export default LearnStates;
