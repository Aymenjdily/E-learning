"use client"

import { useState, useEffect } from 'react'
import CustomInput from '../CustomInput'
import { CustomButton } from '@/components';
import Link from 'next/link';
import FormInformations from './FormInformations';

const FormFiles = ({ setCurrentForm, setformDataTeacher, formDataTeacher }: any) => {
  const [disabled, setdisabled] = useState(true)
  const [cvUrl, setCvUrl] = useState('')
  const [active, setActive] = useState(false)
  const [activeButton, setActiveButton] = useState(true)

  function handleOnChange(changeEvent:any) {
    const reader = new FileReader();

    if(changeEvent.target && changeEvent.target.files) {
      reader.readAsDataURL(changeEvent.target.files[0]);
    }
    setdisabled(false)
  }

  function handleOnChangeDocument(event:any) {
    const reader = new FileReader();

    if(event.target && event.target.files) {
        reader.readAsDataURL(event.target.files[0]);
    }
    setdisabled(false)
  }

  const uploadCV = async (event:any) => {

    try {
        const form = event.currentTarget;
        // @ts-ignore
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'cv');

        const formData = new FormData();
        // @ts-ignore
        for ( const file of fileInput.files ) {
          formData.append('file', file);
        }

        formData.append('upload_preset', 'e-learning');

        const data = await fetch('https://api.cloudinary.com/v1_1/dv8eu81da/image/upload', {
              method: 'POST',
              body: formData
        });

        const res = await data.json()

        if(data.ok){
          await setformDataTeacher((prev:any) => ({ ...prev, ['cv']: res.secure_url}))
        }

    } catch (error) {
        console.log(error)
    }
  }

  const uploadDocument = async (event:any) => {

    try {
        const form = event.currentTarget;
        // @ts-ignore
        const fileInput = Array.from(form.elements).find(({ name }) => name === 'photo');

        const formDataDoc = new FormData()
        // @ts-ignore
        for ( const file of fileInput.files ) {
            formDataDoc.append('file', file);
        }

        formDataDoc.append('upload_preset', 'my-amc-uploads');

        const dataDoc = await fetch('https://api.cloudinary.com/v1_1/dv8eu81da/image/upload', {
           method: 'POST',
           body: formDataDoc
        });

        const res = await dataDoc.json()

        if(dataDoc.ok){
          await setformDataTeacher((prev:any) => ({ ...prev, ['photo']: res.secure_url}))
        }
    } catch (error) {
        console.log(error)
    }
}

  const uploadToCloud = (event:any) => {
    event.preventDefault();
    setActive(true)

    uploadCV(event)
    uploadDocument(event)

    setTimeout(() => {
        // setIsUploaded(false)
        // setIsDisabled(true)
        setActive(false)
        setdisabled(true)
        setActiveButton(false)
    }, 4000);
}
  

  return (
    <form className='flex flex-col gap-7' onSubmit={uploadToCloud}>
      <div>
        <button className='text-[#003BF9] underline underline-offset-8' type='button' onClick={() => setCurrentForm(1)}>
          Retour aux informations
        </button>
      </div>
      
      <div className='flex flex-col gap-7'>
        <div className='flex items-center gap-5'>
          <CustomInput
            state={formDataTeacher.name}
            disabled={true}
          />
          <CustomInput
            state={formDataTeacher.secondName}
            disabled={true}
          />
        </div>
        <div className='flex items-center gap-5'>
          <CustomInput
            state={formDataTeacher.email}
            disabled={true}
          />
          <CustomInput
            state={formDataTeacher.phone}
            disabled={true}
          />
        </div>
        <div className='flex items-center gap-5'>
          <CustomInput
            state={formDataTeacher.level}
            disabled={true}
          />
          <CustomInput
            state={formDataTeacher.subject}
            disabled={true}
          />
        </div>
      </div>


      <div className='bg-gray-200 p-5 rounded-xl flex items-center'>
        {/* <CustomInput
          type="file"
          name="cv"
          classes="file:bg-[#003BF9] file:px-5 py-2"
          setState={handleOnChange}
        /> */}
        <label htmlFor="cv" className='bg-[#003BF9] px-5 py-2 text-white rounded-xl shadow-lg mr-5 font-bold'>
          CV
        </label>
        <input id="cv" onChange={(e:any) => handleOnChange(e.target.value)} name="cv" className="file:bg-[#003BF9] file:p-2 file:rounded-xl file:text-white file:outline-none file:border-none file:hidden file:px-5 file:mr-4 font-semibold" type="file" />
        {/* <p className='text-[#003BF9] font-bold text-sm mt-2'>
          Importer le CV ( 15 Mo Max)
        </p> */}
      </div>
      <div className='bg-gray-200 p-5 rounded-xl flex items-center'>
        <label htmlFor="photo" className='bg-[#003BF9] px-5 py-2 text-white rounded-xl shadow-lg mr-5 font-bold'>
          Photo
        </label>
        <input id="photo" onChange={(e:any) => handleOnChangeDocument(e.target.value)} name="photo" className="file:bg-[#003BF9] file:p-2 file:rounded-xl file:text-white file:outline-none file:border-none file:hidden file:px-5 file:mr-4 font-semibold" type="file" />
        {/* <CustomInput
          type="file"
          name="photo"
          setState={handleOnChangeDocument}
        /> */}
        {/* <p className='text-[#003BF9] font-bold text-sm mt-2'>
          Importer une Photo
        </p> */}
      </div>
      <div className='flex items-center gap-5'>
        <CustomButton
          title={ active ? "En upload..." : "Suivant"}
          bgColor="bg-[#003BF9]"
          textColor="text-white"
          type="submit"
          disabled={disabled}
          notAllowedClass={!disabled ? "" : "duration-200 bg-gray-300 text-semibold"}
        />
        <CustomButton
          type="button"
          title="S'inscrire"
          bgColor="bg-[#003BF9]"
          textColor="text-white w-full"
          disabled={activeButton}
          notAllowedClass={!activeButton ? "" : "duration-200 bg-gray-300 text-semibold"}
        />
      </div>
    </form>
  )
}

export default FormFiles