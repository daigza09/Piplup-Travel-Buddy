import { Link } from "react-router-dom";
import homeBG from "../assets/homeBG.jpg";
import destinationBG from "../assets/destinationBG.jpg";

function UserInfo() {
  return (
    <main
      className="relative h-screen bg-cover flex items-center"
      style={{ backgroundImage: `url(${destinationBG})` }}
    ></main>
  );
}

export default UserInfo;
