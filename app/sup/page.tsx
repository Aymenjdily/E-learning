"use client"

import React, { useState } from 'react'
import { CustomButton } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { SupCours } from '@/constants'

const Sup = () => {
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
                        src="/sup.svg"
                        alt="sup"
                        width={200}
                        height={200}
                        className='object-contain'
                    />
                    <h1 className='my-3 text-2xl font-bold'>
                        Etudes Supérieurs
                    </h1>
                    <p className='text-gray-500'>
                        Explorez des sujets passionnants et approfondissez vos connaissances dans votre domaine d'études supérieures grâce à notre plateforme de cours complémentaires. 
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
                        title="Ecoles D’ingenieurie"
                        bgColor={`${active === 8 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 8 ? "text-white": "text-black"}`}
                        onClick={() => setActive(8)}
                    />
                    <CustomButton
                        title="Facultés"
                        bgColor={`${active === 7 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 7 ? "text-white": "text-black"}`}
                        onClick={() => setActive(7)}
                    />
                    <CustomButton
                        title="EST-BTS"
                        bgColor={`${active === 5 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 5 ? "text-white": "text-black"}`}
                        onClick={() => setActive(5)}
                    />
                    <CustomButton
                        title="CPGE"
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
                <div className='flex flex-row flex-wrap items-center justify-center my-8 gap-3'>
                    <CustomButton
                        title="SMP"
                        bgColor={`${active === 1 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 1 ? "text-white": "text-black"}`}
                        onClick={() => setActive(1)}
                    />
                    <CustomButton
                        title="BCG"
                        bgColor={`${active === 2 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 2 ? "text-white": "text-black"}`}
                        onClick={() => setActive(2)}
                    />
                    <CustomButton
                        title="SMI"
                        bgColor={`${active === 3 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 3 ? "text-white": "text-black"}`}
                        onClick={() => setActive(3)}
                    />
                    <CustomButton
                        title="CPGE"
                        bgColor={`${active === 4 ? "bg-red-500 duration-300": ""}`}
                        textColor={`${active === 4 ? "text-white": "text-black"}`}
                        onClick={() => setActive(4)}
                    />
                </div>
                <h1 className='text-xl font-semibold'>
                    S1
                </h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 my-10'>
                    {
                        SupCours.map((item) => (
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
                <h1 className='text-xl font-semibold'>
                    S2
                </h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10 my-10'>
                    {
                        SupCours.map((item) => (
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

export default Sup