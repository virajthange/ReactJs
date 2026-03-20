import Layer3 from './Layer3'

const Layer2 = ({appd, l1data}) => {
     let css = {
        backgroundColor: "blue",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px"
    }
    console.log(appd);
    console.log(l1data);
    return(
        <div style={css}>
            <h2>Layer2</h2>
            <Layer3 appd = {appd} />
        </div>
    )
}
export default Layer2