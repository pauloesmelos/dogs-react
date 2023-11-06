import React from 'react';

const Button = ({ children, type, ...props }) => {
  return (
    <button type={type}
    className="bg-yellow-400/90 text-orange-1000 py-2 px-5 rounded hover:scale-110 duration-300 disabled:opacity-30 font-light
    text-md w-36"
    {...props}
    >
      {children}
    </button>
  )
}

export default Button;