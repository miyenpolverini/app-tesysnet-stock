import React from 'react'
import { Link } from 'react-router-dom'

import './StockConsultaCategoria.scss'

const StockConsultaCategoria = () => {

    const ButtonsSearch = () => {
        return (
            <div>
                <Link to={'/consultar-por-dni'}>
                    <button className='botonStock'>Audio</button>
                </Link>
                <Link to={'/consultar-por-cables'}>
                    <button className='botonStock'>Cables</button>
                </Link>
                <Link to={'/consultar-por-cartuchos'}>
                    <button className='botonStock'>Cartuchos</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Discos rígidos</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Juegos</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Memorias</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Motherboards</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Mouses</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Teclados</button>
                </Link>
                <Link to={'/consultar-por-obra-social'}>
                    <button className='botonStock'>Otros</button>
                </Link>

            </div>
        )
    }




    return (
        <div className='itemConsulta'>
            <ButtonsSearch />
        </div>
    )
}

export default StockConsultaCategoria
