import React from 'react';
import { Link } from 'react-router-dom';
import imageZenteno from '../img/logos/logo_zenteno.png';

export const Header = () => {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom mx-100">
          <Link to='/'>
            <img
            src={imageZenteno}
            className='w-100 h-75'
            alt='Logo' />
          </Link>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to='/' className='d-inline p-2 nav-link active fs-2'>
              Inicio
              </Link>
            </li>
            <li>
              <Link to='/productos' className='d-inline p-2 nav-link active fs-2'>
              Productos
              </Link>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <Link to='/login'>
              <button type="button" className="btn btn-outline-primary me-2">Login</button>
            </Link>
            <Link to='/signup'>
              <button type="button" className="btn btn-primary">Sign-up</button>
            </Link>
          </div>
        </header>
      </div>
    </>

  )
}
