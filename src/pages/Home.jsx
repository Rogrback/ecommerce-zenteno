import React from 'react'
import { Product } from '../components/Product'

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Product />
        </div>
      </div>
    </div>
  )
}
