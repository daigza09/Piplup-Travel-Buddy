import React, { useState } from "react";

function Account() {
    // State variables to hold user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., API call for authentication)
        console.log("Email:", email);
        console.log("Password:", password);
        // Reset form fields after submission
        setEmail("");
        setPassword("");
    };

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300"
        >
            <div className="container mx-auto bg-white rounded-md shadow-lg p-8 max-w-md w-full md:w-2/3 lg:w-1/2" style={{ width: '90%', height: 'auto' }}>
                <h2 className="text-2xl font-bold text-blue-500 mb-4">User Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Account;







