const NormalArray = () => {
  const arr = ["Viraj", "Swaraj", "Rakesh", "Yash"];

  return (
    <>
      {arr.map(function (value, index) {
        return <div key={index}>{value}</div>;
      })}
    </>
  );
};
export default NormalArray;
