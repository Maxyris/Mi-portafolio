import React from 'react'
import DataTable from 'react-data-table-component'
import 'styled-components'
import './PersonalReference.css'

const PersonalReferenceTable = [
    {id:1, nombre:"Arle Morales Ortiz", cargo:"Instructor SENA y Desarrollador Software",telefono:"3137082781",correo:"amorales512@misena.edu.co"},
    {id:2, nombre:"Juan David Romero Rendón", cargo:"Operario",telefono:"3207480490",correo:"romerojuandavid519@gmail.com"},
    {id:3, nombre:"Michael Giraldo", cargo:"Desarrollador fullstack senior",telefono:"3012672710",correo:"michaelgiraldo40@gmail.com"}
]

const columnas = [
    {
        name: 'Nombre',
        selector: 'nombre',
        sortable: true,
        
    },
    {
        name: 'Cargo',
        selector: 'cargo',
        sortable: true
    },
    {
        name: 'Telefono',
        selector: 'telefono',
        sortable: true
    },
    {
        name: 'Correo',
        selector: 'correo',
        sortable: true
    }
]


export const PersonalReference = () => {
  return (
    <div className='datatablePersonalReference'>
        <DataTable
        columns={columnas}
        data={PersonalReferenceTable}
        title="Referencias personales"  
        />
    </div>
  )
}