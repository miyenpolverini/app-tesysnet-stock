import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cartContext from '../../Context/cartContext'
import './FormBuy.scss'
import { dataBase } from '../../services/firebase/firebase'
import { collection, addDoc, writeBatch, Timestamp } from 'firebase/firestore'
import Loader from '../../Loader'

const FormBuy = () => {

    const { carrito, calculatePrecioTotal, emptyCart, loadOrder, saveEmail } = useContext(cartContext)

    let navigate = useNavigate()

    const [buying, setBuying] = useState(false)
    const [contact, setContact] = useState({ name: '', email: '', phone: '', comment: '' })


    const handleInputChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })

    }


    const confirmOrder = (event) => {

        setBuying(true)

        saveEmail(contact.email)

        event.preventDefault()

        const newOrder = {
            date: Timestamp.fromDate(new Date()),
            product: carrito,
            total: calculatePrecioTotal(),
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            comment: contact.comment
        }



        const batch = writeBatch(dataBase)


        addDoc(collection(dataBase, 'ordenes'), newOrder).then(({ id }) => {
            batch.commit().then(() => {
                loadOrder(id)
            })
        }).catch((error) => {
            console.log('Error conexion firebase', error)
        }).finally(() => {
            setTimeout(() => {
                navigate('/purchaseCompleted')
                emptyCart()
            }, 500)
        })


    }


    return (
        <>
            {buying ? <Loader tipo='comprando' /> :
                <div className='App-FormBuy'>
                    <h2 className='titleForm mt-3'>¡Tu regalo a un paso!</h2>
                    <form onSubmit={confirmOrder}>
                        <div className="form-floating mb-3 mt-5">
                            <textarea className="form-control" id="floatingTextarea" placeholder='name@example.com' name='comment' onChange={handleInputChange}></textarea>
                            <label className='form-compra'>Dedicatoria</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder='name@example.com' name='name' onChange={handleInputChange} required></input>
                            <label className='form-compra'>Familia</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder='name@example.com' name='email' onChange={handleInputChange} required></input>
                            <label className='form-compra'>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder='name@example.com' name='phone' onChange={handleInputChange} required></input>
                            <label className='form-compra'>Celular</label>
                        </div>
                        <div className='total-regalo mb-2'>TOTAL: $ {calculatePrecioTotal()} </div>
                        <button className='btnFinish' type='submit'>Finalizar mi compra</button>
                        <Link to={'/cart'}>
                            <button className='btnCancel'>Volver</button>
                        </Link>
                    </form>
                </div>
            }
        </>
    )
}

export default FormBuy
