import burger1 from '../assets/burger/burger1.png'
import burger2 from '../assets/burger/burger2.png'
import burger3 from '../assets/burger/burger3.png'



const ServicesData = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit.',
      img: burger1,
      name: 'Burger',
      aosDelay: "100",
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit.',
      img: burger2,
      name: 'Chicken Burger',
      aosDelay: "300",
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit.',
      img: burger3,
      name: 'veg Burger',
      aosDelay: "500",
    },
  ];


const Services = () => {
  return (
    <div className='bg-gray-500/10'>

    
    <div className="max-w-[1140px] mx-auto px-8 py-16 ">
        <div className="flex flex-col text-center justify-center mb-36">
            <h3 
            data-aos="fade-up"
            className="text-sky-500 text-xl">Our Services</h3>
            <h1 
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-bold text-4xl  ">Services</h1>
            <p 
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-sm py-5 text-slate-700  font-light max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt
            </p>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service, index) => (
              <div
              data-aos="fade-up"
                data-aos-delay={service.aosDelay}
              key={index}
                
                className="rounded-2xl bg-white hover:bg-cyan-400 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-16
                   group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
    
    </div>
    </div>
  )
}

export default Services