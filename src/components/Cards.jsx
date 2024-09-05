import React from 'react'

function Cards() {
  return (
    <section className='flex z-50 w-full gap-5  h-[650px] items-center justify-between px-20'>
      <div className='w-1/2 h-96 rounded-xl relative bg-[#004D43] flex items-center justify-center'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <div className='absolute bottom-10 left-10 border-2 border-[#CDEA68] rounded-full px-5 py-2 text-[#CDEA68]'>
          &copy;2024
        </div>
      </div>
      <div className='w-1/4 h-96 relative flex items-center justify-center rounded-xl bg-[#212121]'>
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <div className='absolute bottom-10 left-10 border-2 border-[#CDEA68] rounded-full px-5 py-2 text-[#CDEA68]'>
          &copy;2024
        </div>
      </div>
      <div className='w-1/4 flex relative items-center justify-center h-96 bg-[#212121] rounded-xl'>
        <img className='w-28 h-28 object-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        <div className='absolute bottom-10 left-10 border-2 border-[#CDEA68] rounded-full px-5 py-2 text-[#CDEA68]'>
          &copy;2024
        </div></div>
    </section>
  )
}

export default Cards