import React from 'react'
import Blocard from './Blocard'
import { zero1 } from '../assets'
import { blogscard } from '../constants'
import { motion } from 'framer-motion'
const Blogs = () => {
  return (
    < motion.div 
    initial={{ opacity: 0 ,x:'-50%' }}
    whileInView={{ opacity: 1 , x:0 }}
    transition={{duration:1.3}}
    
    id='lib' className=" my-20 container mx-auto text-white  ">
      <div className="   ">
         <h1 className='font-extrabold md:text-[34px] text-[25px] leading-[45px] text-gradient  my-24  '>A lot is happening, <br /> We are blogging about it.</h1>
           <div className=' flex md:flex-row flex-col justify-center md:gap-8 gap-5 '>
              <div className=' bg-secondary text-white rounded-tl-[50px]  '>
                <img src={zero1} alt="" className='w-full' />
                 <p className='px-5 font-bold text-[11.3px] pt-2'>Sep 26, 2021</p>
                 <h2 className='px-5 md:pb-[220px] pb[150px] font-extrabold md:text-2xl text-lg leading-[30px]'>GPT-3 and Open  AI is the <br /> future. Let us exlore how it is?</h2>
                 <p className='p-5 font-bold text-[11px]'>Read Full Article</p>
              </div>
              <div className=' grow-1 grid grid-cols-2 md:gap-8 gap-5 '>
                {blogscard.map((blo) => <Blocard key={blo.id} {...blo}/>) }
              </div>
           </div>
      </div>
    </ motion.div>
  )
}

export default Blogs