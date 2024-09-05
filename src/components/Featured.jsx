import React from 'react'

function Featured() {

  return (
    <section className='w-full h-[600px] text-white bg-zinc-900 px-20 py-10 '>
      <a href='#' className='text-8xl'>Featured Projects</a>
      <div className='w-full mt-10  h-96  flex items-center justify-between gap-5'>
        <div className='w-full h-96 rounded-2xl relative'>

          <img className='w-full rounded-2xl h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
        </div>
        <div className='w-full relative h-96 rounded-2xl '>

          <img className='w-full h-full object-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Featured