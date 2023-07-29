import React from 'react'
import Image from 'next/image'

const Show = () => {
  return (
    <section className='flex flex-col items-center justify-center container mx-auto md:px-0 px-5 py-24'>
        <h1 className='md:text-[40px] text-[30px] font-semibold text-center'>
            Comment Nos Cours va vous aider
        </h1>
        <p className='text-center text-gray-500 my-4'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br/> nonummy nibh euismod tincidunt ut laoreet dolore.
        </p>
        <span className='text-[#003BF9] font-bold mt-3'>
            Lire Video
        </span>
        <div className='w-full flex items-start justify-center relative h-[70vh] mt-10'>
            <Image
                src="/show.png"
                alt="show"
                fill
                className='object-cover object-top rounded-3xl mt-5 shadow-lg'
            />
            <button className='items-center cursor-pointer z-10 w-20 justify-center h-20 text-white rounded-full bg-[#003BF9] flex'>
                <Image
                    src="/play.svg"
                    alt="play"
                    width={25}
                    height={25}
                />
            </button>
        </div>
    </section>
  )
}

export default Show