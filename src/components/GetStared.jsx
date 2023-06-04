import React from 'react'
import { motion } from 'framer-motion'
const GetStared = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 ,x:'50%' }}
    whileInView={{ opacity: 1 , x:0 }}
    transition={{duration:0.5}}
    
    id='#' className=" container mx-auto">
    <div className="  bggra rounded-[10.7236px] flex md:flex-row flex-col md:py-16 py-10 justify-between p-5   ">
      <div>
        <p className=' font-medium text-xs '>Request Early Access to Get Started</p>
        <h3 className=' font-extrabold md:text-2xl text-xl my-10 md:my-0'>Register today & start exploring the endless possiblities.</h3>
      </div>
      <button className=' rounded-[45px] bg-primary text-white md:text-sm text-sm font-bold p-3 px-8 '>Get Started</button>
    </div>
    </ motion.div>
  )
}

export default GetStared