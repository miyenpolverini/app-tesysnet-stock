import ListarTodos from '../ItemList/ListarTodos'
import './ItemConsulta.scss'
import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../Loader"
import { dataBase } from '../../services/firebase/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import cartContext from '../../Context/cartContext'


const ItemListTodos = (props) => {


    const { category, price, setTotalStock, setProducts, products, setTableProducts, tableProducts } = useContext(cartContext)

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {

            //consulta firebase completa (PANTALLA PRINCIPAL SIN FILTROS)

            (async () => {

                try {

                    const QuerySnapshot = await getDocs(query(collection(dataBase, 'productos'), orderBy('codigo', 'asc')))
                    const products = QuerySnapshot.docs.map(doc => {

                        return { id: doc.id, ...doc.data() }

                    })

                    setProducts(products)
                    setTableProducts(products)
                    console.log(tableProducts)
                    console.log("cant. de registros: " + products.length)

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

    }, [categoryId, category, price])


    return (
        <div className="stock-cartuchos">
            {loading ? <Loader /> : <ListarTodos productos={products} />}
        </div>

    )
}

export default ItemListTodos