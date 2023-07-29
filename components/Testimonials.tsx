"use client"

import { TestimonialsContent } from '@/constants'
import React, { useState } from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {

    const [currentClient, setCurrentClient] = useState(1)
    const itemsPerPage = 1
    const lastIndex = currentClient * itemsPerPage
    const firstIndex = lastIndex - itemsPerPage
    const items = TestimonialsContent && TestimonialsContent.slice(firstIndex, lastIndex)
    const npage = Math.ceil(TestimonialsContent && TestimonialsContent.length / itemsPerPage)
    // @ts-ignore
    const numbers = [...Array(npage + 1).keys()].slice(1)

    const changePage = (n:any) => {
        setCurrentClient(n)
    }

  return (
    <section className='flex flex-col items-center justify-center container md:px-0 px-5 mx-auto py-24'>
        <p className='text-[#E20000] font-bold'>
            Temoignages
        </p>
        <h1 className='text-center md:text-[36px] text-[26px] font-semibold my-3'>
            Découvrir les Témoignages des anciens étudiants
        </h1>
        <div className='flex items-center justify-center px-10 '>
            {
                items.map((client) => (
                    <TestimonialCard 
                        key={client.key}
                        client={client}
                    />
                ))
            }
        </div>
        <nav className='mt-10'>
            <ul className='flex items-center gap-5'>
                {
                    numbers.map((n, i) => (
                        <li
                            className={`${currentClient === n ? 'bg-[#003BF9] duration-200 px-6 py-2 rounded-full font-semibold text-white' : 'bg-gray-300 rounded-full px-2 py-2'} cursor-pointer`}
                            key={i}
                            onClick={() => changePage(n)}
                        />
                    ))
                }
            </ul>
        </nav>
    </section>
  )
}

export default Testimonials