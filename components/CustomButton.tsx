import React from 'react'

const CustomButton = ({ title, bgColor }: any) => {
  return (
    <button
        type='button'
        className={`${bgColor} text-white px-6 py-4 rounded-xl font-semibold`}
    >
        {title}
    </button>
  )
}

export default CustomButton