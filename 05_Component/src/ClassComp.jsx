import { Component } from "react";

class ClassComp extends Component {
    
  render() {
    return (
      <>
      <div style={{
        margin: "20px",
        background: "skyblue",
        padding: "10px 10px",
        color: "black",
        borderRadius: "10px"
      }}> 
      <p>Name: {this.props.name}</p>
      <p>Age: {this.props.age}</p>
      
      </div>
      </>
    );
  }
}

export default ClassComp;
