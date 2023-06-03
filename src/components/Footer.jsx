import React from 'react'
import { logo } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <div className=" bg-secondary">
    <div className=" container mx-auto justify-center flex md:flex-row flex-col  items-center gap-3 ">
        <div className=' w-full'>
          <img src={logo} className='object-contain' />
          <p className=' text-[12px] leading-[14px] text-white mt-4'>Crechterwoord K12 182 DK Alknjkcb,<br /> All Rights Reserved</p>
        </div>
        <div className=" w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="text-[18px] pb-4 font-extrabold text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-2">
              {footerlink.links.map((link, index) => (
                <li
                key={link.name}
                  className={`font-poppins font-normal text-[12px] leading-[24px] text-white cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
    </div>
    <div className='flex flex-col py-5 items-center '>
    <p className='md:max-w-[1220px] max-w-[400px] text-[12px] text-white '>© 2021 GPT-3. All rights reserved.</p> 
    </div>
  
   </div>
   
  )
}

export default Footer