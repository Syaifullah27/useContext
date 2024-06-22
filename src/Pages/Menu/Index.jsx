import { useContext } from "react"
import Navbar from "../../Components/Navbar/Index"
import { AuthContext } from "../../Context/AuthContext"
import { MenuContext } from "../../Context/Menu"



const MenuPage = () => {
    const { login, handleLogin } = useContext(AuthContext)
    // console.log("dari context",login);

    const { menu  } = useContext(MenuContext)


    return (
        <div>
            <Navbar />
            <h1>Menu Page</h1>
            <button onClick={handleLogin}>{login ? "Logout" : "Login"}</button>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                {menu.map((item) => (
                    <div key={item.id} style={{border: "1px solid black", padding: "10px", margin: "10px",display: "flex", flexDirection: "column", gap: "10px",justifyContent: "center", alignItems: "center", borderRadius: "15px", width: "200px"}}>
                        <img src={item.avatar} style={{borderRadius: "50%", width: "100px", height: "100px"}} />
                        <h4>{item.first_name}</h4>
                        <i style={{color: "blue" ,fontSize: "12px"}}>{item.email}</i>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MenuPage