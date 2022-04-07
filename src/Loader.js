import React from 'react';
import './Loader.css'

const Loader = (props) => {
    return (
        <>
            <div className="loader"></div>
            {props.tipo === 'preparando' ? <h3 className="loaderDesc1">Preparando todo para tu regalo...</h3> 
            : props.tipo === 'comprando' ? <h3 className="loaderDesc2">Finalizando tu regalo...</h3> 
            : <h3 className="loaderDesc3">Cargando...</h3>}
        </>
    )
}

export default Loader;