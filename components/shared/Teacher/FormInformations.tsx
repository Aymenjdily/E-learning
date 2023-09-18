"use client"

import { useState, useEffect } from 'react'
import CustomInput from '../CustomInput'
import CustomMenu from '../CustomMenu'
import { CustomButton } from '@/components'

const FormInformations = ({ setCurrentForm, setformData, formDataTeacher }: any) => {
    const handleStateChange = (fieldName:any, value:any) => {
        setformData((prev:any) => ({ ...prev, [fieldName]: value}))
    }
    const [error, setError] = useState('')

    const [isAllowed, setIsAllowed] = useState(false)
    const [disabled, setdisabled] = useState(true)

    useEffect(() => {
        if(formDataTeacher.level !== '' && formDataTeacher.subject !== '' && formDataTeacher.phone !== '' && formDataTeacher.email !== '' && formDataTeacher.secondName !== '' && formDataTeacher.name !== ''){
            setIsAllowed(true)
            setdisabled(false)
        }
        if(formDataTeacher.level === '' || formDataTeacher.subject === '' || formDataTeacher.phone === '' || formDataTeacher.email === '' || formDataTeacher.secondName === '' || formDataTeacher.name === ''){
            setIsAllowed(false)
            setdisabled(true)
        }
    }, [formDataTeacher])
    

    const setDate = (e: any) => {
        e.preventDefault()

        if(formDataTeacher.name === ''){
            return setError('Le champ du nom est obligatoire')
        } else if(formDataTeacher.name !== ''){
            setError('')
        }

        if(formDataTeacher.secondName === ''){
            return setError('Le champ du prénom est obligatoire')
        } else if(formDataTeacher.secondName !== ''){
            setError('')
        }

        if(formDataTeacher.email === ''){
            return setError('Le champ du email est obligatoire')
        } else if(formDataTeacher.email !== ''){
            setError('')
        }

        if(formDataTeacher.phone === ''){
            return setError('Le champ du télephone est obligatoire')
        } else if(formDataTeacher.phone !== ''){
            setError('')
        }

        if(formDataTeacher.level === ''){
            return setError('Le champ du niveau de formation est obligatoire')
        } else if(formDataTeacher.level !== ''){
            setError('')
        }

        if(formDataTeacher.subject === ''){
            return setError('Le champ du matière est obligatoire')
        } else if(formDataTeacher.subject !== ''){
            setError('')
        }

        if(formDataTeacher.level !== '' && formDataTeacher.subject !== '' && formDataTeacher.phone !== '' && formDataTeacher.email !== '' && formDataTeacher.secondName !== '' && formDataTeacher.name !== ''){
            setCurrentForm(2)
        }
    }

    return (
        <form className='flex flex-col gap-7'>
            <div className='flex items-center gap-5'>
                <CustomInput type="text" placeholder="Nom" state={formDataTeacher.name} setState={(value: any) => handleStateChange('name',  value)}/>
                <CustomInput type="text" placeholder="Prénom" state={formDataTeacher.secondName} setState={(value: any) => handleStateChange('secondName',  value)}/>
            </div>
            <CustomInput type="email" placeholder="Email" state={formDataTeacher.email} setState={(value: any) => handleStateChange('email',  value)}/>
            <CustomInput type="number" placeholder="Télephone" state={formDataTeacher.phone} setState={(value: any) => handleStateChange('phone',  value)} />
            <CustomMenu setformData={setformData} formDataTeacher={formDataTeacher} />
            <CustomInput type="text" placeholder="Matiére de préférence" state={formDataTeacher.subject} setState={(value: any) => handleStateChange('subject',  value)} />
            {
                error && (
                    <div className='bg-red-200 text-red-500 font-bold p-2 border-2 border-red-500 rounded-xl pl-5'>
                        {error}
                    </div>
                )
            }
            <CustomButton
                title="Suivant"
                bgColor="bg-[#003BF9]"
                type="submit"
                textColor="text-white"
                onClick={setDate}
                disabled={disabled}
                notAllowedClass={isAllowed ? "" : "duration-200 bg-gray-300 text-"}
            />
        </form>
    )
}

export default FormInformations