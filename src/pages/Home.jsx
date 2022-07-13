import React from 'react'
// import { ApiInventario } from '../apis/ApiInventario'
import { CarouselProducts } from '../components/Carousel'
import { FormClient } from '../components/Form'
import { ListProduct } from '../components/ListProduct'
import { ProductProvider } from '../context/ProductContext'

export const Home = () => {
  return (
    <>
      <ProductProvider>
        <CarouselProducts />
        <ListProduct />
        <FormClient />
      </ProductProvider>
    </>
  )
}
