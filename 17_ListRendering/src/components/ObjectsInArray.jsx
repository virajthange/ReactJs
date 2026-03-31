const ObjectsInArray = () => {
    const obj = [
        {id: 1, name: "Viraj", age: 22},
        {id: 2, name: "Manav", age: 26},
        {id: 3, name: "Raj", age: 29},
    ]
  return (
    <>
      <h2>Objects In Array</h2>
      {
        obj.map((user, index) => {
            // console.log(user);
            return(
                
                <div key={index}>
                   <p>Name is: {user.name}, Age is: {user.age}</p>
                </div>
            )
        })
      }
    </>
  );
};

export default ObjectsInArray;
