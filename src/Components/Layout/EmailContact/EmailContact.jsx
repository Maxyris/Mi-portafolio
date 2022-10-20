import React from 'react'
import emailjs from '@emailjs/browser'
import './EmailContact.css'

// import Toolbar from '@mui/material/Toolbar';




export const EmailContact = () => {
    const sendEmail = (event) =>{
        event.preventDefault();

        emailjs.sendForm('service_iod3xtx','template_bmuz3wb',event.target,'xOUHxrfFEbKR8NES8')
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    return (
        <div className='div-form'>
          <h1 className='title-form'>¡Contactame!</h1>
          <form className='form-mail' onSubmit={sendEmail}>
            <div className="containerInputName">
              <label>Nombre: </label>
              <input type="text" className='user_name' name='user_name' placeholder='Escribe tú nombre' required/>
            </div>
            
            <div className="containerInputEmail">
              <label>Correo: </label>
              <input type="email" className='user_email' name='user_email' placeholder='E-mail' required/>
            </div>
            
            <div className="containerTextareaMessage">
              <label>Mensage: </label>
              <textarea name="user_message" className='user_message' id="" cols="30" rows="10" placeholder='Escribe tu mensaje' required/>
            </div>
            
            <button className='sendEmailButton'>Enviar</button>
          </form>
        </div>
      )
}
