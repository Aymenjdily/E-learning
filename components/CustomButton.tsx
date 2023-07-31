import React from 'react'

const CustomButton = ({ title, bgColor, onClick }: any) => {
  return (
    <button
        type='button'
        className={`${bgColor} text-white px-6 py-4 rounded-xl font-semibold`}
        onClick={onClick}
    >
        {title}
    </button>
  )
}

export default CustomButton