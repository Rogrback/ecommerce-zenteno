import React from 'react'
import { ListProduct } from '../components/ListProduct'
import { ProductProvider } from '../context/ProductContext'
import { Footer } from '../components/Footer';
// import { SearchProduct } from '../components/SearchProduct';


export const Product = () => {
  return (
    <div>
      <ProductProvider>
        <ListProduct />
      </ProductProvider>
      <Footer />
    </div>
  )
}
