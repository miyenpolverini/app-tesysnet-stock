import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { dataBase } from '../../services/firebase/firebase'
import { doc, deleteDoc, collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useContext } from 'react'
import cartContext from '../../Context/cartContext'
import './Popup.scss'

const Popup = ({ idProducto }) => {

    const { setLoaderStock, setTotalStock, setProducts } = useContext(cartContext)

    const [show, setShow] = useState(false)

    const removeProducto = (idProducto) => {

        setShow(false)

        /* activo el loader */
        setLoaderStock(true)

        // Elimino el producto de firebase
        const productoRef = doc(dataBase, "productos", idProducto);
        (async () => {
            try {
                await deleteDoc(productoRef)
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

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                <img className='tachito' src='https://res.cloudinary.com/dw94zgfgu/image/upload/v1721439643/delete-svgrepo-com_2_twbezu.png' alt='carrito-lleno'
                ></img>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>¿Desea eliminar el producto?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={() => removeProducto(idProducto)}>
                        Si, eliminar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup