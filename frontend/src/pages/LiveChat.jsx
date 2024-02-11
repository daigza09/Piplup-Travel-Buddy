import React, { useState } from "react";
import { Link } from "react-router-dom";
import usCities from './usCities';

function LiveChat() {
  const [userInput, setUserInput] = useState("");
  const [departureCity, setDepartureCity] = useState(null);
  const [arrivalCity, setArrivalCity] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use the parsing script to extract information
    const parsedInfo = parseFlightRequest(userInput);

    // Update state with extracted information
    setDepartureCity(parsedInfo.departureCity);
    setArrivalCity(parsedInfo.arrivalCity);
    setDepartureDate(parsedInfo.departureDate);

    // Reset form fields after submission
    setUserInput("");
  };

  /*function parseFlightRequest(requestString) {
    const departureCityRegex = /from\s+([^\s]+)\s+to/i;
    const arrivalCityRegex = /to\s+([^\s]+(?:\s+[^\s]+)?)\s/i;
    const departureDateRegex = /leaves\s+on\s+(\S+\s+\d+)/i;

    const departureCityMatch = requestString.match(departureCityRegex);
    const arrivalCityMatch = requestString.match(arrivalCityRegex);
    const departureDateMatch = requestString.match(departureDateRegex);

    console.log("Departure City Match:", departureCityMatch);
    console.log("Arrival City Match:", arrivalCityMatch);
    console.log("Departure Date Match:", departureDateMatch);

    const departureCity = departureCityMatch ? checkCity(departureCityMatch[1]) : null;
    const arrivalCity = arrivalCityMatch ? checkCity(arrivalCityMatch[1]) : null;
    const departureDate = departureDateMatch ? formatMonthDay(departureDateMatch[1]) : null;

    console.log("Parsed Information:", { departureCity, arrivalCity, departureDate });

    return {
      departureCity,
      arrivalCity,
      departureDate,
    };
}

  
  function checkCity(city) {
    const formattedCity = city.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return usCities.includes(formattedCity) ? formattedCity : null;
  }
  function formatMonthDay(dateString) {
    const [month, day] = dateString.split(' ');
    return `${month} ${day}`;
  }*/
  function parseFlightRequest(requestString) {
    const departureCityRegex = /from\s+([^\s]+)\s+to/i;
    const arrivalCityRegex = /to\s+([^\s]+(?:\s+[^\s]+)?)\s/i;
    const departureDateRegex = /on\s+(\S+\s+\d+)/i;

    const departureCityMatch = requestString.match(departureCityRegex);
    const arrivalCityMatch = requestString.match(arrivalCityRegex);
    const departureDateMatch = requestString.match(departureDateRegex);

    console.log("Departure City Match:", departureCityMatch);
    console.log("Arrival City Match:", arrivalCityMatch);
    console.log("Departure Date Match:", departureDateMatch);

    const departureCity = departureCityMatch ? checkCity(departureCityMatch[1]) : null;
    const arrivalCity = arrivalCityMatch ? checkCity(arrivalCityMatch[1]) : null;
    const departureDate = departureDateMatch ? formatYearMonthDay(departureDateMatch[1]) : null;

    console.log("Parsed Information:", { departureCity, arrivalCity, departureDate });

    return {
      departureCity,
      arrivalCity,
      departureDate,
    };
}

function checkCity(city) {
    const formattedCity = city.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return usCities.includes(formattedCity) ? formattedCity : null;
}

function formatYearMonthDay(dateString) {
    const [month, day] = dateString.split(' ');
    const year = new Date().getFullYear(); // You can customize the year as needed
    const monthIndex = getMonthIndex(month);
    const formattedMonth = monthIndex !== -1 ? (monthIndex + 1).toString().padStart(2, '0') : null;

    return formattedMonth ? `${year}/${formattedMonth}/${day}` : null;
}

function getMonthIndex(month) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.findIndex(m => m.toLowerCase() === month.toLowerCase());
}
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300">
      <div className="container mx-auto bg-white rounded-md shadow-lg p-10 w-full" style={{ width: '100%', height: 'auto' }}>
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Hello, I am the piplup chatbox! </h2>
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">Please let me know your travel destination, your departing destination, departure date.</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="userInput" className="block text-sm font-medium text-gray-700">Chatbox</label>
            <input
              type="text"
              id="userInput"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              placeholder="Textbox"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Search
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Rather search traditionally?</span>
          <Link to="/Search" className="text-blue-500 hover:underline ml-1">Search</Link>
        </div>
        <div className="mt-4">
          {/* Display the extracted information */}
          <p>Departure City: {departureCity}</p>
          <p>Arrival City: {arrivalCity}</p>
          <p>Departure Date: {departureDate}</p>
        </div>
      </div>
    </div>
  );
}

export default LiveChat;