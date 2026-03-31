const IfElse = () => {
    const val = 2;

    if(val == 4) {
        return <h1>Value is 4</h1>
    }else if(val == 5) {
        return <h1>Value is 5</h1>
    }else {
        return <h1>Value is neither 4 nor 5</h1>
    }
}

export default IfElse;