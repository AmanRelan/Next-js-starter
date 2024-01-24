'use client'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Slider = ({ children: images }) => {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent(current => (current === 0 ? images.length - 1 : current - 1))
  const next = () =>
    setCurrent(current => (current === images.length - 1 ? 0 : current + 1))
  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          onClick={prev}
        >
          <ChevronLeft />
        </button>
        <button
          className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
          onClick={next}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Slider
