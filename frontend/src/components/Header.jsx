import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file where you define font styles

function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-gray-600 custom-font">
            <div className="flex items-center space-x-10">
                <Link to="/Home" className="hover:text-blue-400">Home</Link>
                <Link to="/Services" className="hover:text-blue-400">Services</Link>
                <Link to="/UserInformation" className="hover:text-blue-400">User Information</Link>
                <Link to="/About" className="hover:text-blue-400">About</Link>
                <Link to="/LiveChat" className="hover:text-blue-400">Live Chat</Link>
                <Link to="/Contact" className="hover:text-blue-400">Contact</Link>
            </div>
        </header>
    );
}

export default Header;



