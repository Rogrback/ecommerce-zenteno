import React from 'react'
import { ListProduct } from '../components/ListProduct'
import { ProductProvider } from '../context/ProductContext'
import { Footer } from '../components/Footer';
import { SearchProduct } from '../components/SearchProduct';


export const Product = () => {
  return (
    <div>
      <ProductProvider>
        <SearchProduct />
        <ListProduct />
      </ProductProvider>
      <Footer />
    </div>
  )
}
