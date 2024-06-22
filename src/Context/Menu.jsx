import axios from "axios"
import { createContext } from "react"
import { useState } from "react"
import { useEffect } from "react"

const MenuContext = createContext()

// eslint-disable-next-line react/prop-types
const MenuContextProvider = ({ children }) => {
    const [menu, setMenu] = useState([])

    const getMenu = async () => {
        try {
            const res = await axios.get('https://reqres.in/api/users?page=2')
            console.log(res.data.data);
            setMenu(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMenu()
    }, [])
    
    return (
        <MenuContext.Provider value={{ menu, setMenu , getMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuContextProvider }