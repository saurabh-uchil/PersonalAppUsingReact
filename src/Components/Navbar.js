import Link from "./Link";
import "./CSS/Navbar.css";

function Navbar(){
    return(
    <>
    <nav>
        <ul>
            <li><Link to="/">To Do List</Link></li>
            <li><Link to="/Completed">Completed</Link></li>
        </ul>
    </nav>
        
        
    </>
    )
}

export default Navbar;