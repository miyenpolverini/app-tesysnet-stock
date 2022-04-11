import React, { useState } from 'react'
import Item from '../Item/Item'
import { useNavigate } from 'react-router-dom'

const ItemList = ({ productos }) => {

    let navigate = useNavigate()

    const handleInputChange = (event) => {
      
        navigate(`/category/${event.target.value}`)

    }


    return (
        <div>
            <div className='combo-category'>
                <select className="form-select" aria-label="Default select example"
                    onChange={handleInputChange} >
                    <option value="todos">Filtrar por categoría</option>
                    <option value="viaje">Luna de Miel</option>
                    <option value="casa">Casa</option>
                </select>
            </div>
            {productos.map(product =>
                <Item key={product.id} producto={product} />
            )}
        </div>
    )
}

export default ItemList
