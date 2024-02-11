import { Link } from "react-router-dom";
import locationPin from "../assets/locationPin.png";
import bluePhone from "../assets/bluePhone.png";
import blueMail from "../assets/blueMail.png";

function Contact() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300 justify-center items-center">
      <section className="flex text-left">
        <div className="mx-auto mr-8">
          <h1 className="font-bold text-left text-4xl mb-8">Talk to Us</h1>
          <p className="text-xl mr-8">
            Any questions, comments, or concerns can be answered in the boxes on
            the right.
          </p>
          <p className="mb-8 text-xl mr-8">
            A representative will speak to you as soon as possible. Our contact
            info is also below.
          </p>
          <div className="flex">
            <img
              src={locationPin}
              style={{ width: "20px" }}
              className="mr-4"
            ></img>
            <p className="text-lg font-bold">
              132, My Street, Kingston, New York 12401
            </p>
          </div>
          <div className="flex mt-4">
            <img
              src={bluePhone}
              style={{ width: "25px" }}
              className="mr-4"
            ></img>
            <p className="text-lg font-bold">123-456-7890</p>
          </div>
          <div className="flex mt-4">
            <img
              src={blueMail}
              style={{ width: "25px" }}
              className="mr-4"
            ></img>
            <p className="text-lg font-bold">firstlastname@somewebsite.com</p>
          </div>
          <div className="flex"></div>
        </div>
        <div>
          <section className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-8">
            <div className="flex w-full">
              <div className="flex flex-col w-1/2 mr-4">
                <input
                  className="mt-3 p-3 border border-gray-300 rounded-md w-full"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col w-1/2">
                <input
                  className="mt-3 p-3 border border-gray-300 rounded-md w-full"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <input
              className="mt-3 p-3 border border-gray-300 rounded-md w-full"
              type="text"
              id="email"
              placeholder="Email*"
            />
            <input
              className="mt-3 p-3 border border-gray-300 rounded-md w-full"
              type="text"
              id="phoneNumber"
              placeholder="Phone Number*"
            />
            <input
              className="mt-3 p-3 h-20 border border-gray-300 rounded-md w-full"
              type="text"
              id="userMsg"
              placeholder="Your message..."
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white mt-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit Message
            </button>
          </section>
        </div>
      </section>
    </main>
  );
}

export default Contact;
