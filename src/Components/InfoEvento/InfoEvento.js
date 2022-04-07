import React from 'react'
import './InfoEvento.scss'

const InfoEvento = () => {

    return (
        <div className='container-info'>
            <div>
                <h4 className='detail-tit mt-3'>FIESTA</h4>
                <h5 className='detail-info-tit mt-5'>Dirección</h5>
                <h6 className='detail-info'>Janos Hurlingham - Gral Pedro Díaz 1800</h6>
                <h5 className='detail-info-tit mt-3'>Localidad</h5>
                <h6 className='detail-info'>Hurlingham</h6>
                <h5 className='detail-info-tit mt-3'>Provincia</h5>
                <h6 className='detail-info'>Buenos Aires</h6>
                <h5 className='detail-info-tit mt-3'>Fecha y hora</h5>
                <h6 className='detail-info mb-5'>21 de Octubre 2022 19:00hs</h6>
            </div>
            <div>
                <iframe className='contMaps' src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d13136.410066541504!2d-58.6521531!3d-34.6015691!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x95bcbfa55fc3fa81%3A0xc0c4db8eab5784c5!2sJanos%20Hurlingham%20Gral.%20Pedro%20D%C3%ADaz%201800%20B1686%20Hurlingham%20Provincia%20de%20Buenos%20Aires!3m2!1d-34.6015691!2d-58.6521531!5e0!3m2!1ses-419!2sar!4v1647960774711!5m2!1ses-419!2sar" width="600" height="450" title='mapa' loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default InfoEvento
