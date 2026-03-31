const Ternary = () => {
  const flat = 3;
  const nested = 2;
  return (
    <>
      {flat === 4 ? <h1>Value is 4</h1> : <h1>Value is not 4</h1>}

      {/* Nested ternary operator  */}

      {nested === 6 ? (
        <h1>Value is 6</h1>
      ) : nested === 7 ? (
        <h1>Value is 7</h1>
      ) : (
        <h1>Value is neither 6 nor 7</h1>
      )}
      
    </>
  );
};
export default Ternary;
