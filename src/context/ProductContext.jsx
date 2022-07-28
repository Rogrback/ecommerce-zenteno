import { createContext, useState, useEffect, useContext } from 'react'
import axios from 'axios'
// import productos from '../assets/inventario.json'

const ProductContext = createContext()

function ProductProvider(props) {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {
         axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
            .then((response) => {
                if (response.status === 200) {
                    setListProducts(response.data)
                    setLoading(false) 
                }
            }).catch((error) => {
                console.log(error)
            })        
                   
    }, [])

    const value = {
        listProducts,
        selectedProduct,
        setSelectedProduct,
        loading,
        search,
        setSearch
    }

    return (
        <ProductContext.Provider value={value} {...props} />
    )
}

const useProductContext = () => {
    const context = useContext(ProductContext)
    return context
}

export {
    ProductProvider,
    useProductContext
}
