import React from 'react'

const CustomButton = ({ title, bgColor, onClick, textColor }: any) => {
  return (
    <button
        type='button'
        className={`${bgColor} ${textColor} px-6 py-4 rounded-xl font-semibold`}
        onClick={onClick}
    >
        {title}
    </button>
  )
}

export default CustomButton