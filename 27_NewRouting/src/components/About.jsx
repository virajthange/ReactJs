import React from 'react'
import { useLoaderData } from 'react-router-dom'

const About = () => {
    const data = useLoaderData();
    console.log(data);
  return (
    <div>
        <h3>About page</h3>
        <div className="ddata" style={{
            display: "flex",
            margin: "20px auto",
            gap: "15px",
            width: "70%",
        }}>

        {
            data.map((val, ind) => {
                return <h5 style={{
                    background: "gray",
                    padding: "7px 10px",
                    borderRadius: "10px",
                    color: "white",
                }} key={ind}>{val.name}</h5>
                
            })
        }
        </div>
    </div>
  )
}

export default About