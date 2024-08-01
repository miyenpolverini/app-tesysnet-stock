import React, { useContext } from 'react'
import ItemTodos from '../Item/ItemTodos'
import { Link, useNavigate } from 'react-router-dom'
import cartContext from '../../Context/cartContext'

const ListarTodos = ({ productos }) => {

    const { setMarca, setPrice } = useContext(cartContext)

    let navigate = useNavigate()

    const handleInputChange = (event) => {

        setMarca(event.target.value)

        navigate(`/category/${event.target.value}`)

    }

    const handlePriceChange = (event) => {

        setPrice(event.target.value)

        navigate(`/category/${event.target.value}`)

    }


    return (
        <div>
            <ItemTodos key={productos.id} producto={productos} />
        </div>
    )
}

export default ListarTodos
