import "./App.css";

function App() {
  let val = 3;
  function fun() {
    return "viraj";
  }

  function jsxfun(jsx) {
    return <p>Returning from a func : {jsx}</p>;
  }

  let bool = true;
  const age = 16;
  const skills = ["java", "sql", "js"];
  const jsx = <h4>We can store the jsx in a variable</h4>;

  return (
    <div>
      {/* JS inside html like structure */}
      <h3>{2 + 2}</h3>
      <h3>The value is: {val}</h3>
      <h3>Name is: {fun()}</h3>

    {/* Ternary Operator  */}
      <p>{bool ? "true statement" : "false statement"}</p>
      <p>
        {age >= 18 ? (
          <h3 style={{ color: "green" }}>You can drive</h3>
        ) : (
          <h3 style={{ color: "red" }}>You can't drive</h3>
        )}{" "}
      </p>

        {/* Map function in { } */}
      {skills.map(function (val) {
        return <p>{val}</p>;
      })}

      {/* Conditioning  */}
      {bool && (
        <h4 style={{ color: "skyblue" }}>The condition has been true</h4>
      )}

      {/* printing jsx by storing in a variable  */}
      {jsx}


      {/* Passing the jsx to other component  */}
      <Comp jsx={jsx} />

      {/* Passing jsx to the function and returning again the jsx to pring  */}
      {jsxfun(jsx)}
    </div>
  );
}

function Comp(props) {
  return <>{props.jsx}</>;
}

export default App;
