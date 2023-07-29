import React from 'react'
import Image from 'next/image'

const ClassementCard = ({ item }: any) => {
    const { name, role, image, description } = item

  return (
    <div className='flex bg-gray-100 shadow-lg p-5 py-8 rounded-xl items-center w-64 text-center flex-col gap-3'>
        <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className='object-contain rounded-full mb-5'
        />
        <div>
            <h1 className='text-[18px] font-semibold'>
                {name}
            </h1>
            <span className='text-[#003BF9]'>
                {role}
            </span>
        </div>
        <p className='text-gray-500'>
            {description}
        </p>
        <div className='flex flex-row gap-2'>
            <span className='text-[#7F56D9] text-sm'>
                4.3
            </span>
            <Image
                src="/rating.png"
                alt="rating"
                width={80}
                height={80}
                className='object-contain '
            />
            <p className='text-gray-400 text-sm'>
                (16,325)
            </p>
        </div>
        <div className='flex flex-row items-center gap-3'>
            <Image
                src='/linkedin.png'
                alt="linkedin"
                width={16}
                height={16}
                className='object-contain'
            />
            <Image
                src='/twitter.png'
                alt="twitter"
                width={16}
                height={16}
                className='object-contain'
            />
        </div>
    </div>
  )
}

export default ClassementCard