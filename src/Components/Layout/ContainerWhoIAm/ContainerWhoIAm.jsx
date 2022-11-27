import React from 'react'
import './ContainerWhoIAm.css'
import { Text } from '../../UI/Text/Text'



export const ContainerWhoIAm = () => {
  return (
    <div className='containerWhoiAm'>
      <div className="containerTextWhoIam">
        <Text text="Soy una persona de rápido aprendizaje, aspiro y pienso en grande, me intereso mucho
        por los proyectos grandes, me encanta la parte de las bases de datos y el front-end, soy tolerante,
        empático, paciente, tengo iniciativa y propiedad colectiva." TextMainClassName="textClassName"/>
      </div>
      <div className="containerImage">
      </div>
    </div>
  )
}
