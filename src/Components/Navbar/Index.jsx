import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <div style={{ display: "flex", gap: "10px", padding: "10px",backgroundColor: "black", color: "white", justifyContent:"space-between", alignItems: "center" }}>
            <h2>State Manegement (useContext,Redux)</h2>
            <div style={{ display: "flex", gap: "10px" }}>
                <Link style={{ textDecoration: "none", color: "white" }}
                to="/">Home</Link>
                <Link style={{ textDecoration: "none", color: "white" }}
                to="/menu">Menu</Link>
            </div>
        </div>
    )
}

export default Navbar