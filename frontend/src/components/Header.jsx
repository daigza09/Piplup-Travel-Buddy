import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file where you define font styles

function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white text-gray-600 custom-font">
            <div className="flex items-center space-x-10">
                <Link to="/user" className="hover:text-blue-400">User Information</Link>
                <Link to="/flight-information" className="hover:text-blue-400">Flight Information</Link>
            </div>
        </header>
    );
}

export default Header;



