import "./App.css";
import Card from "./Card";
import ClassComp from "./ClassComp";
// It is a function not a component
// function card(title, date) {
//   const cardStyle = {
//     background: "lightseagreen",
//     padding: "15px 15px",
//     borderRadius: "10px",
//   };

//   return (
//     <div style={cardStyle}>
//       <h3>{title}</h3>
//       <p>Released in {date}</p>
//     </div>
//   );
// }

function App() {
  const appStyle = { display: "flex", gap: "10px" };
  return (
    // <div style={appStyle}>
    //   {/* Treating as js function  */}
    //   {card("Dangal", "oct")}
    //   {card("Ramsetu", "jan")}
    //   {card("Natrang", "sept")}
    // </div>

    <>
      <div style={appStyle}>
        <Card title="Krish" date="jan" />
        <Card title="Yaari" date="june" />
        <Card title="Samsen" date="sept" />
      </div>

      <ClassComp name ="Viraj" age= {22} />
      <ClassComp name ="Raj" age= {28} />
    </>
  );
}

export default App;
