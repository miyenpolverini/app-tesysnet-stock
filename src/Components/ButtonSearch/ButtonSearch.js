import React from "react";
import { useState, useContext } from "react"
import './ButtonSearch.scss'
import cartContext from '../../Context/cartContext'
import { FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ButtonSearch = () => {

    const {  setProducts, tableProducts } = useContext(cartContext)

    const [busqueda, setBusqueda] = useState('')

    const handleChange = (event) => {

        setBusqueda(event.target.value)

        console.log('Busqueda: ' + event.target.value)
        filtrar(event.target.value)

    }

    const filtrar = (terminoBusqueda) => {

        var resultadosBusquedas = tableProducts.filter((elemento) => {
            console.log('prueba: ' + elemento.codigo.toString())
            if (elemento.codigo.toString().includes(terminoBusqueda.toUpperCase())
                || elemento.categoria.toString().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        })
        setProducts(resultadosBusquedas)
    }


    return (
        < >
            <InputGroup className="mb-3 inputBuscar">
                <InputGroup.Text id="basic-addon1">
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Busqueda por código o categoría..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={busqueda}
                    onChange={handleChange}
                />
            </InputGroup>
        </>

    )
}

export default ButtonSearch;