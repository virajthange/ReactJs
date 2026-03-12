// Using object

// const Component = (props) => {
const Component = ({ priceobj }) => {
  //Destructuring object
  //   console.log(props);

  console.log(priceobj);

  return (
    <>
      <h2>Component</h2>
      {/* <h3>Obj : {props.priceobj.price}</h3> */}
      <h4>Price is: {priceobj.price}</h4>
    </>
  );
};

export default Component;
