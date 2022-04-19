import ItemList from "../ItemList/ItemList"
import './ItemConsulta.scss'
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { dataBase } from '../../services/firebase/firebase'
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore'
import cartContext from '../../Context/cartContext'


const ItemListContainer = (props) => {


    const { category, price } = useContext(cartContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        console.log("%ccategoriaId: " + categoryId, 'background: red')

        var split = price.split(",");
        var desde = split[0];
        var hasta = split[1];

        let priceFrom = parseInt(desde)
        let priceUntil = parseInt(hasta)

        if (categoryId) {

            if (categoryId === 'todosCat') {

                if (price === '' || price === 'todosPre') {

                    //consulta firebase (TODAS LAS CATEGORIAS) 

                    (async () => {

                        try {

                            const QuerySnapshot = await getDocs(query(collection(dataBase, 'regalos'), orderBy('category')))
                            const products = QuerySnapshot.docs.map(doc => {

                                return { id: doc.id, ...doc.data() }

                            })
                            setProducts(products)
                            setLoading(false)
                        } catch (error) {
                            console.log('error', error)
                        }
                    })()

                }

                else {

                    //consulta firebase (TODAS LAS CATEGORIAS CON FILTRO DE PRECIOS)

                    getDocs(query(collection(dataBase, 'regalos'), where('price', '>=', priceFrom), where('price', '<=', priceUntil))).then((QuerySnapshot) => {

                        const products = QuerySnapshot.docs.map(doc => {

                            return { id: doc.id, ...doc.data() }
                        })

                        setProducts(products)
                    }).catch((error) => {
                        console.log('Error conexion firebase', error)
                    }).finally(() => {
                        setLoading(false)
                    })

                }

            }

            else if (categoryId === 'todosPre') {

                if (category === '' || category === 'todosCat') {

                    //consulta firebase (TODAS LAS CATEGORIAS) 

                    (async () => {

                        try {

                            const QuerySnapshot = await getDocs(query(collection(dataBase, 'regalos'), orderBy('category')))
                            const products = QuerySnapshot.docs.map(doc => {

                                return { id: doc.id, ...doc.data() }

                            })
                            setProducts(products)
                            setLoading(false)
                        } catch (error) {
                            console.log('error', error)
                        }
                    })()

                }

                else {

                    //consulta firebase (TODAS LAS CATEGORIAS CON FILTRO DE CATEGORIAS)

                    getDocs(query(collection(dataBase, 'regalos'), where('category', '==', category))).then((QuerySnapshot) => {

                        const products = QuerySnapshot.docs.map(doc => {

                            return { id: doc.id, ...doc.data() }
                        })

                        setProducts(products)
                    }).catch((error) => {
                        console.log('Error conexion firebase', error)
                    }).finally(() => {
                        setLoading(false)
                    })

                }

            }

            else if (price === '' || price === 'todosPre') {

                //consulta firebase (CON FILTRO DE CATEGORIAS)

                getDocs(query(collection(dataBase, 'regalos'), where('category', '==', categoryId), orderBy('price'))).then((QuerySnapshot) => {

                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }
                    })

                    setProducts(products)
                }).catch((error) => {
                    console.log('Error conexion firebase', error)
                }).finally(() => {
                    setLoading(false)
                })
            }

            else if (category === '' || category === 'todosCat') {


                //consulta firebase (CON FILTRO DE PRECIOS)

                getDocs(query(collection(dataBase, 'regalos'), where('price', '>=', priceFrom), where('price', '<=', priceUntil))).then((QuerySnapshot) => {

                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }
                    })

                    setProducts(products)
                }).catch((error) => {
                    console.log('Error conexion firebase', error)
                }).finally(() => {
                    setLoading(false)
                })
            }

            else {
                //consulta firebase (CON FILTRO DE CATEGORIAS Y PRECIOS)

                getDocs(query(collection(dataBase, 'regalos'), where('price', '>=', priceFrom), where('price', '<=', priceUntil), where('category', '==', category))).then((QuerySnapshot) => {

                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }
                    })

                    setProducts(products)
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

                    const QuerySnapshot = await getDocs(query(collection(dataBase, 'regalos'), orderBy('category')))
                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }

                    })
                    setProducts(products)
                    setLoading(false)
                } catch (error) {
                    console.log('error', error)
                }
            })()

        }

    }, [categoryId, category, price])


    return (
        <div className="App-Regalos">
            {loading ? <Loader /> : <ItemList productos={products} />}
        </div>

    )
}

export default ItemListContainer