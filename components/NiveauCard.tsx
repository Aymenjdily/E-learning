import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NiveauCard = ({ niveau } :any) => {
    const { icon, title, description, link } = niveau

    return (
        <div className='lg:w-96 w-full flex flex-col space-y-5 shadow-xl p-8 rounded-xl'>
            <div className='flex items-center flex-row gap-6'>
                <Image
                    src={icon}
                    alt={title}
                    width={50}
                    height={50}
                />
                <h1 className='font-bold text-xl'>
                    {title}
                </h1>
            </div>
            <p className='text-gray-500'>
                {description}
            </p>
            <Link
                href={`/${link}`}
                className='text-[#003BF9]'
            >
                Voir plus
            </Link>
        </div>
    )
}

export default NiveauCard