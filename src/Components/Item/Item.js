import React from 'react'
import './Item.scss'
import Popup from '../Popup/Popup'
import { useContext } from 'react'
import cartContext from '../../Context/cartContext'
import { dataBase } from '../../services/firebase/firebase'
import { doc, updateDoc, increment, collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { lineSpinner } from 'ldrs'


/* import Popup from '../Popup/Popup' */


const Item = ({ producto }) => {



    lineSpinner.register()

    const { parseNumber, loaderStock, setLoaderStock, setTotalStock, totalStock, setProducts } = useContext(cartContext)


    const substractStock = (idProducto, stockProducto) => {

        console.log(idProducto)

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
                getDocs(query(collection(dataBase, 'productos'), where('categoria', '==', 'cartuchos'), orderBy('codigo', 'asc'))).then((QuerySnapshot) => {

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
        console.log(idProducto)
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
            getDocs(query(collection(dataBase, 'productos'), where('categoria', '==', 'cartuchos'), orderBy('codigo', 'asc'))).then((QuerySnapshot) => {

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

    return (
        <>

            {
                producto.length === 0 ? <h2 className='tituloCartVacio'> No hay stock</h2>
                    :

                    <div className="tarjetas">

                        {loaderStock &&
                            <div className='loaderStock'>
                                <l-line-spinner

                                    size="45"
                                    stroke="5"
                                    speed="1"
                                    color="black"
                                ></l-line-spinner>
                            </div >
                        }
                        <table className="table table-bordered border-secondary table-light table-hover table-carrito">
                            <thead>
                                <tr>
                                    <th className='table-dark table-tit-cod' scope="col">Código</th>
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
                                            <td className='prod-name'>{product.codigo}</td>
                                            <td>{product.marca.toUpperCase()}</td>
                                            <td className='prod-name'>{product.nombre.toUpperCase()}</td>
                                            <td className='prod-name'>$ {parseNumber(product.precio)}</td>
                                            <td>{product.stock}</td>
                                            <td><GoDash className='iconStock' onClick={() => substractStock(product.id, product.stock)} /></td>
                                            <td><FaPlus className='iconStock' onClick={() => addStock(product.id)} /></td>
                                            <td><Popup idProducto={product.id} /></td>
                                        </tr>
                                    )
                                })}
                                <tr>
                                    <td colSpan="4" className='titStock'>TOTAL EN STOCK</td>
                                    <td className='totalStock'>{totalStock}</td>
                                    <td colSpan="3"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div >
            }
        </>
    )

}

export default Item
