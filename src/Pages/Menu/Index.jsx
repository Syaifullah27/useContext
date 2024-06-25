import { useContext } from "react"
import Navbar from "../../Components/Navbar/Index"
import { AuthContext } from "../../Context/AuthContext"
import { MenuContext } from "../../Context/Menu"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { TYPES } from "../../redux/types"
import axios from "axios"
import { useEffect } from "react"



const MenuPage = () => {
    const { login, handleLogin } = useContext(AuthContext)
    // console.log("dari context",login);
    const { menu } = useContext(MenuContext)
    const { authReducer, menuReducer } = useSelector((data) => data)
    // console.log(authReducer, menuReducer);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch({
            type: TYPES.LOGOUT,
            payload: false
        })
    }

    const handleLogin2 = () => {
        dispatch({
            type: TYPES.LOGIN,
            payload: true
        })
    }



    const getMenu = async () => {
        try {
            const res = await axios.get('https://api.mudoapi.tech/menus')
            console.log(res.data.data.Data);
            dispatch({
                type: TYPES.SET_DATA_MENU,
                payload: res.data.data.Data
            })
        } catch (error) {
            console.log(error?.response?.data?.message);
        }
    }

    useEffect(() => {
        getMenu()
    }, [])












    return (
        <div>
            <Navbar />
            <h1>Menu Page</h1>

            <br /><br /><br /><br />
            <p>dapat dari redux : {authReducer.name}</p>
            <p>dari Redux =</p>
            <br />

            {
                authReducer.isLogin ? <p>anda sudah login</p> : <p>anda belum login</p>
            }
            {
                authReducer.isLogin ? <button onClick={handleLogout}>Logout</button> : <button onClick={handleLogin2}>Login</button>
            }
            {/* <button onClick={handleLogout}>Logout</button>
            <button onClick={handleLogin2}>Login</button> */}

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                {menuReducer?.menu.map((item) => (
                    <div key={item.id} style={{ border: "1px solid black", padding: "10px", margin: "10px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", borderRadius: "15px", width: "200px" }}>
                        <img src={item.imageUrl} style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
                        <h4>{item.name}</h4>
                        <i style={{ color: "black", fontSize: "12px" }}>{item.price} ribu</i>
                    </div>
                ))}
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            

            {/* {menuReducer?.menu.map((item) => (
                <div key={item.id}>
                    <p>{item.name}</p>
                </div>
            ))} */}

            {/* {
                menuReducer.data.data.map((item) => (
                    <div key={item.id} style={{border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "15px", width: "200px", display: "flex", flexDirection: "column", gap: "10px",justifyContent: "center", alignItems: "center"}}>
                        <p style={{fontWeight: "bold"}}>{item.name}</p>
                        <i>{item.price}</i>
                    </div>
                ))
            } */}

            <button
                style={{ border: "1px solid black", padding: "10px", margin: "10px", borderRadius: "15px" }}
                onClick={handleLogin}>
                {login ? "Logout" : "Login"}
            </button>
            {login ? (
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                    {menu.map((item) => (
                        <div key={item.id} style={{ border: "1px solid black", padding: "10px", margin: "10px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", borderRadius: "15px", width: "200px" }}>
                            <img src={item.avatar} style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
                            <h4>{item.first_name}</h4>
                            <i style={{ color: "blue", fontSize: "12px" }}>{item.email}</i>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
                    <p>Login dulu bro...</p>
                </div>
            )}
        </div>
    )
}

export default MenuPage