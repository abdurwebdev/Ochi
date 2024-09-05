import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion"
const LandingPage = () => {
  return (
    <section data-scroll-section data-scroll data-scroll-speed={-0.8} className='w-full z-[-1] mt-20 h-[76vh]   '>
      <div className='masker flex flex-col px-16 leading-[8vw] text-[#212121]'>
        <h1 className='text-[12vw] font-bold'>WE CREATE</h1>
        <div className='flex items-center  justify-start'>
          <motion.div initial={{ width: 0 }} animate={{ width: "12vw" }} transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }} className='w-[12vw] h-[8vw] rounded-3xl mt-3 bg-red-400'>
          </motion.div>
          <h1 className='text-[12vw] font-bold'>EYE OPENING</h1>
        </div>
        <h1 className='text-[12vw] font-bold'>PRESENTATIONS</h1>
      </div>
      <div className='flex items-center border-t-2 border-zinc-400 mt-16 px-16 py-3  justify-between'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (<p key={index}>{item}</p>))}
        <div className='flex items-center justify-center gap-x-3'>
          <div className='px-8 py-2 border border-black rounded-full'>START THE PROJECT</div>
          <button className='w-10 h-10 rounded-full border-black border flex items-center justify-center'><MdArrowOutward /></button>
        </div>

      </div>
    </section>
  )
}

export default LandingPage