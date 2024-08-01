import React from 'react'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import ItemListTodos from '../ItemListContainer/ItemListTodos'
import { Link } from 'react-router-dom'
import './StockConsulta.scss'

const StockConsulta = () => {


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
