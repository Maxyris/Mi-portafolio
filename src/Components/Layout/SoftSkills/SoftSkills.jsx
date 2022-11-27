import React from 'react'
import { Bullets } from '../../UI/Bullets/Bullets'
import { TextH3 } from '../../UI/TextH3/TextH3'
import './SoftSkills.css'


export const SoftSkills = () => {
return (
    <div className='SoftSkills'>
        <TextH3 classNameTextH3='H3SoftSkills' H3='Habilidades blandas'/>
        <div className="ContainerSoftSkills">
            <div className="BulletsSoftSkills">
                <Bullets text='Trabajo en equipo'/>
                <Bullets text='Creatividad'/>
                <Bullets text='Interrelación personal'/>
            </div>
            <div className="BulletsSoftSkills2">
                <Bullets text='Puntualidad'/>
                <Bullets text='Compromiso'/>
                <Bullets text='Resolución de problemas'/>
            </div>
        </div>
    </div>
)
}
