import { Link } from "react-router-dom";
import AustinTX from "../assets/austinTX.jpeg";
import laCali from "../assets/losangelesCali.jpg";
import washington from "../assets/washington.jpg";


function About(){
  return (
    <main>
      <div className="flex items-center justify-between bg-[#ffffff] p-4 ">
        <div className="flex justify-between">
          <section className="container mx-auto mt-8 p-8">
            <h1 className="text-5xl ml-8">Who we are</h1>
          </section>
        </div>
        <div className="flex justify-between">
          <p className="text-base text-right max-w-md mr-16 mt-8">At Piplup Luvers, we are committed to providing 
          safe, reliable, and comfortable air travel experiences for our passengers. 
          Our mission is to connect people, places, and cultures through seamless 
          and enjoyable flights.</p>
        </div>
      </div>
      <div className="flex bg-[#ffffff]">
        <section className="container mx-auto mt-8 p-8 bg-[#ffffff] border border-black rounded-2xl">
          <h1 className="text-5xl mx-auto mb-8 text-center">Recommended Flight Locations</h1>
          <div className="flex mx-auto justify-center">
            <div className="text-center mr-4">
              <img className="border border-black rounded-md mb-4 object-cover" src={AustinTX} style={{ width: '400px', height: '300px' }} alt="Austin, TX" />
              <p className="font-bold border border-black rounded-md">Austin, TX</p>
            </div>
            <div className="text-center mr-4">
              <img className="border border-black rounded-md mb-4 object-cover" src={laCali} style={{ width: '400px', height: '300px' }} alt="Los Angeles, CA" />
              <p className="font-bold border border-black rounded-md">Los Angeles, CA</p>
            </div>
            <div className="text-center mr-4">
              <img className="border border-black rounded-md mb-4 object-cover" src={washington} style={{ width: '400px', height: '300px' }} alt="Washington, DC" />
              <p className="font-bold border border-black rounded-md">Washington, DC</p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex items-center justify-between bg-[#ffffff]">
        <section className="container mx-auto mb-16 bg-[#ffffff]">
          <h1 className="text-5xl mt-16 ml-16">Team Behind the Code</h1>
        </section>
          <p className="text-base text-right max-w-md mr-16 mt-8">A dedicated team of coders consisting of 
          Daisy, Lisa, Reem, and Colin. All of us are computer science majors</p>
      </div>
    </main>
  );
}
export default About;