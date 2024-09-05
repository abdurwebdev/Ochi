import React from 'react'
import Marquee from "react-fast-marquee";
const Marquees = () => {
  return (
    <section className='w-full  h-[82vh] flex items-center justify-center z-[9999]  bg-[#004D43] rounded-t-3xl'>
      <Marquee speed={100} >
        <h1 className='text-[25vw]  text-white pl-5'>WE ARE OCHII</h1>
        <h1 className='text-[25vw] text-white pl-5'>WE ARE OCHII</h1>
      </Marquee>
    </section>
  )
}

export default Marquees