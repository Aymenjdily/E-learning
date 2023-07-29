import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({ client } :any) => {
    const { name, role, feedback, image } = client

    return (
        <div className='flex items-center flex-col'>
            <p className='text-2xl text-center py-5 text-gray-500'>
                {feedback}
            </p>
            <Image
                src={image}
                alt={name}
                width={65}
                height={65}
                className='object-contain rounded-full'
            />
            <div className='mt-4 text-center'>
                <h1 className='font-semibold text-lg mb-1'>
                    {name}
                </h1>
                <p className='text-gray-400 text-sm'>
                    {role}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard