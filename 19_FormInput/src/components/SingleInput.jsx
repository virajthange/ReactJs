import { useState } from "react";

// This is controlled component, entire control is in developers hand using State , when input will change , on the spot state will also get change.
// It ensures the synchronization between state and UI

const SingleInput = () => {
  const [inp, setInp] = useState("");
  const handleChange = (e) => {
    setInp(e.target.value);
  };
  return (
    <div>
      <input
        value={inp} //It ensures the sync between UI and state, If this value attribute will not be defined, the input field will not get vanish even if we click on clear button
        onChange={handleChange}
        type="text"
        placeholder="Enter name"
      />
      <br />
      <button
        onClick={() => {
          setInp("");
        }}
      >
        Clear
      </button>{" "}
      <br /> <br />
      {inp}
    </div>
  );
};
export default SingleInput;