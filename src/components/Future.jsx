import React from 'react'
import { features } from '../constants'
import FutureCards from './FutureCards'
import { motion } from 'framer-motion'
const Future = () => {
  return (
    < motion.div 
    initial={{ opacity: 0 ,y:'-50%' }}
    whileInView={{ opacity: 1 , y:0 }}
    transition={{duration:0.9}}
    id='' className="flex  py-10 my-20  relative container mx-auto">
    <div className="flex lg:flex-row flex-col">
       <div className='  lg:w-[50%] w-full relative ' >
         <h1 className=' text-gradient font-extrabold md:text-3xl text-xl    md:leading-[45px] leading-[25px] md:w-[100%] '>The Future is Now and <br className='md:block hidden' /> You Just Need  To Realize <br className='md:block hidden' /> It.  Step into Future Today <br /> & Make it Happen.</h1>
         <p className=' font-medium text-[#FF8A71] text-base my-8'>Request Early Access to Get Started</p>
         <div className="absolute z-[-1] w-[150%] h-[70%] top-[-35px] left-[-400px] backblur " />
       </div>
         <div className='  '>
         {features.map((fet)=> <FutureCards key={fet.id} {...fet} />)}  
         </div>
    </div>
    </motion.div>
  )
}

export default Future