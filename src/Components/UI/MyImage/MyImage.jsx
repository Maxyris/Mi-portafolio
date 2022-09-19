import React from 'react'



export const MyImage = ({imageSRC,classNameImage,alt,title}) => {
  return (
    // <img src={fotoBryan} alt="" className="classNameImage" />
    <img src={imageSRC} alt={alt} className={classNameImage} title={title} />
  )
}
