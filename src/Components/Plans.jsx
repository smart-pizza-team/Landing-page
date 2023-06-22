import React from 'react'
import Mensal from "../Assets/mensal.png";
import Semestral from "../Assets/semestral.png";
import Anual from "../Assets/anual.png";
import plano1 from "../Assets/1 mes.png"
import plano2 from "../Assets/6 meses.png"
import plano3 from "../Assets/1 ano.png"
import { FiArrowRight } from "react-icons/fi";


const Plans = () => {
    const plansInfoData = [
        {
            image: plano1,
            price: Mensal,
            text: "Renovado mensalmente",
            link: 'https://buy.stripe.com/test_3cs8zjesIdi90M0fZ1'
        },
        {
            image: plano2,
            price: Semestral,
            text: "Igual a R$30,90 por mês",
            link: 'https://buy.stripe.com/test_fZebLv1FW1zr52g28c'
        },
        {
            image: plano3,
            price: Anual,
            text: 'Igual a R$25,90 por mês',
            link: 'https://buy.stripe.com/test_7sI7vf3O4a5X7aocMR'
        },
    ];

    return (
        <section className='plans' id='plans'>

            <div className='work-section-wrapper'>
                <div className='work-section-top'>
                    <p className='primary-subheading'>Planos</p>
                    <h1 className='primary-heading'>Nossos planos</h1>
                    <p className='primary-text'>
                        Escolha um de nossos planos para assinar e receber um login por email
                        para descomplicar já seu negócio. Qual é o melhor pra você?
                    </p>
                </div>
                <div className='work-section-bottom' >
                    {
                        plansInfoData.map((data) => (
                            <div className='work-section-info'>
                                <div className='info-boxes-img-container'>
                                    <img src={data.image} alt='' />
                                </div>
                                <img src={data.price} alt='' />
                                <p>{data.text}</p>
                                <a href={data.link}><button className="secondary-button">Assinar <FiArrowRight />{" "} </button></a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Plans