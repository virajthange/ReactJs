// function Comp(props) {
function Comp({name, age}) {
    return(
        <>
            {/* <h3>Name: {props.name} , Age: {props.age}</h3> */}

            {/* We can also destructure the props object directly in the function parameter, so we don't have to write props.name and props.age every time. */}
            <h3>Name: {name} , Age: {age}</h3>
        </>
    )
}
export default Comp;