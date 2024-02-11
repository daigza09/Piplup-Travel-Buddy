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
      <div className="flex">
        <p className="mt-4">
          Chatbot explanation
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
      <div className="flex">
      <p className="mt-4">
        Flight searching explanation
        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10 mb-16 flex flex-col items-center">
    <img
        src={personIcon}
        style={{width:'50px'}}
        className="justify-center mb-3"
        />
      <h1 className="text-xl font-bold text-center">A Personalised Experience</h1>
      <div className="flex">
        <p className="mt-4">
          Personalised experience explanation
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
      <div className="flex">
        <p className="mt-4">
          Support Explanation
        </p>
      </div>
    </div>
  </section>
</div>
    </main>
  );
}
export default Services;
