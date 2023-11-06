import React from 'react';

const Input = ({ label, name, id, type, value, setValue, error, ...props }) => {
  // onBlur está sendo passado pelas ...props
  return (
    <div className="my-5">
      <label 
        htmlFor={id}
        className="block text-xl"
      >
        {label}
      </label>
      <input 
        className="border-gray-200 border w-full rounded-md bg-gray-200 p-2 duration-200 outline-none text-lg
        hover:border-yellow-400 hover:shadow  hover:bg-gray-100
        focus:border focus:border-yellow-400 focus:bg-white"
        type={type} 
        id={id} 
        name={name} 
        value={value} 
        onChange={({ target}) => setValue(target.value)} 
        {...props}
      />
      {error && <p className="text-red-600 mt-2 text-md">{error}</p>}
    </div>
  )
}

export default Input;