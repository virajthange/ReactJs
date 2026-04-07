import { useState } from "react";

const UnderForm = () => {
  const [data, setData] = useState({
    name: "",
    isChecked: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };
  const handleName = (e) => {
    setData({ ...data, name: e.target.value });
  };
  return (
    <div>
      <h3>Under Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleName}
        />{" "}
        <br />
        <label htmlFor="ch">
          <input
            id="ch"
            type="checkbox"
            name="isChecked"
            checked={data.isChecked}
            onChange={handleChange}
          />{" "}
          I agree to the terms and conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default UnderForm;
