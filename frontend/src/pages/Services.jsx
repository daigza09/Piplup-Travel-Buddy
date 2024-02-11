import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300">
      <section className="flex items-center justify-center p-8">
        <div className="font-bold text-5xl text-center">
          <h1>Services we Provide</h1>
        </div>
      </section>
      <div className="flex">
        <section className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-8">
          <div>
            <h1>Chatbot</h1>
          </div>
          <div className="mt-8">
            <h1>Something else</h1>
          </div>
        </section>
        <section className="bg-[#ffffff] container bg-white rounded-md shadow-lg p-8">
          <div>
            <h1>Chatbot</h1>
          </div>
          <div className="mt-8">
            <h1>Something else</h1>
          </div>
        </section>
      </div>
    </main>
  );
}
export default Services;
