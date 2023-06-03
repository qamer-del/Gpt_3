import React from 'react'

const InputForm = () => {
  return (
    <div className=' relative mt-3' >
      <input type="text"
      placeholder='Your Email Address'
       className=' placeholder-[#3D6184] bg-gray-700 md:p-5 p-3 w-full rounded-md outline-none text-[20px]'
      />
      <button className=' bg-btn md:p-[20.5px] p-[12.5px] text-white absolute top-0 right-0 rounded-r-md font-bold text-xl '>Get Started</button>
    </div>
  )
}

export default InputForm