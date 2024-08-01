import React from 'react'
import ItemTodos from '../Item/ItemTodos'

const ListarTodos = ({ productos }) => {


    return (
        <div>
            <ItemTodos key={productos.id} producto={productos} />
        </div>
    )
}

export default ListarTodos
