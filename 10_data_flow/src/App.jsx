import { useState } from "react";

import Layer1 from "./Components/Layer1";
// import './App.css'

function App() {
  let css = {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "green",
    padding: "20px",
  };
  const [appdata, setAppdata] = useState("data of app");

  function fun(childData) {
    console.log("In App: Data coming from child is: ", childData);
  }
  return (
    <div style={css}>
      <h2>Main parent</h2>
      <Layer1 appd={appdata} fun={fun} />
    </div>
  );
}

export default App;
