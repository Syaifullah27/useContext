import { useContext } from "react"
import Navbar from "../../Components/Navbar/Index"
import { AuthContext } from "../../Context/AuthContext"

const HomePage = () => {
    // cara menerima state dari context
    const { login } = useContext(AuthContext)
    console.log("dari context",login);
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
        </div>
    )
}

export default HomePage