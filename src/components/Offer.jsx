import burger4 from '../assets/burger/burger5.png'

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Offer = () => {
  return (
    <div className="max-w-[1140px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 place-items-center">
            {/* image */}
            <div data-aos="flip-up">
                <img src={burger4} alt="/" className=''/>
            </div>
            <div>
                <h2 data-aos="fade-up" className='text-4xl font-bold '>
                Buy 2 burger get 1 free
                </h2>

                <p 
                data-aos="fade-up"
                className='py-5 text-md font-normal'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo dolor, harum quo unde qui sequi.
                </p>
                <p
                data-aos="fade-up"
                className=' text-md font-normal'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae. Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
                <div className='flex items-center gap-4 my-5'>
                    <div 
                    
                    data-aos="fade-up"
                    className='p-6 rounded-full border bg-purple-300/20'>
                        <GrSecure size={30}/>
                    </div>
                    <div 
                    data-aos="fade-up" data-aos-delay="200"
                    className='p-6 rounded-full border bg-orange-300/50'>
                        <IoFastFood  size={30}/>
                    </div>
                    <div
                    data-aos="fade-up" data-aos-delay="400"
                    className='p-6 rounded-full border bg-green-300/30'>
                        <GiFoodTruck  size={30}/>
                    </div>
                </div>

                <button 
                data-aos="fade-up" data-aos-delay="500"
                className='px-4 py-2 text-black font-semibold text-xl bg-gradient-to-r from-sky-500 to-sky-200 rounded-full mt-5 hover:scale-105 border border-white md:self-start'>Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Offer