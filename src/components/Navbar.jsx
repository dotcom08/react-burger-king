import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
        {/* container */}
        <div className='max-w-[1140px] mx-auto px-8'>
            <div className='flex items-center justify-between'>
                    {/* logo */}
                <div>
                    <img src={logo} alt="/"  className='w-[70px]'/>
                </div>

                {/* nav */}
                <div className='flex items-center '>
                    <ul className='hidden md:flex gap-x-9 mr-9'>
                        <li className='text-lg hover:text-sky-600 hover:underline-offset-8  hover:underline transition duration-300'><a href="#">Home</a></li>
                        <li className='text-lg hover:text-sky-600 hover:underline-offset-8  hover:underline transition duration-300'><a href="#">About</a></li>
                        <li className='text-lg hover:text-sky-600 hover:underline-offset-8  hover:underline transition duration-300'><a href="#">Menu</a></li>
                        <li className='text-lg hover:text-sky-600 hover:underline-offset-8  hover:underline transition duration-300'><a href="#">Services</a></li>
                    </ul>
                    
                    <button className='px-4 py-1 text-lg text-white font-semibold bg-gradient-to-r from-sky-600 to-sky-900 rounded-full hover:scale-105 transition-all duration-300'>Order</button>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Navbar