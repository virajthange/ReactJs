import React, { useContext } from "react";
import MyContext from "./MyContext";

const A = () => {
  const myData = useContext(MyContext);
  console.log(myData);

  return (
    <div>
      <h3>Getting data from global space</h3>
      <p>Name: {myData.data.name}</p>
      <p>Age: {myData.data.age}</p>

      <button style={{
        padding: "8px 10px",
        border: "none",
        borderRadius: "8px"
      }}
        onClick={() => {
          console.log("clicked");
          myData.setData({ ...myData.data, age: myData.data.age + 1 });
        }}
      >
        Click here to increase age
      </button>
    </div>
  );
};

export default A;
