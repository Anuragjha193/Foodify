import React from 'react'
import Food_img from './assets/food.webp'
const Food = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-white max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Mood For <span className='text-green-300'>Food</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={Food_img} alt="Food"/>
        </div>
    </div>
  )
}

export default Food