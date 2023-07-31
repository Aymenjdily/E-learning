"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CustomButton } from '@/components'
import { CollegeCours } from '@/constants'

const Lycee = () => {
    const [active, setActive] = useState(5)

    return (
        <>
        <section className='relative container mx-auto py-12 md:px-0 px-5'>
            <Link href="/#niveaux" className='text-[#003BF9] flex items-center flex-row gap-3 text-sm font-bold'>
                <Image
                    src="/left.svg"
                    alt="left"
                    width={20}
                    height={20}
                />
                Retour
            </Link>
            <div className='flex justify-center text-center flex-col items-center'>
                <Image
                    src="/lycee.svg"
                    alt="lycee"
                    width={200}
                    height={200}
                    className='object-contain'
                />
                <h1 className='my-3 text-2xl font-bold'>
                    Lycée
                </h1>
                <p className='text-gray-500'>
                    Préparez-vous pour l'avenir dès maintenant en explorant nos cours supplémentaires conçus spécialement pour les lycéens ambitieux. 
                </p>
                <CustomButton
                    title="Devenir Etudiant"
                    bgColor="bg-[#003BF9] mt-5"
                    textColor="text-white"
                />
                <Image
                    src="/cercles.png"
                    alt="cercles"
                    width={500}
                    height={500}
                    className='object-contain absolute left-0 z-[-1]'
                />
            </div>
        </section>
        <section className='container mx-auto py-12 md:px-0 px-5'>
            <h1 className='text-center text-2xl font-semibold'>
            Les niveaux ciblés
            </h1>
            <div className='flex flex-row flex-wrap items-center justify-center mt-8 gap-3'>
                <CustomButton
                    title="5éme"
                    bgColor={`${active === 3 ? "bg-red-500 duration-300": ""}`}
                    textColor={`${active === 3 ? "text-white": "text-black"}`}
                    onClick={() => setActive(3)}
                />
                <CustomButton
                    title="1-Bac"
                    bgColor={`${active === 4 ? "bg-red-500 duration-300": ""}`}
                    textColor={`${active === 4 ? "text-white": "text-black"}`}
                    onClick={() => setActive(4)}
                />
                <CustomButton
                    title="2-Bac"
                    bgColor={`${active === 5 ? "bg-red-500 duration-300": ""}`}
                    textColor={`${active === 5 ? "text-white": "text-black"}`}
                    onClick={() => setActive(5)}
                />
                <CustomButton
                    title="Bac libre"
                    bgColor={`${active === 6 ? "bg-red-500 duration-300": ""}`}
                    textColor={`${active === 6 ? "text-white": "text-black"}`}
                    onClick={() => setActive(6)}
                />
            </div>
        </section>
        <section className='container mx-auto py-12 md:px-0 px-5'>
            <h1 className='text-2xl font-semibold'>
            Les cours proposés
            </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 my-10'>
            {
                CollegeCours.slice(0,active).map((item) => (
                <div className='flex flex-col items-center justify-center text-center gap-5 p-8 shadow-lg rounded-xl'>
                    <h1 className='text-xl font-bold'>
                    {item.title}
                    </h1>
                    <p className='text-gray-500'>
                    {item.description}
                    </p>
                </div>
                ))
            }
            </div>
        </section>
        </>
    )
}

export default Lycee