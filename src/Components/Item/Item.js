import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import cartContext from '../../Context/cartContext'

const Item = ({ producto }) => {

    const { parseNumber } = useContext(cartContext)

    return (
        <div className="tarjetas">
            <div className="tarjeta">
                <div>
                    <Link className="tarjeta-contenido" to={`/detail/${producto.id}`}>
                        <p className='tarjeta-desc'>{producto.include}</p>
                        <div>
                            <img src={producto.img} alt={producto.name} className="cardImg"></img>
                        </div>
                        <p className="detalleProd">{producto.detail}</p>
                        <div className="tarjeta-contenido-detalle">
                            <h6 className="tarjetaPrecio">$ {parseNumber(producto.price)}</h6>
                        </div>
                        <button className='tarjeta-boton'>REGALÁ</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Item
