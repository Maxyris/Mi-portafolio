import React from 'react'
import { MyImage } from '../../UI/MyImage/MyImage'
import { TextH3 } from '../../UI/TextH3/TextH3'
import github from './../../../Images/github.svg'
import discord from './../../../Images/discord.svg'
import whatsapp from './../../../Images/whatsapp.svg'
import { IoClose } from "react-icons/io5"
import './Footer.css'


export const Footer = () => {
  const AddRemoveClassName = () =>{

    var btnGithubPopup = document.getElementById('btnGithubPopup');
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var btnClosePopup = document.getElementById('btnClosePopup');

    btnGithubPopup.addEventListener('click',function activeClass(){
      overlay.classList.add('active');
      popup.classList.add('active');
    });

    btnClosePopup.addEventListener('click',function removeClass(){
      overlay.classList.remove('active');
      popup.classList.remove('active');
    });
}

  return (
    <div className="containerFooter">
      <TextH3 classNameTextH3="classNameTextH3Footer" H3="Mis redes: " />
      <div className='redes'>
          <div className="buttonsContainerLogoFooter">
            <button id='btnGithubPopup' onClick={()=>{AddRemoveClassName()}} className="btnLogoFooter">
              <MyImage id="" imageSRC={github} classNameImage="ClassImageFooter" alt="Github" title="Github" />
            </button>
            <button id='btnGithubPopup' onClick={()=>{AddRemoveClassName()}} className="btnLogoFooter">
              <MyImage imageSRC={discord} classNameImage="ClassImageFooter" alt="Discord" title="Discord"/>
            </button>
            <button id='btnGithubPopup' onClick={()=>{AddRemoveClassName()}} className="btnLogoFooter">
              <MyImage imageSRC={whatsapp} classNameImage="ClassImageFooter" alt="whatsapp" title="whatsapp"/>
            </button>
          </div>
      </div>
      <div className="overlay " id='overlay'>
        <div className="popup" id='popup'>
          <a href='/' id="btnClosePopup" className='btnClosePopup'>
            <i>
              <IoClose/>
            </i>
          </a>
          <TextH3 H3="Hola mundo"/>
        </div>
      </div>
    </div>
  )
}
