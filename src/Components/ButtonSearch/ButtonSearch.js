import React from "react";
import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import './ButtonSearch.scss'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cartContext from '../../Context/cartContext'
import { dataBase } from '../../services/firebase/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import { FaSearch } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ButtonSearch = () => {

    let navigate = useNavigate()
    const { setTotalStock, setProducts, products, setTableProducts, tableProducts } = useContext(cartContext)

    const [busqueda, setBusqueda] = useState('')

    const [error, setError] = useState(false)
    const [stock, setStock] = useState(false)
    const [code, setCode] = useState('')
    const [btnAddLoading, setBtnAddLoading] = useState(false)
    const [inputCode, setInputCode] = useState({
        code: ''
    })

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


    const searchCode = (event) => {

        setError(false)
        setBtnAddLoading(true)
        setStock(true)

        event.preventDefault()


        //consulta firebase (CON EL INPUT INGRESADO)

        getDocs(query(collection(dataBase, 'productos'), where('codigo', '==', inputCode.inputsearch.toUpperCase()))).then((QuerySnapshot) => {

            const products = QuerySnapshot.docs.map(doc => {

                return { id: doc.id, ...doc.data() }
            })

            setProducts(products)

        }).catch((error) => {
            console.log('Error conexion firebase', error)
        }).finally(() => {
            setBtnAddLoading(false)
            if (products.length === 0) {
                setError(true)
            }
        })

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

            {error && <h4 className='titleErrorSearch'>No se encontró producto</h4>}
        </>

    )
}

export default ButtonSearch;