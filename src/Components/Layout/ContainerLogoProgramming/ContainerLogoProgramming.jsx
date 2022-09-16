import React from 'react'
import { MyImage } from '../../UI/MyImage/MyImage'
import { TextH3 } from '../../UI/TextH3/TextH3'
import Angular from './../../../Images/angular.png'
import PHP from './../../../Images/php.png'
import JAVA from './../../../Images/java.png'
import DOCKER from './../../../Images/docker.png'
import C from './../../../Images/c++.png'
import './ContainerLogoProgramming.css'


export const ContainerLogoProgramming = () => {
  return (
    <div className='ContainerLearnProgramming'>
        <div className="textH3Learn">
            <TextH3 H3="Proximas a aprender"/>
        </div>
        <div className="contLogos">
            <div className="LogosLearn">
                <MyImage imageSRC={Angular} classNameImage="LogoProgramming" alt="Angular"/>
                <MyImage imageSRC={PHP} classNameImage="LogoProgramming" alt="PHP"/>
                <MyImage imageSRC={JAVA} classNameImage="LogoProgramming" alt="JAVA"/>
                <MyImage imageSRC={DOCKER} classNameImage="LogoProgramming" alt="DOCKER"/>
                <MyImage imageSRC={C} classNameImage="LogoProgramming" alt="C++"/>
            </div>
        </div>
    </div>
  )
}
