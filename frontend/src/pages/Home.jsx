import homeBG from "../assets/homeBG";
import { Link } from "react-router-dom";

function Home(){
    return (
        <main className="relative h-screen bg-cover" style={{ backgroundImage: `url(${homeBG})` }}>
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <div className="container mx-auto text-center relative flex items-center justify-center h-full">
            <div className="bg-white py-14 px-40 bg-opacity-70">
              <h1 className="text-7xl font-bold text-[#05204A] mb-4">Piplup Travel Agent :3</h1>
              <p className="text-xl text-[#05204A] mb-8">Testing Testing</p>
              {/* <button onClick={() => window.location.href = '/Locations'} className="bg-[#537D8D] px-4 py-2 text-white rounded">Order Now</button> */}
              <button onClick={initializeDB} className="bg-[#05204A] px-4 py-2 text-white mt-4 rounded">Start DB</button>
            </div>
          </div>
        </main>
      );
}

export default Home;