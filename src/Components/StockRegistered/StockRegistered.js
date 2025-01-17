import React from 'react'
import { Link } from 'react-router-dom'
import './StockRegistered.scss'

const StockRegistered = () => {



    return (
        <div className='container-compra'>
            <h4 className='detail-compra'>¡Nueva historia clínica registrada con éxito!</h4>
            <Link to={'/consultar'}>
                <button className='botonVerCarrito'>Consultar</button>
            </Link>
        </div>
    )
}

export default StockRegistered
