import React from 'react'
import { motion } from 'framer-motion'
const REA = () => {
  return (
    
    < div id='' className="w-full flex py-20  justify-between items-center relative  bg-primarytow">
    < motion.div
     initial={{ opacity: 0 ,x:'50%' }}
     whileInView={{ opacity: 1 , x:0 }}
     transition={{duration:0.9}}
     className=" container mx-auto flex flex-col  items-center gap-3 ">
       <h1 className=' font-extrabold md:text-[62px] text-[30px] text-gradiant text-gradient text-center'>Do you want to step in to the <br /> future before others</h1>
      <button className=' bg-transparent border border-white md:p-3 p-2 my-10 text-white text-[18px] text-center w-[250px] hover:bg-btn hover:rounded-3xl  duration-1000 '>Request Early Access</button>
    </ motion.div>
   </div> 
  )
}

export default REA