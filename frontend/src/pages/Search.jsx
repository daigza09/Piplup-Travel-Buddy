import React from "react";
import homeBG from "../assets/homeBG.jpg";
import "./Search.css";

function Search() {
  const dataDestination = ["Houston", "Austin", "Dallas"];
  const dataArrival = ["Washington", "california", "kentucky"];

  return (
    <main
      className="relative h-screen bg-cover"
      style={{ backgroundImage: `url(${homeBG})` }}
    >
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="container mx-auto text-center relative flex items-center justify-center h-full">
        <div className="bg-white py-14 px-40 bg-opacity-70">
          <h1 className="text-7xl font-bold text-[#05204A] mb-4">
            Looking for a flight?
          </h1>
          <p className="text-xl text-[#05204A] mb-8">Let us help!</p>

          <div className="main">
            <input list="destinationList" placeholder="Destination" />
            <datalist id="destinationList">
              {dataDestination.map((op) => (
                <option key={op}>{op}</option>
              ))}
            </datalist>

            <input list="arrivalList" placeholder="Arrival" />
            <datalist id="arrivalList">
              {dataArrival.map((op) => (
                <option key={op}>{op}</option>
              ))}
            </datalist>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Search;