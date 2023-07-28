import { NiveauxCards } from '@/constants'
import React from 'react'
import NiveauCard from './NiveauCard'

const Niveaux = () => {
  return (
    <section className='flex flex-col items-center justify-center container md:px-0 px-5 mx-auto py-24'>
        <p className='text-[#E20000] font-bold'>
            Notre Niveaux
        </p>
        <h1 className='text-center md:text-[36px] text-[26px] font-semibold mt-5'>
            Niveaux d'études ciblés : Choisissez votre <br /> parcours académique!
        </h1>
        <div className='mt-12 px-6 flex flex-wrap justify-center gap-10'>
            {
                NiveauxCards.map((niveau) => (
                    <NiveauCard
                        key={niveau.title}
                        niveau={niveau}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default Niveaux