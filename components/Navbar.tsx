"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import Link from 'next/link'
import { Menu } from '@headlessui/react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-row p-5 justify-between md:flex-row items-center">
                <Image
                    src="/logo.png"
                    alt="E-learning"
                    width={80}
                    height={80}
                />
                {/* Desktop Navbar */}
                <>
                    <nav className="md:ml-auto gap-8 md:mr-auto md:flex hidden flex-wrap items-center text-base justify-center">
                        {
                            NavLinks.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.link}
                                    className='font-semibold text-sm text-gray-600 hover:text-black duration-300'
                                >
                                    {item.title}
                                </Link>
                            ))
                        }
                    </nav>
                    <div className='md:flex hidden items-center space-x-6'>
                        <Link
                            href="/login"
                            className='font-semibold text-md text-gray-700 hover:text-black duration-300'
                        >
                            Se connecter
                        </Link>
                        <Link
                            href="/signup"
                            className='text-[#003BF9] font-semibold bg-[#003BF933] px-3 py-2 rounded-xl border-2 border-[#003BF9] duration-300 hover:bg-[#003BF9] hover:text-white'
                        >
                            Devenir enseignant
                        </Link>
                    </div>
                </>
                {/* Mobile Navbar */}
                <div className='md:hidden flex relative'>
                    <Menu >
                        <Menu.Button onClick={() => setToggle((prev) => !prev)}>
                            {
                                toggle ? (
                                    <Image
                                        src='/close.svg'
                                        alt="menu"
                                        width={40}
                                        height={40}
                                    />
                                ) : (
                                    <Image
                                        src='/menu.svg'
                                        alt="menu"
                                        width={40}
                                        height={40}
                                    />
                                )
                            }
                        </Menu.Button>
                        <Menu.Items className="flex flex-col gap-3 bg-[#003BF9] z-20 top-12 p-6 rounded-xl w-56 text-white absolute right-5">
                            {
                                NavLinks.map((item) => (
                                    <Menu.Item
                                        key={item.title}
                                    >
                                        <Link
                                            href={item.link}
                                        >
                                            {item.title}
                                        </Link>
                                    </Menu.Item>
                                ))
                            }
                            <div className='mt-5 flex flex-col space-y-3'>
                                <Menu.Item >
                                    <Link href='/login' className='bg-white text-[#003BF9] font-semibold px-4 py-2 text-sm rounded-xl'>Se connecter</Link>
                                </Menu.Item>
                                <Menu.Item >
                                    <Link href='/signup' className='bg-white text-[#003BF9] font-semibold px-4 py-2 text-sm rounded-xl'>Devenir enseignant</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Navbar