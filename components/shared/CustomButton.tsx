import React from 'react'

const CustomButton = ({ title, bgColor, onClick, textColor, notAllowedClass, disabled, type }: any) => {
  return (
    <button
        type={type || "button"}
        disabled={disabled}
        className={`${bgColor} ${textColor} ${notAllowedClass} px-6 py-4 rounded-xl font-semibold`}
        onClick={onClick}
    >
        {title}
    </button>
  )
}

export default CustomButton