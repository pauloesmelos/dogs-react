import React from 'react'

const Image = ({ src, alt, title, ...props }) => {
  return (
    <>
        <img src={src} alt={alt} title={title} {...props} />
    </>
  )
}

export default Image;