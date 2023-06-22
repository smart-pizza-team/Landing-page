import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Image_about.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
    return (
        <section className='about' id='about'>

            <div className="about-section-container">
                <div className="about-background-image-container">
                    <img src={AboutBackground} alt="" />
                </div>
                <div className="about-section-image-container">
                    <img src={AboutBackgroundImage} alt="" />
                </div>
                <div className="about-section-text-container">
                    <p className="primary-subheading">Sobre</p>
                    <h1 className="primary-heading">
                        Cuidar de pedidos nunca foi tão fácil
                    </h1>
                    <p className="primary-text">
                        Desenvolvemos este sistema para pizzarias afim de facilitar o trabalho
                        dos garçons, para enviar pedidos a cozinha e organizar a fabricação.
                    </p>
                    <p className="primary-text">
                        Assine um de nossos planos para obter nosso sistema
                        e adapte o seu negócio para uma melhor eficiencia.
                    </p>
                    <div className="about-buttons-container">
                        <button className="secondary-button">Saiba mais</button>
                        <button className="watch-video-button">
                            <BsFillPlayCircleFill /> Vídeo promocional
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;