import React from 'react'
import { featimg } from '../assets'
import { motion } from 'framer-motion'
const Rigester = () => {
  return (
    < motion.div 
    initial={{ opacity: 0 ,x:'-50%' }}
    whileInView={{ opacity: 1 , x:0 }}
    transition={{duration:0.8}}
    
    id='cast' className="  py-6 justify-between items-center container mx-auto ">
      <div className="flex md:flex-row flex-col md:gap-4 gap-2 items-center justify-between py-10 md:max-w-[1220px] mx-auto ">
         <div className='w-full'>
          <img src={featimg} alt="img"  />
         </div>
         <div>
           <p className=' font-medium md:text-base text-xs leading-[30px] text-font2 pt-10'>Request Early Access to Get Started</p>
           <h3 className=' font-extrabold md:text-[34px] text-[25px] leading-[45px] text-gradient py-5'>The possibilities are beyond your imagination</h3>
           <p className=' text-font font-normal md:text-base textt-xs leading-[30px] pb-6'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
           <p className=' md:text-base mt-2  text-xs font-medium text-[#FF8A71]'>Request Early Access to Get Started</p>
         </div>
      </div>
    </ motion.div> 
  )
}

export default Rigester