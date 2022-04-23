import React from 'react'
import './Popup.scss'
import { useState, useEffect, useContext } from 'react';
import cartContext from '../../Context/cartContext'
import { Button, Modal } from 'react-bootstrap';
import { getDoc, doc } from "firebase/firestore"
import { dataBase } from "../../services/firebase/firebase"
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';


const Popup = ({ prodId }) => {

    const [modalShow, setModalShow] = useState(false)
    const [item, setItem] = useState([])
    const [btnAgregar, setBtnAgregar] = useState(true)

    const { addCarrito, parseNumber, SetNotification, setNotifAdd, notifAdd } = useContext(cartContext)


    useEffect(() => {

        getDoc(doc(dataBase, 'regalos', prodId)).then((QuerySnapshot) => {

            const item = { id: QuerySnapshot.id, ...QuerySnapshot.data() }
            setItem(item)

        }).catch((error) => {
            console.log('Error conexion firebase', error)
        }).finally(() => {
            console.log('finalizo')
        })


        return (() => {
            setItem([])
        })


    }, [prodId])

    const agregarCarrito = (contador) => {

        setNotifAdd(true)
        addCarrito(item.id, item.detail, item.price, item.img, contador)
        setBtnAgregar(false)
    }



    function MyVerticallyCenteredModal(props) {

        const ButtonViewCart = () => {
            return (
                <div>
                    <button className='btnAgregarModal' onClick={props.onHide}>Agregar otro regalo</button>
                    <Link to={'/cart'}>
                        <button className='btnIrCarrito'>Continuar</button>
                    </Link>
                </div>
            )
        }


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2>{item.detail}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalDetalle">
                        <div>
                            <img className="modalImg" src={item.img} alt={item.name}></img>
                        </div>
                        <div>
                            <p className='modalCarac'>{item.include}</p>
                            <h4 className="modalPrecio">$ {item.price}</h4>
                            {btnAgregar ? <ItemCount onAdd={(contador) => agregarCarrito(contador)} stock={item.stock} initial={1} />
                                : <ButtonViewCart />}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }




    return (
        <>
            <Button className='btn-modal' variant='secondary' onClick={() => setModalShow(true)}>
                REGALÁ
            </Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default Popup


