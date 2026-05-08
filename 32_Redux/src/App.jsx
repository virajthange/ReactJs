import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addToProduct, incrementCount } from "./actions/productAction";
import Product from "./Product";

function App() {
  const state = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  console.log(state);

  const handleAddToProduct = () => {
    dispatch(
      addToProduct({
        id: 1,
        name: "rakesh",
        age: 34,
      }),
    );
  };

  const handleIncrement = () => {
    dispatch(incrementCount());
  };
  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleAddToProduct}> Click </button>
      <Product />
      <button onClick={() => handleIncrement()}>INCREMENT</button>
      {/* {state.count} */}
    </>
  );
}
export default App;
