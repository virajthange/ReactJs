const ArrayInArray = () => {
    const arr = [[1,2,3], ['s','t','r']]
    return (
        <>
            <h2>Array In array</h2>
            {
                arr.map((value, index) => {
                    console.log(value);
                    return(
                        <div key={index}> 
                            {
                                value.map((val, ind) => {
                                    return(
                                        <div key={ind}>{val}</div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    )
}
export default ArrayInArray;