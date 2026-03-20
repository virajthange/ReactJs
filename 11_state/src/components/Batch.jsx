import { useState } from "react";

const Batch = () => {
  const [count, setCount] = useState(10);

  function decrement() {
    // setCount(count - 1);    //9
    // setCount(count - 1);    //8
    // setCount(count - 1);    //7
    // It should happen like this

    setCount(count - 1); //Not get executed
    setCount(count - 1); //Not get executed
    setCount(count - 1); //9
    //Only last task will get executed, rerenders the component once (avoid unneccessary rerenders)
    // It will not do the task for 3 times , it will do it only for once, it batches the tasks and executes only for once
  }

  return (
    <>
      <h3>Batch</h3>
      <h3>Count: {count}</h3>
      <button onClick={decrement}>DECREMENT</button>
    </>
  );
};

export default Batch;
