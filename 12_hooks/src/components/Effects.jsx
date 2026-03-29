import { useEffect, useState } from "react";

// Hooks are the functions, which are available only in the functional components
// These were introduced to access the functionalities without getting help of class based components

const Effects = () => {
  const [val, setVal] = useState(1);

  const [number, setNumber] = useState(5);

  // Dependency array is optional, if not specified useEffect will get triggered whenever the component rerenders
  // useEffect(() => {
  // console.log('useEffect hook has been triggered...');
  // })

  // Now it will get triggered only once
  // useEffect(() => {
  //     console.log('useEffect hook has been triggered...');
  // }, [])

  // Now it will get triggered whenever the 'number' gets changed
  // useEffect(() => {
  //     console.log('useEffect hook has been triggered...');
  // }, [number])

  // We can pass multiple values also in dependency array
  useEffect(() => {
    console.log("useEffect hook has been triggered...");
  }, [number, val]);

  return (
    <>
      <h3>UseEffects hook</h3>

      <h3>Count: {val}</h3>
      <button
        onClick={() => {
          setVal(val + 1);
        }}
      >
        Click me
      </button>

      <h3>Number: {number}</h3>
      <button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        DecreaseNum
      </button>
    </>
  );
};

export default Effects;
