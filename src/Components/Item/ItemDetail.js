import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'
import cartContext from '../../Context/cartContext'

const ItemDetail = ({ item }) => {

    const [btnAgregar, setBtnAgregar] = useState(true)

    const { addCarrito, parseNumber, SetNotification, setNotifAdd, notifAdd } = useContext(cartContext)

    const agregarCarrito = (contador) => {

        setNotifAdd(true)
        addCarrito(item.id, item.detail, item.price, item.img, contador)
        setBtnAgregar(false)

    }


    const ButtonViewCart = () => {
        return (
            <div>
                <Link to={'/regalos'}>
                    <button className='botonSeguirCompra'>Agregar otro regalo</button>
                </Link>
                <Link to={'/cart'}>
                    <button className='botonVerCarrito'>Continuar</button>
                </Link>
            </div>
        )
    }


    return (
        <div >
            <div className="itemDetalle">
                <div>
                    <img className="itemImg" src={item.img} alt={item.name}></img>
                </div>
                <div>
                    <h2 className='itemDetail'>{item.detail}</h2>
                    <p className='itemCarac'>{item.include}</p>
                    <h4 className="itemPrecio">$ {parseNumber(item.price)}</h4>
                    {btnAgregar ? <ItemCount onAdd={(contador) => agregarCarrito(contador)} stock={item.stock} initial={1} />
                        : <ButtonViewCart />}
                </div>
            </div>
            <div>
                {notifAdd && <SetNotification message='add' />}
            </div>
        </div>
    )
}

export default ItemDetail
