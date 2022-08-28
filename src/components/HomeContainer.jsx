import React from 'react'
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"
import { heroData } from '../ultils/data'


const HomeContainer = () => {
        return (
                <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
                        <div className='py-2 flex-1 flex flex-col items-start justify-center gap-4'>
                                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
                                        <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                                        <div className='w-6 h-6 rounded-full overflow-hidden'>
                                                <img src={Delivery} className='w-full h-full object-contain' alt="delivery" />
                                        </div>
                                </div>

                                <p className='text-[2rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor'>
                                        The Fastest Delivery in <span className='text-orange-600 text-[2.5rem] lg:text-[5rem]'>Your City</span>
                                </p>
                                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                                        We deliver bikes to your doorstep in no time.
                                        We are the fastest delivery service in the city.
                                        We want to make your life easier.
                                        So come and join us.
                                        Please feel free to contact us.
                                </p>
                                <button type='button'
                                        className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 
                                        md:w-auto rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
                                        Order Now
                                </button>
                        </div>
                        <div className='py-2 flex-1 flex items-center relative'>
                                <img src={HeroBg} className="ml-auto lg:h-650 h:370 w-full lg:w-auto h-420" alt="hero-bg" />
                                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center py-4 gap-4 flex-wrap lg:px-32'>
                                       {heroData&&heroData.map(n=>(
                                         <div key={n.id} className='lg:w-190 p-4 bg-cardOverplay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col drop-shadow-lg'>
                                         <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt='I1'/>
                                         <p className='lg:text-xl text-base font-semibold text-textColor lg:mt-4 mt-2'>
                                          {n.name}
                                         </p>
                                         <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold lg:my-3 my-1'>
                                         {n.decp}
                                         </p>
                                         <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span>{n.price}</p>
                                 </div>
                                       ))}
                                </div>
                        </div>
                </section>
        )
}

export default HomeContainer