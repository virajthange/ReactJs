import { useState } from "react";
import Layer2 from "./Layer2";

const Layer1 = ({ appd, fun }) => {
  let css = {
    backgroundColor: "red",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };

  const [l1data, setL1data] = useState("Data of layer 1");
  console.log(l1data);

  console.log(appd);
  return (
    <div style={css}>
      <h2>Layer1</h2>
      <button onClick={() => fun(l1data)}>Click</button>
      <Layer2 appd={appd} l1data={l1data} />
    </div>
  );
};
export default Layer1;
