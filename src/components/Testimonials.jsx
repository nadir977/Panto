import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import unsplash1 from "../assets/unsplash1.png";
import unsplash2 from "../assets/unsplash2.png";
import unsplash3 from "../assets/unsplash3.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

const testimonials = [
  {
    client: "Bang Upin",
    role: "Pedagang Asongan",
    image: client1,
    bg: unsplash1,
    review:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
  },
  {
    client: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    image: client2,
    bg: unsplash2,
    review:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: 4,
  },
  {
    client: "Mpok Ina",
    role: "Karyawan Swasta",
    image: client3,
    bg: unsplash3,
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
  {
    client: "Bang Upin",
    role: "Pedagang Asongan",
    image: client1,
    bg: unsplash1,
    review:
      "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
    rating: 4,
  },
  {
    client: "Ibuk Sukijan",
    role: "Ibu Rumah Tangga",
    image: client2,
    bg: unsplash2,
    review:
      "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
    rating: 4,
  },
  {
    client: "Mpok Ina",
    role: "Karyawan Swasta",
    image: client3,
    bg: unsplash3,
    review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
    rating: 4,
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);

  return (
    <div className="main_section h-[80vh] flex flex-col justify-center items-center gap-6 my-20 relative">
      <h3 className="text-lg text-primary">Testimonials</h3>
      <h2 className="text-4xl font-bold  mb-8">Our Client Reviews</h2>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper w-full h-full mb-20"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-screen bg-cover bg-center relative rounded-xl shadow-[0_40px_60px_-30px_rgba(0,0,0,0.6)]"
            style={{ backgroundImage: `url(${t.bg})` }}
          >
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl px-4 pt-14 pb-5 text-center">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <img
                  src={t.image}
                  alt={t.client}
                  className="w-14 h-14 rounded-full border-4 border-white object-cover"
                />
              </div>

              <h4 className="font-semibold text-lg text-gray-900">
                {t.client}
              </h4>
              <p className="text-gray-400 text-sm">{t.role}</p>

              <p className="text-gray-500 text-sm leading-relaxed px-2 mt-2">
                {t.review}
              </p>

              <div className="mt-4 flex justify-center gap-1">
                {[...Array(5)].map((_, i) =>
                  i < t.rating ? (
                    <GoStarFill key={i} className="text-yellow-400" />
                  ) : (
                    <FiStar key={i} className="text-gray-300" />
                  )
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden md:block absolute top-1/2 -left-1 transform -translate-y-1/2 bg-black/50 [box-shadow:0px_7.03px_19.53px_0px_#0000000F] text-white p-3 rounded-full z-10 hover:bg-black transition"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden md:block absolute top-1/2 -right-1 transform -translate-y-1/2 bg-black/50 [box-shadow:0px_7.03px_19.53px_0px_#0000000F] text-white p-3 rounded-full z-10 hover:bg-black transition"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Testimonials;
