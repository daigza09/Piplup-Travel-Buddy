import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function LiveChat() {
    // State variables to hold user input
    const [userInput, setUserInput] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., API call for authentication)
        console.log("Email:", userInput);
        // Reset form fields after submission
        setuserInput("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300">
            <div className="container mx-auto bg-white rounded-md shadow-lg p-10  w-full " style={{ width: '100%', height: 'auto' }}>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Hello, I am the piplup chatbox! </h2>
                <h2 className="text-2xl font-semibold text-blue-500 mb-2">Please let me know your travel destination, your departing destination, time and date of your flights. </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="userInput" className="block text-sm font-medium text-gray-700">Chatbox</label>
                        <input
                            type="userInput"
                            id="userInput"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            placeholder="Textbox"
                            value={userInput}
                            onChange={(e) => setuserInput(e.target.value)}
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
            </div>
        </div>
    );
}

export default LiveChat;








