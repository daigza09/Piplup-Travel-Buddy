import { Link } from "react-router-dom";
import AustinTX from "../assets/austinTX.jpeg";


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
      <div className="flex items-center justify-between bg-[#ffffff]">
        <section className="container mx-auto mt-8 p-8 bg-[#A3A3A3] rounded-2xl" >
          <h1 className="text-5xl max-w-md p-8 text-[#ffffff]">Recommended Flight Locations</h1>
          <img src={AustinTX} style={{width:'400px'}}></img>
        </section>
      </div>
    </main>
  );
}
export default About;