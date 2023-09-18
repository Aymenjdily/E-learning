import React from 'react'

const CustomInput = ({ placeholder, state, setState, type, name, disabled, classes }:any) => {
  return (
    <input disabled={disabled} name={name} placeholder={placeholder} type={type} className={`${classes ? '' : 'px-4 py-3 w-full font-bold placeholder:text-gray-400 text-black border-2 border-gray-200 outline-none rounded-xl'}`} value={state} onChange={(e) => setState(e.target.value)}  />
  )
}

export default CustomInput