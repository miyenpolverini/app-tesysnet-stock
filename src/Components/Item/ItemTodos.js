import React from 'react'
import './Item.scss'
import Popup from '../Popup/Popup'
import { useContext, useState } from 'react'
import cartContext from '../../Context/cartContext'
import { dataBase } from '../../services/firebase/firebase'
import { doc, updateDoc, increment, collection, getDocs, query, orderBy } from "firebase/firestore";
import { useMediaQuery } from 'react-responsive'
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { FaPencilAlt } from "react-icons/fa";
import { lineSpinner } from 'ldrs'


/* import Popup from '../Popup/Popup' */


const ItemTodos = ({ producto }) => {

    lineSpinner.register()

    const [editable, setEditable] = useState(false)
    const [id, setId] = useState('')
    const [newPrice, setNewPrice] = useState('')

    const { parseNumber, loaderStock, setLoaderStock, setTotalStock, setProducts } = useContext(cartContext)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1250px)'
    })


    const substractStock = (idProducto, stockProducto) => {

        if (stockProducto > 0) {
            console.log(stockProducto)

            /* activo el loader */
            setLoaderStock(true)

            const productoRef = doc(dataBase, "productos", idProducto);

            // Resto el stock de firebase
            (async () => {

                try {
                    await updateDoc(productoRef, {
                        stock: increment(-1)
                    })
                } catch (error) {
                    console.log('error', error)
                }
            })()

            // Vuelvo a consultar el stock de firebase
            setTimeout(() => {
                getDocs(query(collection(dataBase, 'productos'), orderBy('codigo', 'asc'))).then((QuerySnapshot) => {

                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }
                    })

                    setProducts(products)

                    //calculo el total y lo seteo en un estado
                    let total = 0
                    for (let i = 0; i < products.length; i++) {
                        let objeto_producto = products[i]
                        total = total + (parseInt(objeto_producto.stock))
                    }
                    setTotalStock(total)

                }).catch((error) => {
                    console.log('Error conexion firebase', error)
                }).finally(() => {
                    /* desactivo el loader */
                    setLoaderStock(false)
                })
            }, 1500)

        }

    }

    const addStock = (idProducto) => {

        setLoaderStock(true)

        const productoRef = doc(dataBase, "productos", idProducto);

        // Incremento el stock
        (async () => {

            try {
                await updateDoc(productoRef, {
                    stock: increment(1)
                })
            } catch (error) {
                console.log('error', error)
            }
        })()

        setTimeout(() => {
            getDocs(query(collection(dataBase, 'productos'), orderBy('codigo', 'asc'))).then((QuerySnapshot) => {

                const products = QuerySnapshot.docs.map(doc => {

                    return { id: doc.id, ...doc.data() }
                })

                setProducts(products)

                //calculo el total y lo seteo en un estado
                let total = 0
                for (let i = 0; i < products.length; i++) {
                    let objeto_producto = products[i]
                    total = total + (parseInt(objeto_producto.stock))
                }
                setTotalStock(total)

            }).catch((error) => {
                console.log('Error conexion firebase', error)
            }).finally(() => {
                setLoaderStock(false)
            })
        }, 1500)


    }

    const handlePencil = (id) => {
        setNewPrice('')
        setEditable(true)
        setId(id)
    }

    const handlePrice = (event) => {

        setNewPrice(event.target.value)

    }

    const updatePrice = (idProducto) => {

        console.log(newPrice)

        if (newPrice > 0) {

            setLoaderStock(true)

            const productoRef = doc(dataBase, "productos", idProducto);

            // Incremento el stock
            (async () => {

                try {
                    await updateDoc(productoRef, {
                        precio: newPrice
                    })
                } catch (error) {
                    console.log('error', error)
                }
            })()

            setTimeout(() => {
                getDocs(query(collection(dataBase, 'productos'), orderBy('codigo', 'asc'))).then((QuerySnapshot) => {

                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }
                    })

                    setProducts(products)

                    //calculo el total y lo seteo en un estado
                    let total = 0
                    for (let i = 0; i < products.length; i++) {
                        let objeto_producto = products[i]
                        total = total + (parseInt(objeto_producto.stock))
                    }
                    setTotalStock(total)

                }).catch((error) => {
                    console.log('Error conexion firebase', error)
                }).finally(() => {
                    setLoaderStock(false)
                    setEditable(false)
                })
            }, 1500)

        }
    }

    return (
        <>

            {
                producto.length === 0 ? <h2 className='tituloCartVacio'> No se encontraron productos en stock</h2>
                    :

                    <div className="tarjetas">

                        {loaderStock &&
                            <div className='loaderStock'>
                                <l-line-spinner
                                    size="45"
                                    stroke="5"
                                    speed="1"
                                    color="red"
                                ></l-line-spinner>
                            </div >
                        }
                        <div className="table-scroll">
                            <table className="table table-bordered border-secondary table-light table-hover table-productos">
                                <thead>
                                    <tr>
                                        <th className='table-dark table-tit-cod' scope="col">Código</th>
                                        <th className='table-dark table-tit-marca' scope="col">Categoría</th>
                                        <th className='table-dark table-tit-marca' scope="col">Marca</th>
                                        <th className='table-dark table-tit-det' scope="col">Detalle</th>
                                        <th className='table-dark table-tit-precio' scope="col">Precio</th>
                                        <th className='table-dark table-tit-stock' scope="col">Stock</th>
                                        <th className='table-dark table-tit-tach' scope="col"></th>
                                        <th className='table-dark table-tit-tach' scope="col"></th>
                                        <th className='table-dark table-tit-tach' scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {producto.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <td className='celda-formato1'>{product.codigo}</td>
                                                <td className='celda-formato1'>{product.categoria.toUpperCase()}</td>
                                                <td className='celda-formato2'>{product.marca.toUpperCase()}</td>
                                                <td className='celda-formato1'>{product.nombre.toUpperCase()}</td>
                                                {isDesktopOrLaptop ?
                                                    <td className='celda-formato2'>
                                                        {id === product.id && editable ?
                                                            <div className="input-group">
                                                                <span className="input-group-text">$</span>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={newPrice}
                                                                    onChange={handlePrice} />
                                                                <Button variant="light" onClick={() => updatePrice(product.id)}  >
                                                                    <img className='iconUpdate' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1722389354/status-updated-svgrepo-com_of5s4l.png' alt='carrito-lleno'
                                                                    ></img>
                                                                </Button>
                                                            </div>
                                                            :
                                                            <div className="input-group">
                                                                <span className="input-group-text">$</span>
                                                                <input type="number" className="form-control" value={parseNumber(product.precio)} disabled />
                                                                <Button variant="light" onClick={() => handlePencil(product.id)} >
                                                                    <FaPencilAlt />
                                                                </Button>
                                                            </div>
                                                        }
                                                    </td>
                                                    :
                                                    <td className='celda-formato1'>$ {parseNumber(product.precio)}</td>
                                                }
                                                <td className='celda-formato2'>{product.stock}</td>
                                                <td className='celda-formato2'><GoDash className='iconStock' onClick={() => substractStock(product.id, product.stock)} /></td>
                                                <td className='celda-formato2'><FaPlus className='iconStock' onClick={() => addStock(product.id)} /></td>
                                                <td className='celda-formato2'><Popup idProducto={product.id} /></td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div >
            }
        </>
    )

}

export default ItemTodos
