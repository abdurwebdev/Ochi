import React, { useEffect, useState } from 'react'

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      let mouseX = event.clientX;
      let mouseY = event.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    })

    return () => {

    }
  }, [])

  return (
    <section data-scroll data-scroll-speed={-0.7} className='w-full relative z-[-1] bg-b min-h-screen bg-white flex items-center justify-center'>
      <div>
        <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" alt="" />
      </div>
      <div className='flex absolute items-center justify-between w-[37%] h-40 bg-red-300'>
        <div className='w-56 h-56 bg-white flex items-center justify-center rounded-full'>
          <div className='w-48 h-48 rounded-full overflow-hidden  bg-black relative right-0 flex items-center justify-center'>
            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='w-full h-10 absolute left-24 top-24    flex items-start justify-start'>
              <div className='w-10 h-10 rounded-full bg-white'></div>
            </div>
          </div>
        </div>
        <div className='w-56 h-56 flex items-center justify-center bg-white rounded-full'>
          <div className='w-48 h-48 rounded-full flex items-center justify-center bg-black relative'>
            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='w-full h-10 absolute left-24 top-24  flex items-start justify-start'>
              <div className='w-10 h-10 rounded-full bg-white'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eyes