import React from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#003BF9B2] text-white">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:items-start items-center flex flex-col">
                <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className='object-contain'
                />
            <p className="mt-5">Top learning experiences that create more talent in the world.</p>
            </div>
            <div className="flex-grow flex justify-end flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">Easy Cours</h2>
                    <nav className="list-none mb-10 flex flex-col gap-2">
                        {
                            NavLinks.map((item) => (
                                <Link 
                                    key={item.title}
                                    href={item.link}
                                >
                                    <span className="text-gray-200 text-sm">
                                        {item.title}
                                    </span>
                                </Link>
                            ))
                        }
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">Social</h2>
                    <nav className="list-none mb-10 flex flex-col gap-2">
                        <li>
                            <a className="text-gray-200 text-sm">Twitter</a>
                        </li>
                        <li>
                            <a className="text-gray-200 text-sm">Linkedin</a>
                        </li>
                    </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                    <h2 className="title-font font-bold text-white tracking-widest text-sm mb-3">Legal</h2>
                    <nav className="list-none mb-10 flex flex-col gap-2">
                        <li>
                            <a className="text-gray-200 text-sm">Terms</a>
                        </li>
                        <li>
                            <a className="text-gray-200 text-sm">Privacy</a>
                        </li>
                        <li>
                            <a className="text-gray-200 text-sm">Cookies</a>
                        </li>
                        <li>
                            <a className="text-gray-200 text-sm">Contact</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
        <div className="bg-[#003BF9B2]">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                <p className="text-white text-sm text-center sm:text-left">&copy; All rights reserved.</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
        </footer>
  )
}

export default Footer