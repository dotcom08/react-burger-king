/* eslint-disable no-unused-vars */
import { useState } from 'react';
import burger1 from '../assets/burger/burger1.png'
import burger2 from '../assets/burger/burger2.png'
import burger3 from '../assets/burger/burger3.png'

import banner from '../assets/vector.png'




const ImageList = [
    {
      id: 1,
      img: burger1,
    },
    {
      id: 2,
      img: burger2,
    },
    {
      id: 3,
      img: burger3,
    },
  ];

const Hero = () => {


    const [image, setImage] = useState(burger1)
  return (
    <div className='relative min-h-screen  md:h-[640px]  w-full'>
        <img src={banner} alt="/" className='w-full h-full object-cover absolute -z-10'/>
        <div className="h-full bg-black/10 backdrop-blur-md flex justify-center items-center ">
            {/* container */}
        <div className="max-w-[1140px] px-8 mx-auto  z-[100] py-16">
            <div className='grid grid-cols-1 md:grid-cols-2'>
                {/* text */}
                <div className='text-center md:text-left md:flex flex-col items-center justify-center'>
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                >
                  Welcome to{" "}
                  <span
                    className='text-sky-500 md:text-sky-400'
                  >
                    Burger
                  </span>{" "}
                  King
                </h1>
                    <p 
                    data-aos='fade-up'
                    className='pt-5 '>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio
                    </p>
                    <button 
                    data-aos="fade-up" data-aos-delay="300"
                    className='px-4 py-2 text-black font-semibold text-xl bg-gradient-to-r from-sky-500 to-sky-200 rounded-full mt-5 hover:scale-105 border border-white md:self-start'>Order Now</button>
                </div>
                {/* burger */}
                <div className='md:p-8 '>

                    <div className='flex items-center justify-center'>
                        <img src={image} alt="/" className='hover:scale-105 transition duration-300 w-[400px]'/>
                    </div>
                    <div 
                    data-aos="zoom-in" data-aos-offset="0"
                    className='max-w-[500px] flex items-center justify-center gap-6 border rounded-full backdrop-blur-lg '>
                        {ImageList.map((item, index)=>(
                            <div 
                            onClick={()=>{
                                setImage(
                                    item.id === 1 ?
                                    burger1 : item.id ===2 ?
                                    burger2 : burger3
                                )
                            }}
                            key={index}
                            className='cursor-pointer hover:scale-105 transition duration-300'>
                                <img src={item.img} alt="/" className='w-20 h-20 object-cover'/>
                            </div>
                        ))}
                    </div>
                    
                </div>                       

                        
            </div>
         </div>


        </div>
         
    </div>
  )
}

export default Hero