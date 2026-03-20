const Layer3 = ({appd}) => {
     let css = {
        backgroundColor: "darkgray",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
    }
    console.log(appd);            //Data coming form parent component till layer 3
    return(
        <div style={css}>
            <h2>Layer3</h2>
        </div>
    )
}
export default Layer3