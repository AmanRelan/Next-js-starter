import Slider from '@/components/Slider'
import { images } from '@/utils/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex justify-center items-center h-screen bg-black text-white'>
      <div className='max-w-7xl'>
        <Slider>
          {images.map((picture, index) => (
            <Image
              key={index}
              src={picture.src}
              alt={picture.title}
              width={1500}
              height={2000}
            />
          ))}
        </Slider>
      </div>
    </main>
  )
}
