import React, { useState, useContext, useRef } from 'react'
import cartContext from '../../Context/cartContext'
import './ItemNuevo.scss'
import { dataBase } from '../../services/firebase/firebase'
import { collection, addDoc, writeBatch, getDocs, query, where } from 'firebase/firestore'
import Loader from '../../Loader'

const ItemNuevo = () => {


    const { loadOrder, SetNotification, setNotifAdd, notifAdd, setNotifDel, notifDel } = useContext(cartContext)


    const [stock, setStock] = useState(false)
    const [error, setError] = useState(false)
    const [contact, setContact] = useState({
        name: '', dni: '', email: '', phone: '', osocial: ''
        , nroafiliado: '', comment: ''
    })

    const form = useRef()

    const handleInputChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })

    }


    const confirmOrder = (event) => {

        /* Agregando stock */

        setStock(true)
        setError(false)

        event.preventDefault()

        const newProduct = {
            codigo: contact.codigo.toUpperCase(),
            marca: contact.marca.toUpperCase(),
            nombre: contact.name.toUpperCase(),
            categoria: contact.categoria,
            stock: parseInt(contact.stock),
            precio: parseInt(contact.precio)
        }


        const batch = writeBatch(dataBase)
        const historyExists = []


        /* conexion firebase parametros: referencia base de datos y nombre de la coleccion */
        getDocs(query(collection(dataBase, 'productos'), where('codigo', '==', contact.codigo.toUpperCase()))).then((QuerySnapshot) => {


            QuerySnapshot.forEach((doc) => {
                historyExists.push(doc.data().name);
            })


        }).catch((error) => {
            console.log('Error conexion firebase', error)
        }).finally(() => {
            if (historyExists.length === 0) {
                addDoc(collection(dataBase, 'productos'), newProduct).then(({ id }) => {
                    batch.commit().then(() => {
                        loadOrder(id)
                    })
                }).catch((error) => {
                    console.log('Error conexion firebase', error)
                }).finally(() => {
                    setStock(false)
                    setNotifAdd(true)

                    form.current.reset()

                   /*  setTimeout(() => {
                        navigate('/consultar-por-cartuchos')
                    }, 2000) */
                })
            }
            else {
                setStock(false)
                setError(true)
                setNotifDel(true)
            }
        })

    }



    return (
        <>
            {stock && <Loader tipo='registrando' />}
            <div>

                <h2 className='titleForm'>Carga de nuevo producto</h2>
                <form ref={form} className='form' onSubmit={confirmOrder}>
                    <div className="form-floating mb-3 mt-5">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder='C0001'
                            name='codigo'
                            maxLength={5}
                            onChange={handleInputChange}
                            required></input>
                        <label className='form-compra'>Código</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect" name='categoria' aria-label="Floating label select example" onChange={handleInputChange} required>
                            <option></option>
                            <option value="cartuchos">CARTUCHOS</option>
                            <option value="cables">CABLES</option>
                            <option value="memoria">MEMORIAS</option>
                            <option value="disco">DISCOS RÍGIDOS</option>
                            <option value="mouse">MOUSES</option>
                            <option value="teclado">TECLADOS</option>
                            <option value="otros">OTROS</option>
                        </select>
                        <label className='form-compra'>Categoría</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder='HP'
                            name='marca'
                            onChange={handleInputChange}
                            required></input>
                        <label className='form-compra'>Marca</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder='Cartucho'
                            name='name'
                            onChange={handleInputChange}
                            required></input>
                        <label className='form-compra'>Nombre</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number"
                            className="form-control"
                            id="floatingInput"
                            placeholder='1'
                            name='stock'
                            maxLength={2}
                            onChange={handleInputChange}
                            required></input>
                        <label className='form-compra'>Stock</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type='number'
                            className="form-control"
                            id="floatingInput"
                            placeholder='10000'
                            name='precio'
                            onChange={handleInputChange}
                            required></input>
                        <label className='form-compra'>Precio</label>
                    </div>

                    {error && <h4 className='titleError'>Error: código existente</h4>}
                    <button className='btnCargar' type='submit'>Cargar</button>
                    {/* <Link to={'/'}>
                        <button className='btnVolver'>Volver</button>
                    </Link> */}
                </form>
            </div>
            {notifDel && <SetNotification />}
            {notifAdd && <SetNotification message='add' />}
        </>
    )
}

export default ItemNuevo
