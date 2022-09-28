import React from 'react'



export const MyImage = ({imageSRC,classNameImage,alt,title,id,onClick}) => {
  return (
    // <img src={fotoBryan} alt="" className="classNameImage" />
    <img src={imageSRC} alt={alt} className={classNameImage} title={title} id={id} onClick={onClick} />
  )
}
