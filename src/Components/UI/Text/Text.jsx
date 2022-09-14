import React from 'react'

export const Text = ({TextMainClassName,text}) => {
  return (
    <div>
        <p className={TextMainClassName}>{text}</p>
    </div>
  )
}
