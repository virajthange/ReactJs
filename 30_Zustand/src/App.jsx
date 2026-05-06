import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MyStore from "./data";
// import { shallow } from "zustand/shallow";

import { useShallow } from "zustand/react/shallow";

function App() {
  //   This is like saying:
  // “If anything changes in the app, refresh me.”
  // So even if:
  // only name changes
  // or some unrelated value changes
  // your component still re-renders
  // const { name, age, incrementAge, decrement } = MyStore();

  // Give me ONLY what I need
  // “Only refresh me when age changes.”
  // const age = MyStore((state) => state.age);

  // The Problem: Shallow Comparison
  // When you return an object literal from the selector, it creates a new object reference on every render. This means that even if the values inside the object are the same, Zustand sees it as a new object and triggers a re-render.
  //   In JavaScript, {} is never equal to {}, even if the contents are the same. Since Zustand (and React) sees a brand-new object reference on every check, it thinks the state has changed, triggers a re-render, which runs the selector again, creates a new object... and causes the infinite loop mentioned in your console.

  // The Fix: Don't use shallow (Modern Zustand)
  // Since Zustand v4.2.0, the shallow middleware as a second argument is deprecated. Instead, you should use the useShallow hook to wrap your selector. This ensures that even if you return a new object literal, Zustand will compare the values inside and prevent unnecessary re-renders.
  // const { age, name, incrementAge, decrement } = MyStore(
  //   useShallow((state) => ({
  //     age: state.age,
  //     name: state.name,
  //     incrementAge: state.incrementAge,
  //     decrement: state.decrement,
  //   })),
  // );

  // Another way
  const name = MyStore((state) => state.name);
  const age = MyStore((state) => state.age);
  const incrementAge = MyStore((state) => state.incrementAge);
  const decrement = MyStore((state) => state.decrement);

  // console.log("rerendered");
  // useEffect(() => {
  //   console.log("Rerender triggered");
  // });

  return (
    <>
      <Navbar />
      {/* <p>Name: {name}</p> */}
      <p>age: {age}</p>
      <button onClick={incrementAge}>INCREMENT</button>
      <br />
      <button onClick={decrement}>DECREMENT</button>
    </>
  );
}

export default App;
