import SimpleMap from "./map/SimpleMap";

function ContactUs() {
  return (
    <section className="w-full py-12">
      <div className="sm:grid sm:grid-flow-col px-4">
        <div className="px-3">
        <h4 className="text-2xl font-bold pb-5 mb-5 "> Contact Us</h4>
          <form className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Name"
              className="w-full shadow-lg outline-none px-2 py-3"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full shadow-lg outline-none px-2 py-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full shadow-lg outline-none px-2 py-3"
            />
            <textarea
              placeholder="Message"
              className="w-full shadow-lg outline-none px-2 py-12"
            />
          </form>
          <div className="my-6">
            <button className="bg-blue-700 px-9 py-3 text-white cursor-pointer">
              SEND
            </button>
          </div>
        </div>
        <div className="hidden sm:block">
          <SimpleMap />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
