const FormEvents = () => {
    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form has been submitted");
    }

    const css = {
        margin: '10px auto',
        padding : '10px 10px'
    }
    return(
        <>
            <input style={css} type="text" placeholder="Enter something here" onChange={handleChange} />

            <form  action="" onSubmit={handleSubmit}>
                <input style={css} type="text" placeholder="Username" />
                <button >Submit</button>
            </form>
        </>
    )
}
export default FormEvents;