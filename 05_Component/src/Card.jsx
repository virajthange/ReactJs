import { useState } from "react";

function Card(props) {
  const cardStyle = {
    padding: "10px 10px",
    background: "lightseagreen",
    borderRadius: "10px",
  };
  const [count, setCount] = useState(0);
  return (
    <div style={cardStyle}>
      <p>Tickets: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h2>{props.title}</h2>
      <p>Released in {props.date}</p>
    </div>
  );
}

export default Card;

// Each component has seperate states