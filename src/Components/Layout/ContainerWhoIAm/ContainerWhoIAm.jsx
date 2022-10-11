import React from 'react'
import './ContainerWhoIAm.css'
import { Text } from '../../UI/Text/Text'



export const ContainerWhoIAm = () => {
  return (
    <div className='containerWhoiAm'>
      <div className="containerTextWhoIam">
        <Text text="Mi nombre es Bryan Steven Osorio Zuleta, tengo 19 años, soy desarrollador software enfocado en las bases de datos
        y el front-end, abierto a aprender cada día más. Me gustaría ser parte de tu equipo
        de programadores para aportar y nutrir mis conocimientos." TextMainClassName="textClassName"/>
      </div>
      <div className="containerImage">
      </div>
    </div>
  )
}
