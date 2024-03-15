import proImg from "../images/professional-img.png";

function WePro() {
  return (
    <section className="w-full bg-[#d1e3ff] py-12">
      <div className="flex flex-row-reverse items-center sm:h-screen">
        <div className="px-3 flex flex-col gap-5">
          <h4 className="text-3xl font-bold">
            WE PROVIDE PROFESSIONAL HOME SERVICES.
          </h4>
          <p>
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All
            randomised words which don't look even slightly
          </p>
          <div>
            <button className="bg-yellow-600 px-9 py-3 text-white font-bold cursor-pointer">
              READ MORE
            </button>
          </div>
        </div>

        <div className="hidden sm:block">
          <div>
            <img src={proImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WePro;
