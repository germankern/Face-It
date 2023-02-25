import React from 'react'
import Eventos from '../images/Eventos.svg'
import './buttonLinksContainer.css'
import Recomendaciones from '../images/Recomendaciones.svg'
import Incripciones from '../images/Incripciones.svg'


const ButtonLinksContainer = () => {
    return (
        <div className='link-container'>
            <div className='link-items'>
                <img className='img-items' src={Eventos} alt="" />
                <a className='link-events' href='https://www.google.com/?hl=es'>Eventos</a>
            </div>
            <div className='link-items'>
                <img className='img-items' src={Incripciones} alt="" />
                <a className='link-events' href='https://www.google.com/?hl=es'>Inscripciones</a>
            </div>
            <div className='link-items'>
                <img className='img-items' src={Recomendaciones} alt="" />
                <a className='link-events' href='https://www.google.com/?hl=es'>Recomendaciones</a>
            </div>
            
        </div>
    )
}

export default ButtonLinksContainer