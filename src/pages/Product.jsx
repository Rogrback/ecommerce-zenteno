import React from 'react'
import { ListProduct } from '../components/ListProduct'
import { ProductProvider } from '../context/ProductContext'

export const Product = () => {
  return (
    <div>
      <ProductProvider>
        <ListProduct />
      </ProductProvider>
    </div>
  )
}
