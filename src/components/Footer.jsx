import { IoIosCall } from "react-icons/io";

function Footer() {
  return (
    <section className="w-full h-full bg-blue-950 text-white py-12">
      <div>
        <div className="flex flex-col items-center sm:hidden">
          <h4 className="mb-12 font-bold text-3xl">GET IN TOUCH</h4>
          <div>
            <div className="w-[80px] h-[80px] bg-blue-700 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-600">
              <IoIosCall className=" text-white" />
            </div>
          </div>

          <div className="h-[10vh] w-1 border border-black-200 bg-black border"></div>

          <div>
            <div>Lorem lpsum is simply dummy text</div>
          </div>

          <div className="h-[10vh] w-1 border border-black-200 bg-black"></div>

          <div>
            <div className="w-[80px] h-[80px] bg-blue-700 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-600">
              <IoIosCall className=" text-white" />
            </div>
          </div>

          <div className="h-[10vh] w-1 border border-black-200 bg-black"></div>

          <div>
            <div>+123987</div>
          </div>

          <div className="h-[10vh] w-1 border border-black-200 bg-black"></div>

          <div>
            <div className="w-[80px] h-[80px] bg-blue-700 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-600">
              <IoIosCall className=" text-white" />
            </div>
          </div>

          <div className="h-[10vh] w-1 border border-black-200 bg-black"></div>

          <div>
            <div>mail@domain.com</div>
          </div>

          <div className="mt-5">
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl font-bold">FOLLOW US</p>
              <div className="flex items-center px-4 py-4 gap-3 bg-white">
                <IoIosCall className="text-blue-700 cursor-pointer" />
                <IoIosCall className="text-blue-700 cursor-pointer" />
                <IoIosCall className="text-blue-700 cursor-pointer" />
                <IoIosCall className="text-blue-700 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex flex-col items-center">
          <h4 className="mb-12 font-bold text-3xl">GET IN TOUCH</h4>

          <div>
            <div>
              <div className="flex items-center">
                <div>
                  <div className="w-[80px] h-[80px] bg-blue-700 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-600">
                    <IoIosCall className="text-w" />
                  </div>
                </div>

                <div className="w-[16vw] bg-zinc-950 h-1"></div>

                <div>
                  <div className="w-[80px] h-[80px] bg-blue-700 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-600">
                    <IoIosCall className="text-w" />
                  </div>
                </div>

                <div className="w-[16vw] bg-zinc-950 h-1"></div>

                <div>
                  <div className="w-[80px] h-[80px] bg-blue-700 rounded-full flex justify-center items-center cursor-pointer hover:bg-yellow-600">
                    <IoIosCall className="text-w" />
                  </div>
                </div>
              </div>
            </div>

            <div className="py-4 mt-6">
              <div className="h-[1px] w-full bg-slate-700">
                <div className="h-[1px] w-[90%]  bg-white mx-auto"></div>
              </div>

              <p className="text-center py-8">
                &#169; All Rights Reserved. By HTML Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
