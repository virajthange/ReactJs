function Button(props) {
    return(
        <button onClick={props.func} > {props.symb}  {props.name}</button>
    )
}
export default Button;