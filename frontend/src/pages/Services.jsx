import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300">
      <section className="flex items-center justify-center p-8">
        <div className="font-bold text-5xl text-center">
          <h1>Services we Provide</h1>
        </div>
      </section>
      <div className="flex justify-center">
  <section className="grid grid-cols-2 gap-48 mt-8">
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10">
      <h1 className="text-xl font-bold text-center">AI Chatbot</h1>
      <div className="flex">
        <p className="mt-4">
          AI Chatbot stuff
        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10">
      <h1 className="text-xl font-bold text-center">Flight Searching</h1>
      <div className="flex">
      <p className="mt-4">
        Flight searching explanation
        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10">
      <h1 className="text-xl font-bold text-center">A Personalised Experience</h1>
      <div className="flex">
        <p className="mt-4">
          Personalised experience explanation
        </p>
      </div>
    </div>
    <div className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-10">
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
