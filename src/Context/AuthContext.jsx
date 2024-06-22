import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext()


// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(true)

    const handleLogin = () => {
        setLogin(!login)
    }

    return (
        <AuthContext.Provider value={{ login, setLogin, handleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider }