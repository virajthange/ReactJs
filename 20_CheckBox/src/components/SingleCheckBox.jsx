import { useState } from "react";

function SingleCheckBox() {
  const [java, setJava] = useState(false);
  function handleJava(e) {
    console.log(e.target.checked);
    setJava(e.target.checked)
  }
  return (
    <div>
      <input type="checkbox" checked={java}  onChange={handleJava} />
      Java
    </div>
  );
}

export default SingleCheckBox;
