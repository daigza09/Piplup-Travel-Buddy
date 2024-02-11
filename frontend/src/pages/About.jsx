import { Link } from "react-router-dom";
import AustinTX from "../assets/austinTX.jpeg";
import laCali from "../assets/losangelesCali.jpg";
import washington from "../assets/washington.jpg";

function About() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-blue-200 to-gray-300">
      <div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex justify-between">
            <section className="container mx-auto">
            <h1 className="text-5xl font-bold">Who we are</h1>
<p className="text-base mt-8">
  Welcome to Piplup Luvers – your gateway to delightful and secure air travel experiences. We take pride in offering passengers 
</p>
<p className="text-base">
a seamless journey marked by safety, reliability, and comfort. Our commitment goes beyond flights; it extends to connecting 
</p>
<p className="text-base">
people, places, and cultures. At Piplup Luvers, we believe in fostering memorable experiences that transcend the bounds of traditional air travel.
</p>

            </section>
          </div>
        </div>
        <div className="flex">
          <section className="container mx-auto mt-8 p-8 bg-[#ffffff] border border-black border-4 rounded-2xl">
            <h1 className="text-5xl mx-auto mb-8 font-bold text-blue-500 text-center">
              Recommended Flight Locations
            </h1>
            <div className="flex mx-auto justify-between">
              <div className="text-center mr-10">
                <img
                  className="border border-black border-4 rounded-md mb-4 object-cover"
                  src={AustinTX}
                  style={{ width: "400px", height: "300px" }}
                  alt="Austin, TX"
                />
                <div>
                  <p className="font-bold border border-black rounded-md mb-2">
                    Austin, TX
                  </p>
                </div>
              </div>
              <div className="text-center mr-10">
                <img
                  className="border border-black border-4 rounded-md mb-4 object-cover"
                  src={laCali}
                  style={{ width: "400px", height: "300px" }}
                  alt="Los Angeles, CA"
                />
                <div>
                  <p className="font-bold border border-black rounded-md mb-2">
                    Los Angeles, CA
                  </p>
                </div>
              </div>
              <div className="text-center mr-10">
                <img
                  className="border border-black border-4 rounded-md mb-4 object-cover"
                  src={washington}
                  style={{ width: "400px", height: "300px" }}
                  alt="Washington, DC"
                />
                <div>
                  <p className="font-bold border border-black rounded-md mb-2">
                    Washington, DC
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="flex items-center justify-between ">
          <section className="container mx-auto mb-16">
            <h1 className="text-5xl font-bold mt-16">Team Behind the Code</h1>
            <p className="text-base mr-16 mt-8">
            The Piplup Luvers team is composed of a dedicated group of 
            coders, including Daisy, Lisa, Reem, and Colin. All team
            </p>
            <p>
            members are passionate computer science majors, bringing their
            unique skills and expertise to ensure the success and innovation 
            </p>
            <p>
            of our projects. Together, we collaborate seamlessly to deliver 
            cutting-edge solutions and contribute to the continued growth and excellence of our endeavors.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
export default About;
