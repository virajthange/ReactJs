import { useState } from "react";

const SelectAllOptimize = () => {
  const [data, setData] = useState({
    html: false,
    css: false,
    js: false,
  });

  const all = Object.values(data).every((v) => v === true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.checked });
  };
  const handleAll = (e) => {
    setData({
      html: e.target.checked,
      css: e.target.checked,
      js: e.target.checked,
    });
  };
  const obj2 = Object.keys(data);
  console.log(obj2);

  return (
    <>
      <h3>Optimized Select All</h3>

      <label htmlFor="all">
        <input
          id="all"
          type="checkbox"
          name="all"
          checked={all}
          onChange={handleAll}
        />{" "}
        All
      </label>

      {/* <label htmlFor="html">
        <input
          id="html"
          type="checkbox"
          name="html"
          checked={data.html}
          onChange={handleChange}
        />{" "}
        Html
      </label>

      <label htmlFor="css">
        <input
          id="css"
          type="checkbox"
          name="css"
          checked={data.css}
          onChange={handleChange}
        />{" "}
        Css
      </label>

      <label htmlFor="js">
        <input
          id="js"
          type="checkbox"
          name="js"
          checked={data.js}
          onChange={handleChange}
        />{" "}
        Js
      </label> */}

      {obj2.map((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              id={item}
              type="checkbox"
              name={item}
              checked={data[item]}
              onChange={handleChange}
            />
            {item}
          </label>
        );
      })}

      {/* Short Cut  */}

      {data.all && <h3>All is selected</h3>}
      {data.html && <h3>Html is selected</h3>}
      {data.css && <h3>Css is selected</h3>}
      {data.js && <h3>Js is selected</h3>}
    </>
  );
};
export default SelectAllOptimize;
