import React, { useEffect, useState } from "react";

const Alpha = () => {
  const [data, setData] = useState(0);
  // Mounting Phase -> `useEffect` with an empty dependency array will run only once when the component is first mounted. This mimics the behavior of `componentDidMount` in class components, allowing you to perform side effects that should only happen once, such as fetching data or setting up subscriptions.
  useEffect(() => {
    console.log("Alpha component mounted");
  }, []);

  //   useEffect without a dependency array will run after every render, including the initial render. This mimics the behavior of `componentDidUpdate` in class components, allowing you to perform side effects in response to any update to the component, regardless of which state or props changed.
  useEffect(() => {
    console.log("Alpha component updated");
  });

  // Updating Phase -> `useEffect` with a dependency array that includes `data` will run the effect every time the `data` state changes. This mimics the behavior of `componentDidUpdate` in class components, allowing you to perform side effects in response to state updates.

  useEffect(() => {
    console.log("Alpha component updated");
  }, [data]);

  //   Unmounting Phase -> used to perform cleanup activities like clearing timers, canceling network requests, or removing event listeners to prevent memory leaks and ensure that the component is properly cleaned up when it is removed from the DOM.
  useEffect(() => {
    console.log("alpha");
    return () => {
      console.log("Alpha component unmounted");
    };
  }, []);
  return (
    <div style={{ backgroundColor: "brown" }}>
      <div>Alpha</div>
      <h3>Data: {data}</h3>
      <button onClick={() => setData(data + 1)}>Click Me</button>
    </div>
  );
};

export default Alpha;
