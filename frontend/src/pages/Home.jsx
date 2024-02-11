import { Link } from "react-router-dom";
import homeBG from "../assets/homeBG.jpg";
import destinationBG from "../assets/destinationBG.jpg";

function Home(){
    return (
        <main className="relative h-screen bg-cover flex items-center" style={{ backgroundImage: `url(${destinationBG})` }}>
            <div className = "text-left custom-font">
                <h1 className="text-5xl font-bold text-[#ffffff] mb-4 center">
                    Travel the world with Piplup Luvers!
                </h1>
                <div className = "text-2xl text-[#ffffff] mb-2">
                    We are dedicated to curating economical flight planners!
                </div>
                <button className="m-2 px-6 py-4 bg-[#000080] text-white rounded hover.bg-[#000080]">Learn More --</button>
            </div>
        </main>
      );
}

export default Home;