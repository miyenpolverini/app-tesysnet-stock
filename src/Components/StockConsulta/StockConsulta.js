import React, { useState, useEffect, useContext } from 'react'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import ItemListTodos from '../ItemListContainer/ItemListTodos'
import cartContext from '../../Context/cartContext'
import { Link, useNavigate } from 'react-router-dom'
import './StockConsulta.scss'

const StockConsulta = () => {

    const { saveHistories } = useContext(cartContext)

    const [search, setSearch] = useState({ tipoBusqueda: '', codBusqueda: '' })

    const [filterValue, setFilterValue] = React.useState("");
    const [page, setPage] = React.useState(1);


    let navigate = useNavigate()


    const dateFormat = (date, locale, options) =>
        new Intl.DateTimeFormat(locale, options).format(date)


    const sendData = (event) => {
        event.preventDefault()
        console.log(search.tipoBusqueda + ' ' + search.codBusqueda)

    }


    const ButtonSearchCategory = () => {
        return (
            <div>
                <Link to={'/consultar-por-categoria'}>
                    <button className='botonStock'>Consultar por categoría</button>
                </Link>
            </div>
        )
    }




    return (
        <div className='itemConsulta' >         
            <div className='combo-category'>
                <div>
                    <ButtonSearch />
                </div>
                <div>
                    <ButtonSearchCategory />
                </div>
            </div>
            <ItemListTodos />
        </div>
    )
}

export default StockConsulta
