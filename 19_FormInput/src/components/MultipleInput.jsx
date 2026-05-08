import { useState } from "react";

const MultipleInput = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });

  //   const handleName = (e) => {
  //     setData(function (prev) {
  //       return {
  //         ...prev,
  //         name: e.target.value,
  //       };
  //     });
  //   };

  //   const handleAge = (e) => {
  //     console.log(e);
  //     setData({ ...data, age: e.target.value });
  //     console.log(data);
  //   };

  // No need of seperate handlers for each variable, we can do it with only one handler also
  const handler = (e) => {
    // console.log(e.target.name);
    // const {name, value} = e.target
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <div>
      <h2>This is multi input component</h2>
      {/* <input onChange={handleName} type="text" placeholder="Enter name" />
      <input onChange={handleAge} type="text" placeholder="Enter age" /> */}
      <input
        name="name"
        value={data.name}
        onChange={handler}
        type="text"
        placeholder="Enter name"
      />{" "}
      <br />
      <input
        name="age"
        value={data.age}
        onChange={handler}
        type="text"
        placeholder="Enter age"
      />{" "}
      <br />
      {/* <button onClick={() => setData("")}>Clear</button>           Don't do like this, it will be mixture of controlled and uncontrolled components whihch is not allowed */}
      <button onClick={() => setData({ name: "", age: "" })}>Clear</button>
      <br />
      <br />
      <h3>Name is: {data.name}</h3>
      <h3>Age is: {data.age}</h3>
    </div>
  );
};

export default MultipleInput;
