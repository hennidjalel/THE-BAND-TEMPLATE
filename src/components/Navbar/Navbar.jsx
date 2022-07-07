import "./Navbar.css";
import { SiCliqz } from "react-icons/si";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navlinks">
                <a href="/">HOME</a>
                <a href="/">BAND</a>
                <a href="/">TOUR</a>
                <a href="/">CONTACT</a>
                <a href="/">MORE</a>
            </div>
            <div className="navserch">
                <a href="/"><SiCliqz /></a>
            </div>
        </nav>
    );
}

export default Navbar;