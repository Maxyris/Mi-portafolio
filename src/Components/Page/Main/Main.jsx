import React from 'react'
import './Main.css'
import { ContainerWhoIAm } from '../../Layout/ContainerWhoIAm/ContainerWhoIAm'
import { Header } from '../../Layout/Header/Header'
import { ContainerLogoProgramming } from '../../Layout/ContainerLogoProgramming/ContainerLogoProgramming'



export const Main = () => {
  return (
    <div className='mainContainer'>
        <Header/>
        <ContainerWhoIAm/>
        <ContainerLogoProgramming/>
    </div>
  )
}
