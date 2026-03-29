const Propagation = () => {
  const pcss = {
    width: "100px",
    height: "100px",
    backgroundColor: "lightblue",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px auto",
    borderRadius: "10px",
  };
  const ccss = {
    width: "50px",
    height: "50px",
    backgroundColor: "crimson",
    borderRadius: "10px",
  };

  function parentClick() {
    console.log("Parent clicked");
  }
  function childClick(e) {
    // This will stop the event from bubbling up to the parent element
    // e.stopPropagation()
    console.log("Child clicked");
  }
  return (
    <>
      <h3>Propagation</h3>
      <div style={pcss} className="parent" onClick={parentClick}>
        <div style={ccss} className="child" onClick={childClick}></div>
      </div>
    </>
  );
};

export default Propagation;
