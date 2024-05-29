import {  FaFacebook, FaInstagram  ,FaLocationArrow,  FaLinkedin,
    FaMobileAlt} from 'react-icons/fa'
import logo from '../assets/logo.png'


const Footer = () => {
  return (
    <div 
    data-aos="fade-up" 
    className="bg-gray-500/10 ">
        <div className="flex flex-col p-8 md:flex-row gap-6   md:items-start">
            <div className='flex-1 space-y-3'>
                <div className='flex items-center justify-start'>
                    <img src={logo} alt="/" className='w-20 mr-4'/>
                    <h1 className='text-xl font-bold '>Burger King</h1>

                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos nihil ullam facilis nobis laboriosam aliquam.
                </p>
                <div className='flex items-center'>
                    <FaLocationArrow className='mr-2'/>
                    <span>123 Street, City, Country</span>
                </div>
                <div className='flex items-center'>
                    <FaMobileAlt className='mr-2'/>
                    <span>+123456789</span>
                </div>
                <div className='flex'>
                    <FaInstagram size={30} className='mr-2 '/>
                    <FaFacebook size={30} className='mr-2'/>
                    <FaLinkedin size={30}/>
                </div>
            </div>
            <div className='flex flex-1 flex-wrap justify-between gap-5'>

                <div className='w-[150px]'>
                    <h2 className='text-xl font-bold'>Important Links</h2>
                    <ul className='text-lg space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className='w-[150px]'>
                    <h2 className='text-xl font-bold'>Company Links</h2>
                    <ul className='text-lg space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>


                <div className='w-[150px]'>
                    <h2 className='text-xl font-bold'>Links</h2>
                    <ul className='text-lg space-y-2'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>


            </div>
        </div>
        <div className='py-10 text-center border-t-2 border-gray-300/50'>
            <p>
            @copyright 2024 || The Coding Journey
            </p>
        </div>
    </div>
  )
}

export default Footer