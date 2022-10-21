import React from 'react'
import './ContainerWhoIAm.css'
import { Text } from '../../UI/Text/Text'



export const ContainerWhoIAm = () => {
  return (
    <div className='containerWhoiAm'>
      <div className="containerTextWhoIam">
        <Text text="Graduado de bachiller en el año 2020. Seis meses de experiencia laboral siendo 
        parte de Grupo UMA ZF como analista de bases de datos, me enfoco en el desarrollo Front-end y
        las bases de datos." TextMainClassName="textClassName"/>
      </div>
      <div className="containerImage">
      </div>
    </div>
  )
}
