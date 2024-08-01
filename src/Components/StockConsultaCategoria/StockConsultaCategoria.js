import React from 'react'
import { Link } from 'react-router-dom'

import './StockConsultaCategoria.scss'

const StockConsultaCategoria = () => {

    const ButtonsSearch = () => {
        return (
            <div>
                <Link to={'/consultar-por-audio'}>
                    <button className='botonStock'>Audio</button>
                </Link>
                <Link to={'/consultar-por-cables'}>
                    <button className='botonStock'>Cables</button>
                </Link>
                <Link to={'/consultar-por-cartuchos'}>
                    <button className='botonStock'>Cartuchos</button>
                </Link>
                <Link to={'/consultar-por-discos'}>
                    <button className='botonStock'>Discos rígidos</button>
                </Link>
                <Link to={'/consultar-por-juegos'}>
                    <button className='botonStock'>Juegos</button>
                </Link>
                <Link to={'/consultar-por-memorias'}>
                    <button className='botonStock'>Memorias</button>
                </Link>
                <Link to={'/consultar-por-mother'}>
                    <button className='botonStock'>Motherboards</button>
                </Link>
                <Link to={'/consultar-por-mouses'}>
                    <button className='botonStock'>Mouses</button>
                </Link>
                <Link to={'/consultar-por-teclados'}>
                    <button className='botonStock'>Teclados</button>
                </Link>
                <Link to={'/consultar-por-otros'}>
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
