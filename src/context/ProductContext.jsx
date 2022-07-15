import { createContext, useState, useEffect, useContext } from 'react'
import productos from '../assets/inventario.json'

const ProductContext = createContext()

function ProductProvider (props) {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState({})
    const [search, setSearch] = useState('')

    useEffect(() => {   
        setTimeout(() => {  
            setListProducts(productos)
            setLoading(false)
        }, [2000])
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
  
export{
  ProductProvider,
  useProductContext
}
