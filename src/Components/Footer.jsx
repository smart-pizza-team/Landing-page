import React from 'react'
import logo from "../Assets/logo.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={logo} alt=''/> 
            </div>
            <div className='footer-icons'> 
                <BsTwitter />
                <SiLinkedin />
                <BsYoutube />
                <FaFacebookF />
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Ajuda</span>
                <span>Compartilhar</span>
                <span>Sobre</span>
                <span>Créditos</span>
                <span>Planos</span>
            </div>
            <div className='footer-section-columns'>
                <span>(85)99841-4376</span>
                <span>smartpizzainteligente@gmail.com</span>
                <span>leandro.soares.oliveira03@aluno.ifce.edu.br</span>
                <span>andre.bessa.moura06@aluno.ifce.edu.br</span>
            </div>
            <div className='footer-section-columns'>
                <span>Termos & Condições</span>
                <span>Privacidade Política</span>
            </div>
        </div>
    </div>
  )
}

export default Footer