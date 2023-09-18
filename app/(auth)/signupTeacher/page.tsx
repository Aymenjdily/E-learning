import React from 'react'
import Image from 'next/image'
import { TeacherSignupForm } from '@/components'

const SignupTeacher = () => {
  return (
    <section className='flex min-h-screen max-h-full'>
        <div className='md:flex flex-col flex-1 hidden blue-background relative'>
            <div>
                <Image
                    width={150}
                    height={100}
                    alt="logo"
                    src="/logo.png"
                    className='object-contain m-5'
                />
            </div>
            <div className='text-center '>
                <h1 className='text-white text-[45px] font-[700]'>
                    Devenir un Formateur
                </h1>
                <p className='text-white px-[50px]'>
                    Nous sommes ravis que vous souhaitiez partager vos connaissances et devenir un formateur sur notre plateforme. En tant que formateur, vous aurez l'occasion d'inspirer et d'enseigner à une communauté d'apprenants passionnés du monde entier.
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <Image
                    width={900}
                    height={700}
                    src="/teacher.png"
                    alt="teacher"
                    className='object-contain absolute bottom-0'
                />
            </div>
        </div>
        <div className='flex-1 flex items-center justify-center'>
            <TeacherSignupForm />
        </div>
    </section>
  )
}

export default SignupTeacher