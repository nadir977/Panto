import React, { useRef } from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoStarFill } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import chair4 from "../assets/chair4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    title: "Luxury facilities",
    description:
      "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
  },
  {
    title: "Affordable Price",
    description:
      "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities.",
  },
  {
    title: "Many Choices",
    description:
      "We provide many unique workspace choices so that you can choose to your liking.",
  },
];

const products = [
  { img: chair1, title: "Sakarias Armchair", price: 392 },
  { img: chair2, title: "Baltsar Chair", price: 292 },
  { img: chair3, title: "Anjay Chair", price: 519 },
  { img: chair4, title: "Nyantuy Chair", price: 921 },
  { img: chair1, title: "Sakarias Armchair", price: 392 },
  { img: chair2, title: "Baltsar Chair", price: 292 },
  { img: chair3, title: "Anjay Chair", price: 519 },
  { img: chair4, title: "Nyantuy Chair", price: 921 },
];

const BenefitCard = ({ title, description }) => (
  <div className="flex flex-col gap-2 text-center md:text-left items-center md:items-start">
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="text-[16px]">{description}</p>
    <button className="flex items-center gap-2 text-primary justify-center md:justify-start cursor-pointer hover:underline">
      More Info <LiaLongArrowAltRightSolid />
    </button>
  </div>
);

const Shop = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-bg">
      <div className="main_section text-text ">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center my-30 text-center md:text-left">
          <h2 className="text-4xl font-bold md:w-1/4">
            Why
            <br className="hidden sm:block" />
            Choosing Us
          </h2>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center md:items-start">
            {benefits.map((b) => (
              <BenefitCard key={b.title} {...b} />
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mt-20 mb-10">
          Best Selling Product
        </h2>

        <Tabs>
          <TabList className="flex justify-center items-center  sm:gap-6 mb-10 p-2 bg-[#EEEEEE] rounded-full w-fit mx-auto cursor-pointer">
            {["Chair", "Beds", "Sofa", "Lamp"].map((tab) => (
              <Tab
                key={tab}
                className="py-2 px-4 sm:px-6 rounded-full text-black outline-0 transition-colors duration-300"
                selectedClassName="bg-[#FFFFFF] "
              >
                {tab}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="relative">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black/50 [box-shadow:0px_7.03px_19.53px_0px_#0000000F] text-white p-3 rounded-full z-10 hover:bg-black transition"
              >
                <FaArrowLeft />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 [box-shadow:0px_7.03px_19.53px_0px_#0000000F] bg-black/50 text-white p-3 rounded-full z-10 hover:bg-black transition"
              >
                <FaArrowRight />
              </button>

              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper w-full mb-10"
              >
                {products.map((product, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col gap-3 p-4 bg-white rounded-lg">
                      <img src={product.img} alt={product.title} />
                      <p className="text-textp">Chair</p>
                      <div>
                        <h3 className="font-bold text-lg">{product.title}</h3>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <GoStarFill key={i} className="text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="font-bold">
                          <span className="text-[12px]">$</span>
                          {product.price}
                        </h3>
                        <div className="p-2 group bg-black rounded-full text-white cursor-pointer hover:scale-110 transition">
                          <FiPlus />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="text-center py-10">Beds coming soon...</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-center py-10">Sofa coming soon...</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="text-center py-10">Lamp coming soon...</h2>
          </TabPanel>
        </Tabs>
        <div className="flex justify-center mb-30">
          <button className="flex items-center gap-2 text-primary justify-center md:justify-start cursor-pointer hover:underline">
            View All <LiaLongArrowAltRightSolid />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
