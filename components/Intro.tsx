import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Intro = () => {
  return (
    <section className='relative'>
        <div className="container mx-auto flex px-5  py-24 md:flex-row flex-col items-center">
            <div className="z-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="font-extrabold lg:text-6xl md:text-5xl text-4xl">
                    Votre <span className='text-[#003BF9]'>Réussite Académique</span> Commence Par Ici!
                </h1>
                <p className="my-8 leading-relaxed text-gray-600">Accédez à un système d'apprentissage en ligne et à des ressources pour enrichir vos connaissances.</p>
                <Link
                    href="https://e-learning-app-five.vercel.app/signup/etudiant"
                >
                    <CustomButton
                        title="Devenir Etudiant"
                        bgColor="bg-[#003BF9]"
                        textColor="text-white"
                    />
                </Link>
                <div className='flex flex-wrap sm:justify-start justify-center items-center gap-8 mt-12'>
                    <div className='flex items-center space-x-3'>
                        <Image
                            src="/school.png"
                            alt="school"
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                        <p className='text-sm text-gray-500'>
                            Collége
                        </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Image
                            src="/university.png"
                            alt="university"
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                        <p className='text-sm text-gray-500'>
                            Lycée
                        </p>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <Image
                            src="/graduation.png"
                            alt="graduation"
                            width={30}
                            height={30}
                            className='object-contain'
                        />
                        <p className='text-sm text-gray-500'>
                            Etudes Supérieurs
                        </p>
                    </div>
                </div>
            </div>
            <div className='absolute left-10 top-0'>
                <Image
                    src="/cercles.png"
                    alt="cercles"
                    width={500}
                    height={500}
                    className='object-contain '
                />
            </div>
            <div className="relative z-10">
                <div className=''>
                    <Image
                        src="/intro.png"
                        alt="intro"
                        width={500}
                        height={500}
                        className='z-10'
                    />
                        <Image
                            alt='faites'
                            src='/faites.png'
                            width={250}
                            height={250}
                            className='object-contain absolute top-24 bottom-0 lg:left-[-100px] left-[-30px]'
                        />
                        <Image
                            alt='satisfait'
                            src='/satisfait.png'
                            width={250}
                            height={250}
                            className='object-contain absolute bottom-0 right-[-20px]'
                        />
                </div>
                        <Image
                            alt='cercles'
                            src='/cercles.png'
                            width={500}
                            height={500}
                            className='object-contain absolute bottom-[-80px] right-[-20px] z-[-2]'
                        />
            </div>
        </div>
    </section>
  )
}

export default Intro