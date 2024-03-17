import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import maintenance from "../images/s1.png";
import elect from "../images/s2.png";
import plumbing from "../images/s3.png";

import { testimonies } from "../data";

import { FaStar } from "react-icons/fa6";

function OurServices() {
  const [data, setData] = useState(testimonies);

  return (
    <section>
      <div className="px-3 py-12">
        <h3 className="text-center py-3 text-2xl font-bold pb-8">
          OUR SERVICES
        </h3>
        <div className="flex flex-col py-4 gap-5 sm:flex-row items-center">
          <div className="flex flex-col gap-3 items-center border py-9 rounded shadow-md hover:bg-yellow-600 px-2">
            <div className="w-[15%]">
              <img src={maintenance} alt="" className="w-full" />
            </div>
            <p className="font-bold">Maintenance</p>
            <p className="text-center">
              when looking at its layout. The point of using Lorem Ipsum isthat
              it has a more-or-less normal
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center border py-9 rounded shadow-md hover:bg-yellow-600 px-2">
            <div className="w-[15%]">
              <img src={elect} alt="" className="w-full" />
            </div>
            <p className="font-bold">Electircal</p>
            <p className="text-center">
              when looking at its layout. The point of using Lorem Ipsum isthat
              it has a more-or-less normal
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center border py-9 rounded shadow-md hover:bg-yellow-600 px-2">
            <div className="w-[15%]">
              <img src={plumbing} alt="" className="w-full" />
            </div>
            <p className="font-bold">Plumbing</p>
            <p className="text-center">
              when looking at its layout. The point of using Lorem Ipsum isthat
              it has a more-or-less normal
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-700 px-9 py-3 text-white font-bold cursor-pointer">
            VIEW MORE
          </button>
        </div>
      </div>

      <div>
        <div>
          <div>
            <h4 className="text-center my-12 text-2xl font-bold">WHAT OUR CLIENTS SAY</h4>
          </div>
          <div className="sm:w-[60%] sm:flex sm:mx-auto">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper">
              
                {data.map((clients, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="py-6 px-3 shadow-2xl shadow-[#d1e3ff] mx-2 px-4">
                        <div className="flex gap-2">
                          <div className="w-14 sm:w-32">
                            <img
                              src={clients.pic}
                              alt=""
                              className="w-full rounded-full"
                            />
                          </div>
                          <div>
                            <p className="text-[9px] sm:text-[18px]">{clients.name}</p>
                            <div className="flex">
                              <FaStar className="text-yellow-600 text-[10px] sm:text-[18px]" />
                              <FaStar className="text-yellow-600 text-[10px] sm:text-[18px]" />
                              <FaStar className="text-yellow-600 text-[10px] sm:text-[18px]" />
                              <FaStar className="text-yellow-600 text-[10px] sm:text-[18px]" />
                            </div>
                          </div>
                        </div>
                        <p className="text-[8px] py-4 sm:text-[18px] sm:text-justify">{clients.text}</p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
