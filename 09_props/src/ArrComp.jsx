// const ArrComp = (props) => {
const ArrComp = ({ ar, jsv }) => {
  //   console.log(props.ar);

  console.log(ar);
  return (
    <>
      <h3>ArrComp</h3>
      {/* {props.ar.map(function (val, ind) {
        return <h5 key={ind}>{val}</h5>;
      })} */}

      {ar.map((val, ind) => {
        return <h4 key={ind}>{val}</h4>;
      })}

      jsxVar: {jsv}
    </>
  );
};

export default ArrComp;
