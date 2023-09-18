"use client"

import { useState } from 'react'
import FormInformations from './Teacher/FormInformations'
import FormFiles from './Teacher/FormFiles'
import { useRouter } from 'next/navigation'

const TeacherSignupForm = () => {
  const [changeForm, setchangeForm] = useState(2)
  const [formDataTeacher, setformDataTeacher] = useState({
    name: "",
    secondName: "",
    email: "",
    phone: "",
    level: "",
    subject: "",
    cv: "",
    photo: "",
    state:"pending"
  })
  const [error, setError] = useState(null)
  const router = useRouter()

  const GetData = async () => {
    if(formDataTeacher.cv !== ""){
        try {
            const response = await fetch("/api/teacher/candidateurs/new", {
              method: "POST",
              body: JSON.stringify({
                cv: formDataTeacher.cv,
                photo: formDataTeacher.photo,
                name: formDataTeacher.name, 
                secondName: formDataTeacher.secondName,
                email: formDataTeacher.email, 
                phone: formDataTeacher.phone,
                level: formDataTeacher.level, 
                subject: formDataTeacher.subject, 
                state: formDataTeacher.state
              }),
            });

            const data = await response.json()
        
            if (response.ok) {
                setError(null)
                // setSuccess("Votre candidature a bien été enregistrée !")
                router.push("/verification");
                // setActive(false)
                setformDataTeacher({
                  name: "",
                  secondName: "",
                  email: "",
                  phone: "",
                  level: "",
                  subject: "",
                  cv: "",
                  photo: "",
                  state:"pending"
                })
                
                // dispatch({
                //     type:'CREATE_CANDIDATER',
                //     payload:data
                // })
            }

            if(!response.ok){
                setError(data && data.error)
            }
        } catch (error) {
            console.log(error);
        }
    }
  }

  return (
    <div className='p-10'>
        <div className='text-center'>
            <h1 className='text-black text-[25px] font-[600]'>
            Devenir Formateur
            </h1>
            <p className='text-[14px] font-[400] text-gray-500'>
                Ravis de vous voir
            </p>
        </div>
        <div className='w-full mt-10'>
          <div className='flex gap-5 items-center'>
            {
              changeForm === 1 && (
                <FormInformations
                  setformData={setformDataTeacher}
                  setCurrentForm={setchangeForm}
                  formDataTeacher={formDataTeacher}
                />
              )
            }
            {
              changeForm === 2 && (
                <FormFiles 
                  setformDataTeacher={setformDataTeacher}
                  setCurrentForm={setchangeForm}
                  formDataTeacher={formDataTeacher}
                />
              )
            }
          </div>
        </div>
    </div>
  )
}

export default TeacherSignupForm