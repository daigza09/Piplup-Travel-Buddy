import { Link } from "react-router-dom";
import instaLogo from "../assets/instaLogo.png";
import twitLogo from "../assets/twitterLogo.png";
import inLogo from "../assets/inLogo.png";
import facebookLogo from "../assets/facebookWhite.png";

function Footer() {
  return (
    <footer className="bg-[#000080] text-black font-semibold p-4 py-3" style = {{ height: '40px' }}>
      <div className="container mx-auto flex justify-between">
      <div className="flex items-start">
          <Link to="/instagram" className="social-link" style={{ marginRight: '15px' }}>
            <img src={instaLogo} alt="Instagram Logo" style={{ width: '20px' }} />
          </Link>
          <Link to="/twitter" className="social-link" style={{ marginRight: '15px' }}>
            <img src={twitLogo} alt="Twitter Logo" style={{ width: '20px' }} />
          </Link>
          <Link to="/linkedin" className="social-link" style={{ marginRight: '15px' }}>
            <img src={inLogo} alt="LinkedIn Logo" style={{ width: '20px' }} />
          </Link>
          <Link to="/facebook" className="social-link" style={{ marginRight: '15px' }}>
            <img src={facebookLogo} alt="Facebook Logo" style={{ width: '20px' }} />
          </Link>
        </div>
        <div className="flex">
          <Link to="/help" className="help ml-3 text-white"><u>Help</u></Link>
          <Link to="/contact" className="ml-3 contactUs text-white"><u>Contact Us</u></Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;