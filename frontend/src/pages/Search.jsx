import React, { useState } from "react";
import destinationBG from "../assets/destinationBG.jpg";
import "./Search.css";
function Search() {
  return (
    <main
      className="relative h-screen bg-cover"
      style={{ backgroundImage: `url(${destinationBG})` }}
    >
      <div className="container-sm">
        <div className="my-2 card">
          <div className="card-body">
            <h5 className="card-title">Locations</h5>
            <div className="row">
              <div className="col-sm">
                <div className="mb-2">
                  <label
                    id="origin-label"
                    htmlFor="origin-input"
                    className="form-label"
                  >
                    Origin
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi-pin-map"></i>{" "}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      list="origin-options"
                      id="origin-input"
                      placeholder="Location"
                      aria-describedby="origin-label"
                    />
                    <datalist id="origin-options"></datalist>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="mb-2">
                  <label
                    id="destination-label"
                    htmlFor="destination-input"
                    className="form-label"
                  >
                    Destination
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <i className="bi-pin-map-fill"></i>{" "}
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      list="destination-options"
                      id="destination-input"
                      placeholder="Location"
                      aria-describedby="destination-label"
                    />
                    <datalist id="destination-options"></datalist>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="mb-2 col">
          <div className="h-100 card">
            <div className="card-body">
              <h5 className="card-title">Dates</h5>
              <div className="mb-2">
                <label
                  id="flight-type-label"
                  htmlFor="flight-type-select"
                  className="form-label"
                >
                  Flight
                </label>
                <select
                  id="flight-type-select"
                  className="form-select"
                  aria-describedby="flight-type-label"
                >
                  <option value="one-way">One-way</option>
                  <option value="round-trip">Round-trip</option>
                </select>
              </div>
              <div id="departure-date" className="mb-2">
                <label
                  id="departure-date-label"
                  htmlFor="departure-date-input"
                  className="form-label"
                >
                  Departure date
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi-calendar"></i>
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="departure-date-input"
                    aria-describedby="departure-date-label"
                  />
                </div>
              </div>
              <div id="return-date" className="mb-2">
                <label
                  id="return-date-label"
                  htmlFor="return-date-input"
                  className="form-label"
                >
                  Return date
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi-calendar-fill"></i>{" "}
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="return-date-input"
                    aria-describedby="return-date-label"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 col">
          <div className="h-100 card">
            <div className="card-body">
              <h5 className="card-title">Details</h5>
              <div className="mb-2">
                <label
                  id="travel-class-label"
                  htmlFor="travel-class-select"
                  className="form-label"
                >
                  Travel class
                </label>
                <select
                  className="form-select"
                  id="travel-class-select"
                  aria-describedby="travel-class-label"
                >
                  <option value="ECONOMY">Economy</option>
                  <option value="PREMIUM_ECONOMY">Premium Economy</option>
                  <option value="BUSINESS">Business</option>
                  <option value="FIRST">First</option>
                </select>
              </div>
              <div className="mb-2">
                <div className="input-group">
                  <label htmlFor="adults-input" className="input-group-text">
                    Adults
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="adults-input"
                    aria-describedby="adults-label"
                  />
                </div>
                <span id="adults-label" className="form-text">
                  12 years old and older
                </span>
              </div>
              <div className="mb-2">
                <div className="input-group">
                  <label htmlFor="children-input" className="input-group-text">
                    Children
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="children-input"
                    aria-describedby="children-label"
                  />
                </div>
                <span id="children-label" className="form-text">
                  2 to 12 years old
                </span>
              </div>
              <div className="mb-2">
                <div className="input-group">
                  <label htmlFor="infants-input" className="input-group-text">
                    Infants
                  </label>
                  <input
                    type="number"
                    min="0"
                    className="form-control"
                    id="infants-input"
                    aria-describedby="infants-label"
                  />
                </div>
                <span id="infants-label" className="form-text">
                  Up to 2 years old
                </span>
              </div>
              <div className="mb-2">
                <button
                  id="search-button"
                  className="w-100 btn btn-primary"
                  disabled
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
  
  const originInput = document.getElementById("origin-input");
  const originOptions = document.getElementById("origin-options");
  const destinationInput = document.getElementById("destination-input");
  const destinationOptions = document.getElementById("destination-options");
  const flightTypeSelect = document.getElementById("flight-type-select");
  const departureDateInput = document.getElementById("departure-date-input");
  const returnDate = document.getElementById("return-date");
  const returnDateInput = document.getElementById("return-date-input");
  const travelClassSelect = document.getElementById("travel-class-select");
  const adultsInput = document.getElementById("adults-input");
  const childrenInput = document.getElementById("children-input");
  const infantsInput = document.getElementById("infants-input");
  const searchButton = document.getElementById("search-button");

  const reset = () => {
    originInput.value = "";
    destinationInput.value = "";
    flightTypeSelect.value = "one-way";
    departureDateInput.valueAsDate = new Date();
    returnDateInput.valueAsDate = new Date();
    returnDate.classList.add("d-none");
    travelClassSelect.value = "ECONOMY";
    adultsInput.value = 1;
    childrenInput.value = 0;
    infantsInput.value = 0;
    searchButton.disabled = true;
  };

  document.body.addEventListener("input", () => {
    searchButton.disabled = !originInput.value || !destinationInput.value;
  });
  originInput.addEventListener("input", () => {
    // autocomplete
  });
  destinationInput.addEventListener("input", () => {
    // autocomplete
  });
  flightTypeSelect.addEventListener("change", () => {
    if (flightTypeSelect.value === "one-way") {
      returnDate.classList.add("d-none");
    } else {
      returnDate.classList.remove("d-none");
    }
  });
  searchButton.addEventListener("click", async () => {
    // search
  });
  reset();
}

export default Search;
