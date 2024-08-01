import ItemList from "../ItemList/ItemList"
import './ItemConsulta.scss'
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { dataBase } from '../../services/firebase/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import cartContext from '../../Context/cartContext'


const ItemListCables = (props) => {


    const { category, price, setTotalStock } = useContext(cartContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        console.log("%ccategoriaId: " + categoryId, 'background: red')


        if (categoryId) {


            if (categoryId === 'todasMarcas') {

                //consulta firebase (TODOS)
                (async () => {

                    try {

                        const QuerySnapshot = await getDocs(query(collection(dataBase, 'productos'), where('categoria', '==', 'cables'), orderBy('codigo')))
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

                        setLoading(false)
                    } catch (error) {
                        console.log('error', error)
                    }
                })()
            }

            else {

                //consulta firebase (CON FILTRO DE MARCAS)

                getDocs(query(collection(dataBase, 'productos'), where('categoria', '==', 'cables'), where('marca', '==', categoryId))).then((QuerySnapshot) => {

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
                    setLoading(false)
                })

            }
        }

        else {

            //consulta firebase completa (PANTALLA PRINCIPAL SIN FILTROS)

            (async () => {

                try {

                    const QuerySnapshot = await getDocs(query(collection(dataBase, 'productos'), where('categoria', '==', 'cables'), orderBy('codigo')))
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

                    setLoading(false)
                } catch (error) {
                    console.log('error', error)
                }
            })()

        }

    }, [categoryId, category, price])


    return (
        <div className="stock-cartuchos">
            {loading ? <Loader /> : <ItemList productos={products} />}
        </div>

    )
}

export default ItemListCables