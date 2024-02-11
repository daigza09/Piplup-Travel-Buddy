import { useState } from "react";
import destinationBG from "../assets/destinationBG.jpg";

function UserInformation() {
  // Define state variables for user data and edit mode
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call updateUserProfile function (not defined in this code)
      // await updateUserProfile(userData);
      setIsEditing(false); // Exit edit mode
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  return (
    <main
      className="relative h-screen bg-cover flex items-center"
      style={{ backgroundImage: `url(${destinationBG})` }}
    >
      <div
        className="mx-auto bg-white rounded-md shadow-lg p-12 h-30 max-w-md w-full md:w-2/3 lg:w-1/2"
        style={{ width: "150%", height: "60%" }}
      >
        <h2 className="text-2xl font-bold text-blue-500 mb-4">
          Profile Management
        </h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name:
            </label>
            <input
              type="text"
              value={userData.first}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setUserData({ ...userData, first: e.target.value })
              }
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name:
            </label>
            <input
              type="text"
              value={userData.last}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setUserData({ ...userData, last: e.target.value })
              }
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              value={userData.email}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="tel"
              value={userData.phone}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              disabled={!isEditing} // Disable input if not in edit mode
            />
          </div>
          <button type="button" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Edit"}
          </button>
          {isEditing && (
            <span style={{ margin: "0 50px" }}>
              <button type="submit">Save</button>
            </span>
          )}
        </form>
      </div>
    </main>
  );
}

export default UserInformation;
