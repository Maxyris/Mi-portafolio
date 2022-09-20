import React from 'react'
import { MyImage } from '../../UI/MyImage/MyImage'
import { TextH3 } from '../../UI/TextH3/TextH3'
import github from './../../../Images/github.svg'
import discord from './../../../Images/discord.svg'
import whatsapp from './../../../Images/whatsapp.svg'
// import close from './../../../Images/close-outline.svg'
// import { IoClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";



import './Footer.css'


export const Footer = () => {
  return (
    <div className="containerFooter">
        <div className='redes'>
            <TextH3 H3="Mis redes: " />
            <MyImage imageSRC={github} classNameImage="" alt="Github" title="Github"/>
            <MyImage imageSRC={discord} classNameImage="" alt="Discord" title="Discord"/>
            <MyImage imageSRC={whatsapp} classNameImage="" alt="whatsapp" title="whatsapp"/>
        </div>
        <div className="overlay active">
            <div className="popup">
                {/* <IoClose></IoClose> */}
                <a href='/' id="btnClosePopup" className='btnClosePopup'><i><IoClose/></i></a>
                <TextH3 H3="Hola mundo"/>
            </div>
        </div>
    </div>
    
  )
}
