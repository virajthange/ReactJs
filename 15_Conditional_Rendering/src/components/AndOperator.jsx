const AndOperator = () => {
    const val = 5;
    return (
        <>
        {val > 4 && <h1>Value is greater than 4</h1>}
        {val < 4 && <h1>Value is less than 4</h1>}

        {val > 3 && val < 7 && <h1>Value is between 3 and 7</h1>}
        </>
    )
}

export default AndOperator;