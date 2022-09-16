import React from 'react'
import './Main.css'
import { ContainerWhoIAm } from '../../Layout/ContainerWhoIAm/ContainerWhoIAm'
import { Header } from '../../Layout/Header/Header'


export const Main = () => {
  return (
    <div className='mainContainer'>
        <Header/>
        <ContainerWhoIAm/>
    </div>
  )
}
