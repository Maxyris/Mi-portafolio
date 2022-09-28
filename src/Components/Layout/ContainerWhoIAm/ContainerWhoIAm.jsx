import React from 'react'
import './ContainerWhoIAm.css'
import { Text } from '../../UI/Text/Text'
import { MyImage } from '../../UI/MyImage/MyImage'
import fotoBryan from './../../../Images/BRYAN.jpg';



export const ContainerWhoIAm = () => {
  return (
    <div className='containerWhoiAm'>
      <div className="containerTextWhoIam">
        <Text text="Soy Bryan Steven Osorio Zuleta, desarrollador software enfocado en las bases de datos
        y el front-end, excelente para trabajo en equipo y bajo estres, abierto a aprender
        cada día más. Me gustaría ser parte de tu grupo de programadores para aportar y nutrir
        mis conocimientos." TextMainClassName="textClassName"/>

      </div>
      <div className="containerImage">
        <MyImage imageSRC={fotoBryan} classNameImage="classNameImage"/>
      </div>
    </div>
  )
}
