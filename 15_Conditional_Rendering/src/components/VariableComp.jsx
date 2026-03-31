const VariableComp = () => {
    const option = 4;
    let content = <h1>Hello world</h1>
    // if(option === 1) {
    //     content = <Comp1 />
    // } else if(option === 2) {
    //     content = <Comp2 />
    // } else if(option === 3) {
    //     content = <Comp3 />
    // }else{
    //     content = <h1>Option is something else</h1>
    // }


    option ===1 
        ? 
        content = <Com1 /> 
        :
        (option === 2) 
            ? 
            content = <Comp2 />
            :
            (option === 3)
                ?
                content = <Comp3 />
                :
                content = <h1>Option is something else</h1>;

        return(
        <>
        {content}
        </>
    )            

}
export default VariableComp;

const Comp1 = () => {
    return <h1>Component 1</h1>
}
const Comp2 = () => {
    return <h1>Component 2</h1>
}
const Comp3 = () => {
    return <h1>Component 3</h1>
}