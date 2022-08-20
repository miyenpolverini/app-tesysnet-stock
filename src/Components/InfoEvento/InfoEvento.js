import React from 'react'
import './InfoEvento.scss'

const InfoEvento = () => {


    return (
        <div className='container-info'>
            <div className='box-evento'>
                <div>
                    <h4 className='detail-tit mt-3'>CEREMONIA</h4>
                    <h5 className='detail-info-tit mt-5'>Dirección</h5>
                    <h6 className='detail-info'>Iglesia Nuestra Señora de Fátima - Colectora Ruta 28 y acceso oeste</h6>
                    <h5 className='detail-info-tit mt-3'>Localidad</h5>
                    <h6 className='detail-info'>General Rodriguez</h6>
                    <h5 className='detail-info-tit mt-3'>Provincia</h5>
                    <h6 className='detail-info'>Buenos Aires</h6>
                    <h5 className='detail-info-tit mt-3'>Fecha y hora</h5>
                    <h6 className='detail-info mb-5'>21 de Octubre 2022 - 18:00hs</h6>
                </div>
                <div>
                    <iframe className='contMaps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13138.04521917269!2d-58.9521968!3d-34.5912301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcc11a1a80c9326f4!2sIglesia%20Nuestra%20Se%C3%B1ora%20de%20F%C3%A1tima!5e0!3m2!1ses-419!2sar!4v1660949760812!5m2!1ses-419!2sar" title='mapa2' allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
            <div id='evento-fiesta' className='box-evento'>
                <div>
                    <h4 className='detail-tit '>FIESTA</h4>
                    <h5 className='detail-info-tit mt-5'>Dirección</h5>
                    <h6 className='detail-info'>Janos Hurlingham - Gral Pedro Díaz 1800</h6>
                    <h5 className='detail-info-tit mt-3'>Localidad</h5>
                    <h6 className='detail-info'>Hurlingham</h6>
                    <h5 className='detail-info-tit mt-3'>Provincia</h5>
                    <h6 className='detail-info'>Buenos Aires</h6>
                    <h5 className='detail-info-tit mt-3'>Fecha y hora</h5>
                    <h6 className='detail-info mb-5'>21 de Octubre 2022 - 20:00hs</h6>
                </div>
                <div>
                    <iframe className='contMaps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13136.410066541504!2d-58.6521531!3d-34.6015691!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0c4db8eab5784c5!2sJanos%20Hurlingham!5e0!3m2!1ses-419!2sar!4v1661026623200!5m2!1ses-419!2sar" width="600" height="450" title='mapa' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
    )
}

export default InfoEvento
