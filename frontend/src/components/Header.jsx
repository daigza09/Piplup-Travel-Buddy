import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b-2 border-[#644536] md:px-6">
            <div className="flex items-center md:space-x-10">
                <Link to="/user">User Information</Link>
                <Link to="/flight-information">Flight Information</Link>
            </div>
        </header>
    );
}

export default Header;

