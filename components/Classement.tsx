import { ClassementsCard } from '@/constants'
import React from 'react'
import ClassementCard from './ClassementCard'

const Classement = () => {
  return (
    <section className='flex flex-col items-center justify-center container md:px-0 px-5 mx-auto py-24'>
        <p className='text-[#E20000] font-bold'>
            Évaluations et classements
        </p>
        <h1 className='text-center md:text-[36px] text-[26px] font-semibold my-3'>
            Rencontrez les meilleurs enseignants
        </h1>
        <p className='text-gray-500'>
            Avec les meilleurs enseignants, nous offrons le savoir et les compétences.
        </p>
        <div className='mt-16 px-6 flex flex-wrap justify-center gap-10'>
          {
            ClassementsCard.map((item) => (
              <ClassementCard
                key={item.name}
                item={item}
              />
            ))
          }
        </div>
    </section>
  )
}

export default Classement