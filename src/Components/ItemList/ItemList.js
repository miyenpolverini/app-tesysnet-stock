import React, { useContext } from 'react'
import Item from '../Item/Item'
import { useNavigate } from 'react-router-dom'
import cartContext from '../../Context/cartContext'

const ItemList = ({ productos }) => {

    const { setCategory, setPrice } = useContext(cartContext)

    let navigate = useNavigate()

    const handleInputChange = (event) => {

        setCategory(event.target.value)
  
        navigate(`/category/${event.target.value}`)

    }

    const handlePriceChange = (event) => {

        setPrice(event.target.value)
       
        navigate(`/category/${event.target.value}`)

    }


    return (
        <div>
            <div className='combo-category'>
                <div>
                    <select className="form-select" aria-label="Default select example"
                        onChange={handleInputChange} >
                        <option value="todosCat">Filtrar por categoría</option>
                        <option value="viaje">Luna de Miel</option>
                        <option value="casa">Casa</option>
                    </select>
                </div>
                <div>
                    <select className="form-select" aria-label="Default select example"
                        onChange={handlePriceChange} >
                        <option value="todosPre">Filtrar por precio</option>
                        <option value={[0,10000]}>$0 - $10.000</option>
                        <option value={[10000,20000]}>$10.000 - $20.000</option>
                        <option value={[20000,50000]}>$20.000 - $50.000</option>
                        <option value={[50000,500000]}>Más de $50.000</option>
                    </select>
                </div>
            </div>
            {productos.map(product =>
                <Item key={product.id} producto={product} />
            )}
        </div>
    )
}

export default ItemList
