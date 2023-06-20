import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const [email, setEmail] = useState('')

  function sendEmail(e){
    e.preventDefault();

  
    const templateParams = {
      email: email
    }

    emailjs.send("service_w097pa6", "template_9s1ui17", templateParams, "_3YfQ949_HtWh-_Li")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setEmail('')

    }, (err) => {
      console.log("ERRO: ", err)
    })

  }

  return (
    <div className='contact-page-wrapper'>
        <h1 className='primary-heading'>Ficou com alguma dúvida?</h1>
        <h1 className='primary-heading'>Vamos te ajudar!</h1>
        <div className='contact-form-container'>

          <form className='form' onSubmit={sendEmail}>
            <input
            type='email'
            placeholder='Endereço do e-mail' 
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>

            <input className='tertiary-button' type='submit' value="Enviar" />
          </form>

        </div>
    </div>
  )
}

export default Contact