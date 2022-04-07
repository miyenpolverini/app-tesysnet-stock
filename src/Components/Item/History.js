import React, { useContext } from 'react'
import cartContext from '../../Context/cartContext'

const History = ({ orden }) => {

    const { parseNumber } = useContext(cartContext)

    return (
        <div className="order">
            <div>
                {orden.product.map(prod =>
                    <li key={prod.id} className='order-container'>
                        <div>
                            <img className="imgProd" src={prod.img} alt='imagen-producto'></img>
                        </div>
                        <div>
                            <p className="detalleOrderDate">{orden.fechaFormat}</p>
                            <p className="detalleOrder">ID {orden.id}</p>
                            <p className="detalleOrder">{prod.name}</p>
                            <p className="detalleOrder">Total $ {parseNumber(prod.price)}</p>
                        </div>
                    </li>
                )}
            </div>
        </div>
    )
}

export default History
