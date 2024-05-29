/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "react-slick";

import pro1 from '../assets/profil1.jpg'
import pro2 from '../assets/profil2.jpg'
import pro3 from '../assets/profil3.jpg'




const settings = {
  dots: false,
  arrows: false,
  loop: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  mobileFirst: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
};

  const TestimonialData = [
    {
      id: 1,
      name: "Samuel",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: pro1,
    },
    {
      id: 2,
      name: "John Doe",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: pro2,
    },
    {
      id: 3,
      name: "Smith",
      testimonial:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: pro3,
    },
  ];

const Testimonials = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-8 py-16">
        <div className="flex flex-col text-center justify-center mb-16">
            <h3 
             data-aos="fade-up"
            className="text-sky-500 text-xl">What our customers say</h3>
            <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-bold text-4xl  ">Testimonial</h1>
            <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-sm py-5 text-slate-700  font-light max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt
            </p>

        </div>
        {/* testimonial */}
        <div className="max-w-[600px] mx-auto ">
            <Slider {...settings} >
                {TestimonialData.map((data) => (
                    <div 
                    data-aos="fade-up"
                    key={data.id}>
                      <div className="text-center shadow-xl p-4 rounded-xl space-y-3 my-8 mx-5">
                          <img
                          className="rounded-full block mx-auto w-20 h-20 object-cover"
                          src={data.img}
                          alt=""
                          />
                          <p className="text-sm">{data.testimonial}</p>
                          <h1 className="text-xl font-bold">{data.name}</h1>
                      </div>
                    </div>
                ))}
            </Slider>
           
        </div>

    </div>
  )
}

export default Testimonials