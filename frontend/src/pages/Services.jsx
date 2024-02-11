import { Link } from "react-router-dom";
import chatBot from "../assets/chatbotIcon.png";
import flightSearch from "../assets/flightSearch.png";
import personIcon from "../assets/personIcon.png";
import supportIcon from "../assets/supportIcon.png";

function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300">
      <section className="flex items-center justify-center p-8">
        <div className="font-bold text-5xl text-center">
          <h1>Services we Provide</h1>
        </div>
      </section>
      <div className="flex justify-center">
  <section className="grid grid-cols-2 gap-36 mt-8">
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10 flex flex-col items-center">
    <img
        src={chatBot}
        style={{width:'50px'}}
        className="justify-center mb-3"
        />
      <h1 className="text-xl font-bold text-center">Chatbot</h1>
      <div className="text-center">
        <p className="mt-4">
          Our chatbot allows you to find the flights you
        </p>
        <p>
          want with ease - no more drop down menus and 
        </p>
        <p>
          manual input.
        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10 flex flex-col items-center">
    <img
        src={flightSearch}
        style={{width:'50px'}}
        className="justify-center mb-3"
        />
      <h1 className="text-xl font-bold text-center">Flight Searching</h1>
      <div className="text-center">
      <p className="mt-4">
        We find you the best deals on flights, no matter
        </p>
        <p>
          where you're flying. The Amadeus API allows us
        </p>
        <p>
          to provide you with the information you need.
        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10 mb-16 flex flex-col items-center">
    <img
        src={personIcon}
        style={{width:'50px'}}
        className="justify-center mb-3"
        />
      <h1 className="text-xl font-bold text-center">A Personalized Experience</h1>
      <div className="text-center">
        <p className="mt-4">
          All of our users are offered a personal
        </p>
        <p>
          experience through our account system.
        </p>
        <p>

        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10 mb-16 flex flex-col items-center">
    <img
        src={supportIcon}
        style={{width:'50px'}}
        className="justify-centers"
        />
      <h1 className="text-xl font-bold text-center">Support</h1>
      <div className="text-center">
        <p className="mt-4">
          We strive to provide the utmost care and
          </p>
          <p>
          support to our customers and users
        </p>
        <p>
          and address any issues that may
        </p>
        <p>
          arise.
        </p>
      </div>
    </div>
  </section>
</div>
    </main>
  );
}
export default Services;
