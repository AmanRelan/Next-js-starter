import Slider from '@/components/Slider'
import { images } from '@/utils/constants'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <section className='py-24 bg-white text-black'>
        <div className='container'>
          <h1 className='text-3xl font-bold'>First NextJS Application</h1>
        </div>
      </section>
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
    </div>
  )
}
