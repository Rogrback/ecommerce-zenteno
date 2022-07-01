import React from 'react'
import { FormClient } from '../components/Form'
import { Product } from '../components/Product'


export const Home = () => {
  return (
    <div className="container">
      <div className="row row justify-content-md-center">
        <div className="col-md-4">
          <Product />
          <FormClient/>
        </div>
      </div>
    </div>
  )
}
