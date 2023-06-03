import React from 'react'
import { Comapny } from '../constants'
import { motion } from 'framer-motion'
const Componies = () => {
  return (
    < motion.div 
    initial={{ opacity: 0.3 ,y:'-50%' }}
    whileInView={{ opacity: 1 , y:0 }}
    transition={{duration:0.5}}
    className='w-full py-6 '>
      <div className=' md:max-w-[850px] mx-auto mb-20 px-5 flex md:flex-row flex-cols-2 items-center justify-between '>
      {Comapny.map((coe,index) =>(
                  <img key={coe.id} src={coe.imge} alt="" className='md:w-[85px] w-[60px]' />
                ) )}
      </div>
    </motion.div> 
  )
}

export default Componies