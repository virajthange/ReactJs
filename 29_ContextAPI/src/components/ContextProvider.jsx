import { useState } from "react";
import MyContext from "./MyContext";

const ContextProvider = (props) => {
    const [data, setData] = useState({
        name: "viraj",
        age: 22
    })
    console.log(props);
    console.log(props.children);
    // console.log(children);

    return (
        <>  
            <MyContext.Provider value={{data, setData}}>
                {props.children}

            </MyContext.Provider>
        
        </>
    )
}

export default ContextProvider;