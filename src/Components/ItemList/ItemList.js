import React, { useContext } from 'react'
import Item from '../Item/Item'
import { Link, useNavigate } from 'react-router-dom'
import cartContext from '../../Context/cartContext'

const ItemList = ({ productos }) => {

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
            <div className='combo-category'>
                {productos.length !== 0 &&
                    <div>
                        <select className="form-select" aria-label="Default select example"
                            onChange={handleInputChange} >
                            <option value='todasMarcas'>Filtrar por Marca</option>
                            <option value="HP">HP</option>
                            <option value="EPSON">Epson</option>
                        </select>
                    </div>
                }
                {/*   <div>
                    <Link to={'/agregar-producto'}>
                        <button className='botonAgregar'>Agregar nuevo producto</button>
                    </Link>
                </div> */}

            </div>

            <Item key={productos.id} producto={productos} />
        </div>
    )
}

export default ItemList
