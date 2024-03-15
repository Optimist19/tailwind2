import construction from "../images/construction.svg";
import maintenance from "../images/maintenance.svg";
import about from "../images/about-img.jpg";
import tools from "../images/tools.svg";

function AboutUs() {
  return (
    <section className="w-full p-12">
      <div className="flex flex-col gap-12 items-center mb-12 sm:flex-row -mt-[22%]">
        <div className="flex flex-col items-center w-[90%] py-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer  hover:bg-yellow-600">
          <div className="w-[16vw]">
            <img src={construction} className="w-[full]" alt="" />
          </div>
          <p>REPAIR</p>
        </div>

        <div className="flex flex-col items-center w-[90%] py-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer  hover:bg-yellow-600">
          <div className="w-[16vw]">
            <img src={maintenance} className="w-[full]" alt="" />
          </div>
          <p>IMPROVEMENT</p>
        </div>

        <div className="flex flex-col items-center w-[90%] py-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 cursor-pointer  hover:bg-yellow-600">
          <div className="w-[16vw]">
            <img src={tools} alt="" className="w-[full]" />
          </div>
          <p>MAINTENANCE</p>
        </div>
      </div>

      <div className="flex flex-col gap-9 sm:flex-row pt-[10%]">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">ABOUT US</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomisedThere are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised
          </p>
          <div>
            <button className="bg-blue-700 px-9 py-3 text-white font-bold cursor-pointer">READ MORE</button>
          </div>
        </div>
        <div>
          <div className="sm:w-[60vw]">
            <img src={about} alt="" className="w-full sm:w-[100%]"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
