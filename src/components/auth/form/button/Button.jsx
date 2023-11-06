import React from 'react';

const Button = ({ children, type, ...props }) => {
  return (
    <button type={type}
    className="bg-yellow-400/90 text-yellow-900 py-2 px-5 rounded duration-300 disabled:opacity-30 font-light
    w-36 hover:opacity-70"
    {...props}
    >
      {children}
    </button>
  )
}

export default Button;