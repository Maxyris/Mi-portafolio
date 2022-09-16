import React from 'react'
import { ButtonsHeader } from '../../UI/ButtonsHeader/ButtonsHeader'
import { TitleHeader } from '../../UI/TitleHeader/TitleHeader'
import { NavLink } from "react-router-dom";
import './Header.css'

export const Header = () => {
  return (
    <header className='headerContainer'>
        <div className="containerTitleHeader">
            <TitleHeader headerTitle="Maxyris developer" />
        </div>
        <div className="buttonsHeader">
            <NavLink to='/'><ButtonsHeader text="Home"/></NavLink>
             <ButtonsHeader text="About US"/> {/*falta el navlink de este boton */}
            <NavLink to='/Contact'><ButtonsHeader text="Contact"/></NavLink>
        </div>
    </header>
  )
}
