import engineer from "../images/slider-img.png";
import SecondNav from "./nav/SecondNav";

function Home() {
  return (
    <section className="home bg-[#d1e3ff]  sm:pb-[12%]">
      <SecondNav />
      <div className="flex pt-[14%] flex-col gap-8 sm:flex sm:flex-row">
        <div className="pl-5 ">
          <h2 className="text-3xl text-blue-700 mb-4">
            Repair and <br /> Maintenance <br /> Services
          </h2>
          <p className="text-left mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <button className="px-10 py-3 bg-yellow-600">CONTACT US</button>
        </div>
        <div>
          <div className="sm:pr-10">
            <img src={engineer} alt="" className="w-[400px] min-w-[250px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
