"use client"

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { NiveauxCards } from '@/constants'

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]

export default function CustomMenu({setformData, formDataTeacher}:any) {
    const handleStateChange = (fieldName:any, value:any) => {
        setformData((prev:any) => ({ ...prev, [fieldName]: value}))
    }
    return (
        <div className="top-16 w-full">
        <Listbox value={formDataTeacher.level} onChange={(value) => handleStateChange('level', value)}>
            <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 border-2 border-gray-200 focus-visible:ring-offset-[#003BF9] sm:text-sm">
                <span className="block truncate">{formDataTeacher.level || "Niveau à Former"}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                />
                </span>
            </Listbox.Button>
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {NiveauxCards.map((person, personIdx) => (
                    <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-[#003BF9] text-white' : 'text-gray-900'
                        }`
                    }
                    value={person.title}
                    >
                    {({ selected }) => (
                        <>
                        <span
                            className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                            {person.title}
                        </span>
                        {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#003BF9]">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                        ) : null}
                        </>
                    )}
                    </Listbox.Option>
                ))}
                </Listbox.Options>
            </Transition>
            </div>
        </Listbox>
        </div>
    )
}
