import React, { useContext } from 'react'
import cartContext from '../../Context/cartContext'
import './Cart.scss'


const CartMobile = ({ regalo }) => {

    const { parseNumber, removeProducto } = useContext(cartContext)


    return (
        <div className="regalos">
            <div className='regalo'>
                <div>
                    <h6>Regalo: </h6>
                </div>
                <div>
                    <p>{regalo.detail}</p>
                </div>
            </div>
            <div className="regalo">
                <div>
                    <h6>Cantidad: </h6>
                </div>
                <div>
                    <p>{regalo.cantidad}</p>
                </div>
            </div>
            <div className="regalo">
                <div>
                    <h6>Precio: </h6>
                </div>
                <div>
                    <p>$ {parseNumber(regalo.price)}</p>
                </div>
            </div>
            <div className="regalo">
                <div>
                    <h6>Subtotal: </h6>
                </div>
                <div>
                    <p>$ {parseNumber(`${regalo.cantidad * regalo.price}`)}</p>
                </div>
            </div>
            <div className="regalo-eliminar">
                <button className='botonEliminarRegalo' onClick={() => removeProducto(regalo.id)}>Eliminar regalo</button>
            </div>
        </div>
    )
}

export default CartMobile