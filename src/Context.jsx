import { createContext, useState } from "react";

const Context = createContext()

function ContextProvider(props) {

    const [user, setUser] = useState({
        usrName: "",
        email:"",
        pwd: "",
        pwd2: "",
        imgLnk: "",
        age: "", 
    })

    return (
        <Context.Provider value={{user, setUser}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider as Provider, Context as ContextObj}