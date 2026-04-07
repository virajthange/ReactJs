import { useState } from "react";

const SelectAll = () => {
  // const data = useState({

  // })

  const [isHtml, setHtml] = useState(false);
  const [isCss, setCss] = useState(false);
  const [isJs, setJs] = useState(false);
  const [isSelect, setSelect] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target.checked);
    setSelect(e.target.checked);
    let { checked } = e.target;
    setHtml(checked);
    setCss(checked);
    setJs(checked);
  };
  const handleAll = (e) => {
    console.log(e.target.checked);
  };

  return (
    <>
      <div>SelectAll</div>

      <label htmlFor="sel">
        <input
          id="sel"
          name="selectAll"
          checked={isSelect}
          onChange={handleChange}
          type="checkbox"
        />{" "}
        Select All
      </label>
      <label htmlFor="html">
        <input
          id="html"
          name="html"
          checked={isHtml}
          type="checkbox"
          onChange={handleAll}
        />
        Html
      </label>
      <label htmlFor="css">
        <input id="css" checked={isCss} type="checkbox" onChange={handleAll} />
        Css
      </label>
      <label htmlFor="js">
        <input id="js" checked={isJs} type="checkbox" onChange={handleAll} />
        Js
      </label>

      <h3>{isHtml}</h3>
      <h3>{isCss}</h3>
      <h3>{isJs}</h3>
    </>
  );
};

export default SelectAll;
