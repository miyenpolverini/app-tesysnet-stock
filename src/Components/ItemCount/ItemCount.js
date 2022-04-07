import React from 'react'
import './ItemCount.scss';
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const ItemCount = ({ onAdd, stock, initial }) => {

    const [contador, setContador] = useState(initial)

    /* funciones */
    const increment = () => {
       
            setContador(contador + 1)
        
    }

    const decrement = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const initialize = () => {
        setContador(initial)
        
    }


    return (
        <div>
            <div className='contenidoCant' >
                <div>
                    <h5 className='cantidad'>Cantidad: </h5>
                </div>
                <div className='contadorContainer' >
                    <div className='boton' onClick={decrement}>
                        <IoIosArrowBack />
                    </div>
                    <div className='boxNum' onClick={initialize}>
                        <h4 className='count'>{contador}</h4>
                    </div>
                    <div className='boton' onClick={increment}>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
            <button className='botonAgregar' onClick={() => onAdd(contador)}>Regalar</button>
        </div>
    )
}

export default ItemCount
