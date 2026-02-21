import './App.css'
// import {Card1} from '../Components/Card1'
import Card1 from '../Components/Card1'
import Comp1, {Comp2, Comp3} from './Comp1'
import logo from './assets/react.svg'
import {sum} from './utilities'       //importing from js file
import data from './data.json'

function ShowSum() {
  return(
    <>
      <h2 className='adding'>The sum of two numbers is: {sum(3, 6)}</h2>
      <h3>Name is: {data.name}</h3>
      <h3>Age is: {data.age}</h3>
    </>
  )
}

function App() {
  return (
    <>
      <h1>Hey there</h1>
      <Card1 />
      <Comp1 />
      <Comp2 />
      <Comp3 />
      {/* Can use directly because this logo is available publicly */}
      {/* <img src="vite.svg" alt="" />          */}

      {/* We have to specify the entire path in src if not avaailable publicly */}
      {/* <img src="src/assets/react.svg" alt="" /> */}

    {/* Can use by importing  */}
      {/* <img src= {logo} alt="" /> */}

    <ShowSum />     
    </>
  
  )
}

export default App
