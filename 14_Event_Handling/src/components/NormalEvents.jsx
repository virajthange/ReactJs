const NormalEvents = () => {
  function handleClick(e) {
    console.log(e.target);
    console.log("Button has been clicked");
  }

  const handleDoubleClick = (e, name) => {
    console.log('Name is: ', name);
    // console.log('Double click triggered');
    console.log(e);

  }
  return (
    <>
      <h3>Normal Events</h3>
      <button
        style={{
          padding: "10px 20px",
          margin: "20px auto",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "15px",
        }}
        // onClick={handleClick}
        onDoubleClick={(e)=> handleDoubleClick(e, "viraj")}
      >
        Click
      </button>

      <div
        onMouseOver={() => {
          console.log("Hovered");
        }}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px auto",
          borderRadius: "10px",
        }}
        className="hov"
      >
        Hover over me!
      </div>
    </>
  );
};

export default NormalEvents;
