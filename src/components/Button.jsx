import React from 'react'

const Button = ({text, className, icon}) => {
  return (
    <button className={`py-2 px-5 rounded-md cursor-pointer ${className}`}>
        {text}
        <img src={icon} alt="" />
    </button>
  )
}

export default Button