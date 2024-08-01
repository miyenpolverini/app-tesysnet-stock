import React, { useState, useEffect, useContext } from 'react'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import Loader from '../../Loader'
import { dataBase } from '../../services/firebase/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import cartContext from '../../Context/cartContext'
import { Link, useNavigate } from 'react-router-dom'

import './StockConsultaCategoria.scss'

const StockConsultaCategoria = () => {

    const { saveHistories } = useContext(cartContext)

    const [search, setSearch] = useState({ tipoBusqueda: '', codBusqueda: '' })


    let navigate = useNavigate()


    const dateFormat = (date, locale, options) =>
        new Intl.DateTimeFormat(locale, options).format(date)


    const sendData = (event) => {
        event.preventDefault()
        console.log(search.tipoBusqueda + ' ' + search.codBusqueda)

    }


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
