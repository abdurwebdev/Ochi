import React from 'react'

const About = () => {
  return (
    <section className='w-fulll px-10 py-5 min-h-screen rounded-t-3xl bg-[#CDEA68]' >
      <p className='text-[4vw] leading-[4vw] tracking-tighter'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</p>
      <div className='flex mt-10 items-start justify-between'>
        <div className='flex flex-col items-start gap-y-5'>
          <p className='text-[3vw]'>Our Approach:</p>
          <button className='flex text-white px-5 py-3 rounded-full bg-[#212121] items-center justify-center gap-x-3'>READ MORE <div className='w-2 h-2 bg-white rounded-full'></div></button>
        </div>
        <div className='w-[40vw] h-[35vw] overflow-hidden rounded-3xl bg-red-300'>
          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default About