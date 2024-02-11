import React from "react";
import destinationBG from "../assets/destinationBG.jpg";
import "./Search.css";

function Search() {
  const dataDeparture = ["Houston", "Austin", "Dallas"];
  const dataArrival = ["Washington", "california", "kentucky"];

  return (
    <main
      className="relative h-screen bg-cover"
      style={{ backgroundImage: `url(${destinationBG})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto text-center relative flex items-center justify-center h-full">
        <div className="bg-white py-14 px-40 bg-opacity-70 rounded-lg">
          <h1 className="text-7xl font-bold text-[#05204A] mb-4">
            Looking for a flight?
          </h1>
          <p className="text-xl text-[#05204A] mb-8">Let us help!</p>

          <div className="main">
            <div id="departure">
              <input
                list="departureList"
                placeholder="Departure"
                style={{ width: "200px" }}
              />
              <datalist id="departureList">
                {dataDeparture.map((op) => (
                  <option key={op}>{op}</option>
                ))}
              </datalist>
            </div>

            <div id="arrival">
              <input
                list="arrivalList"
                placeholder="Arrival"
                style={{ width: "200px" }}
              />
              <datalist id="arrivalList">
                {dataArrival.map((op) => (
                  <option key={op}>{op}</option>
                ))}
              </datalist>
              <label for="datepicker">Arrival Date:</label>
              <input
                type="date"
                id="datepicker"
                name="datepicker"
                style={{ width: "130px" }}
              ></input>
              <label for="datepicker">Departure Date:</label>
              <input
                type="date"
                id="datepicker"
                name="datepicker"
                style={{ width: "130px" }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Search;
