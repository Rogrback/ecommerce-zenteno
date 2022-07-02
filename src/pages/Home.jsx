import React from 'react'
import { CarouselProducts } from '../components/Carousel'
import { FormClient } from '../components/Form'
import { ListProduct } from '../components/ListProduct'


export const Home = () => {
  return (
    <>
      <CarouselProducts />
      <ListProduct />
      <FormClient />
    </>
  )
}
