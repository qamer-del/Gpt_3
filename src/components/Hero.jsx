import React from 'react'
import InputForm from './InputForm'
import { conterbute } from '../constants'
import { mask } from '../assets'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    < motion.div
    initial={{ opacity: 0 ,y:'-50%' }}
    whileInView={{ opacity: 1 , y:0 }}
    transition={{duration:0.8}}
     id='hero' className="w-full flex  py-6 justify-between items-center relative">
      <div className=" container mx-auto flex md:flex-row flex-col-reverse items-center justify-between ">
             < div className='' >
               <h1 className=' text-gradient font-extrabold md:text-[62px] text-[32px] md:leading-[75px] leading-[40px]'> Let’s Build Something <br />  amazing with GPT-3 <br /> OpenAI</ h1>
               <p className=' md:text-xl md:my-12 my-5 text-[15px] font-normal text-font md:leading-[27px] leading-[20px]'>Yet bed any for travelling assistance indulgence unpleasing. <br /> Not thoughts all exercise blessing. Indulgence way <br /> everything joy alteration boisterous the attachment. Party <br /> we years to order allow asked of.</p>
               <InputForm/>
               <div className=' mt-8 flex md:flex-row flex-col items-center justify-start gap-2'>
               <div className=' flex -space-x-3 overflow-hidden md:my-1 my-5 '>
                {conterbute.map((cont,index) =>(
                  <img key={cont.id} src={cont.img} alt="" className='inline-block  rounded-full ring-2  ' />
                ) )}
                <div className='ring-2 rounded-full inline-block bg-font2 w-[36px] h-[36] border-2 border-white relative'>
                       <p className='text-black font-bold align-text-bottom  text-xs mytransform '>1.6K+</p>
                </div>
               </div>
               <p className=' text-white font-medium text-xs '>1,600 people requested access a visit in last 24 hours</p>
               </div>

             </div>
             <div className=' items-stretch'>
              <img src={mask} alt="" className='' />
             </div>
      </div> 
      <div className="absolute z-[-1] w-[30%] h-[60%] top-[-35px] left-0 backblur " />
    </motion.div>  
  )
}

export default Hero