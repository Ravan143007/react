// import { useState } from "react";
import UserImg from "../assets/photo.jpg";
import Img1 from "../assets/project/1.jpeg";
import Img2 from "../assets/project/2.jpeg";
import Img3 from "../assets/project/3.png";
import Img4 from "../assets/project/4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Navigation module

// import required modules
import { Navigation } from "swiper/modules";

function Home() {
  const images = [UserImg, Img1, Img2, Img3, Img4];
  return (
    <Fade left>
      <div className="relative pt-20 flex flex-col items-center max-w-screen-lg mx-auto">
        <img
          src={UserImg}
          alt="user Img"
          style={{
            animation: `bounce 1s infinite alternate`,
          }}
          className="w-36 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-max text-center my-2">
          Hi I'm Reventh Varma Peddasinghu
        </h1>
        <h1 className="text-center font-max text-5xl mt-2">
          Associate Software Engineer
        </h1>
        <h1 className="text-center font-max text-5xl my-1">
          A Master's Student
        </h1>
        <p className="text-center font-min text-base my-4">
          A Frontend Developer and Visual Designer with experience in web design
          and product design.
        </p>
        <button className="bg-black my-10 dark:bg-white  text-white dark:text-black px-6 py-2.5 rounded-full uppercase text-sm">
          Connect with me
        </button>
      </div>
      <div className="Slider mt-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                loading="lazy"
                src={img}
                alt="my imng"
                className="shadow-slate-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fade>
  );
}

export default Home;
