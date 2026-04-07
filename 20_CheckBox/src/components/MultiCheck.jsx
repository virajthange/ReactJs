import { useState } from "react";

const Multicheck = () => {
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);

  const handleHtml = (e) => {
    setHtml(e.target.checked);
  };
  const handleCss = (e) => {
    setCss(e.target.checked);
  };
  const handleJs = (e) => {
    setJs(e.target.checked);
  };
  return (
    <>
      <h3>Multi check box</h3>
      <label htmlFor="html">
        <input type="checkbox" checked={html} id="html" onChange={handleHtml} />{" "}
        HTML
      </label>
      <label htmlFor="css">
        <input type="checkbox" checked={css} id="css" onChange={handleCss} />{" "}
        CSS
      </label>
      <label htmlFor="js">
        <input type="checkbox" checked={js} id="js" onChange={handleJs} /> Js
      </label>
    </>
  );
};
export default Multicheck;
