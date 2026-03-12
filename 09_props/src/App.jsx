import { useState } from "react";
import "./App.css";
import Comp from "./Comp";
import Component from "./Component";
import Card from "./Card";
import ArrComp from "./ArrComp";
import Button from "./Button";

function App() {
  const age = 43;

  const arr = [32,55,63,73];

  const obj = {
    price: 400,
  };

  const jsxvar = <h3>This is h3 tag</h3>

  // function func() {
  //   console.log("Fun clicked...");
    
  // }
  function func(name) {
    console.log("Fun clicked...", name);
    
  }
  return (
    <>
      <h1>Hey</h1>

      {/* <Comp name="Yash" age=22 />     */}
      {/* Can't pass number directly, it will be treated as string, so we have to use curly braces to pass number as a */}

      <Comp name="Yash" age={22} />
      <Comp name="Anand" age={36} />

      {/* We can also pass props as variables, so we can create a variable and pass it as a prop. */}
      {/* We can pass the string in double quotes, but for number we have to use curly braces. So we can create a variable and pass it as a prop. */}
      <Comp name={"Sanket"} age={age} />

      <Component priceobj={obj} />
      <Card {...obj} />

      <ArrComp jsv = {jsxvar} ar={arr} />

      <Button fun={func} />
    </>
  );
}

export default App;
