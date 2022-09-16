import React from 'react'
import './ContainerWhoIAm.css'
import { Text } from '../../UI/Text/Text'
import { MyImage } from '../../UI/MyImage/MyImage'



export const ContainerWhoIAm = () => {
  return (
    <div className='containerWhoiAm'>
      <div className="containerTextWhoIam">
        <Text text="Mi nombre es Bryan Steven Osorio Zuleta soy tecnológo en Analisis y desarrollo de sistemas de información
          del SENA Galan de la ciudad de Armenia-Quindio, tengo 19 años y soy una persona seria." TextMainClassName="textClassName"/>
      </div>
      <div className="containerImage">
        <MyImage/>
      </div>
    </div>
  )
}
