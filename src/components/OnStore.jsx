import appStore from '../assets/app_store.png'
import playStore from '../assets/play_store.png'


const OnStore = () => {
  return (
    <div className='bg-gray-500/10'>
    <div className="max-w-[1140px] mx-auto px-8 py-16">

        <div className='text-center'>
            <h1
            data-aos="zoom-in"
            className='pb-5 font-bold text-xl md:text-2xl'>Burger King is available for Android and IOS</h1>
            <div className="flex items-center justify-center">
                <img 
                data-aos="fade-up"
                src={appStore} alt=""  className='w-[100px] md:w-[250px] object-cover'/>
                <img 
                data-aos="fade-up"
                data-aos-delay="200"
                src={playStore} alt="" className='w-[100px] md:w-[250px] object-cover'/>
            </div>

        </div>

    </div>
    </div>
  )
}

export default OnStore