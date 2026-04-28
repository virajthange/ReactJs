import React, { useContext } from 'react'
import MyContext from './MyContext'

const B = () => {
    const myData = useContext(MyContext)
  return (
    <div>
        <h1>Details in B</h1>
        <p>Name: {myData.data.name}</p>
        <p>Name: {myData.data.age}</p>

          <button style={{
        padding: "8px 10px",
        border: "none",
        borderRadius: "8px"
      }}
        onClick={() => {
          console.log("clicked");
          myData.setData({ ...myData.data, age: myData.data.age + 1 });
        }}
      >
        Click here to increase age
      </button>
    </div>
  )
}

export default B