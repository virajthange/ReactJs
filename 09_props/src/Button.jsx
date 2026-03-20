const Button = (props) => {
  return (
    <>
      <h2>Button</h2>
      {/* <button onClick={props.fun}>Click me</button> */}
      <button
        onClick={() => {
          props.fun("Viraj");
        }}
      >
        Click me
      </button>
    </>
  );
};
export default Button;
