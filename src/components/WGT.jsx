import React from 'react'
import { wgbt } from '../constants'
import WgbtCard from './WgbtCard'
import { motion } from 'framer-motion'
const WGT = () => {
  return (
    <div id='gpt' className="w-full flex container mx-auto   justify-between items-center relative">
     < motion.div 
     initial={{ opacity: 0 ,y:'-50%' }}
     whileInView={{ opacity: 1 , y:0 }}
     transition={{duration:0.5}}
     className=" relative md:p-12 p-5   bg-secondary overflow-hidden ">
       <div className=' flex md:flex-row  flex-col md:gap-[50px] justify-between '>
          <h3 className=' md:w-[40%]  text-white font-extrabold text-2xl relative' >What is GPT-3
          <span className="absolute  w-[15%]  top-[-10px] left-0    border-gradiant border-t-4 py-2 "></span>
          </h3>          
          <p className=' flex text-font font-medium text-base leading-[30px] md:px-8'>We so opinion friends me message as delight. Whole front do of plate heard oh ought.  His  defective nor  convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an  insisted so humanity he. Friendly bachelor entrance to on by.</p>
       </div>
       <div className='flex md:flex-row flex-col justify-between gap-4 mt-4 md:items-center items-start'>
          <h1 className=' font-extrabold  md:text-[34px] text-[20px] md:py-24   md:leading-[45px] leading-[25px] text-gradient '>The possibilities are beyond <br /> your imagination</h1>
          <p className='text-[#FF8A71] font-medium md:text-base text-sm'>Explore The Library</p>
       </div>
        <div className='flex md:flex-row flex-col justify-between gap-5 mt-10'>
             {wgbt.map((card)=> <WgbtCard key={card.id} {...card} />)}       
        </div>
        <div className="absolute z-[-1]  w-[10%] h-[35%] top-[-35px] left-0 blueblure " />
        <div className="absolute z-[-1] w-[25%] h-[30%] rounded-full right-[-100px] bottom-[-70px] bottomblur  " />
        
     </ motion.div>
    </div>
  )
}

export default WGT