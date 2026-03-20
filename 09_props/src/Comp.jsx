// function Comp(props) {
function Comp({ name: names = "Niraj", age = 54 }) {
  //Can change the name of variable , can give the default values also
  return (
    <>
      {/* <h3>Name: {props.name} , Age: {props.age}</h3> */}

      {/* We can also destructure the props object directly in the function parameter, so we don't have to write props.name and props.age every time. */}
      <h3>
        Name: {names} , Age: {age}
      </h3>
    </>
  );
}
export default Comp;
