import React from 'react'
import './Main.css'
import { ContainerWhoIAm } from '../../Layout/ContainerWhoIAm/ContainerWhoIAm'
import { Header } from '../../Layout/Header/Header'
import { ContainerLogoProgramming } from '../../Layout/ContainerLogoProgramming/ContainerLogoProgramming'
import { PersonalReference } from '../../Layout/PersonalReference/PersonalReference'
import { Footer } from '../../Layout/Footer/Footer'




export const Main = () => {
  return (
    <div className='mainContainer'>

        <Header/>
        <ContainerWhoIAm/>
        <ContainerLogoProgramming/>
        <div className="containerPersonalReference">
          <PersonalReference/>
        </div>
        <Footer/>
    </div>
  )
}
