import "./App.css";
import Navbar from "./navbar";
import Comp2 from "./Comp2";
import LearnStates from "./LearnStates";

// We can create multiple components in single file also
// If creating in a same file -> no need to import

// function Component(props) {
function Component({title}) {
  // It is mandatory to always return single component
  return (
    <>
      {/* <h2>This is Component with title: {props.title} </h2> */}
      <h2>This is Component with title: {title} </h2>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>This is Viraj</h1>
      <p>I am a Student</p>
      <Navbar />
      <Comp2 />

      {/* We can pass data to component using props (properties) */}
      {/* props are read only -> we cannot change props value inside component */}
      {/* props are used to pass data from parent component to child component */}
      <Component title="Prop 1" />
      <Component title="Prop 2" />
      <Component title="Prop 3" />
      <LearnStates></LearnStates>
      {/* We can use a single component multiple times */}
    </div>
  );
}

export default App;
