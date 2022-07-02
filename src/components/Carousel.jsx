import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagen01 from '../img/imagen1.jpg';
import imagen02 from '../img/imagen2.jpg';
import imagen03 from '../img/imagen3.jpg';
import '../styles/carousel.css'

export const CarouselProducts = () => {
  return (
    <div className='container-fluid'>
    
        <Carousel 
          className='d-block mx-auto'  
        >
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src={imagen01}
              alt="First slide"
            />
            <Carousel.Caption style={{ background: 'linear-gradient(rgba(5,7,12,0.50),rgba(5,7,12,0.50))' }}    >
              <h3>Ferrari</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100 h-50"
              src={imagen02}
              alt="Second slide"
            />
            <Carousel.Caption style={{ background: 'linear-gradient(rgba(5,7,12,0.50),rgba(5,7,12,0.50))' }}    >
              <h3>Lamborgini</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src={imagen03}
              alt="Third slide"
            />
            <Carousel.Caption style={{ background: 'linear-gradient(rgba(5,7,12,0.50),rgba(5,7,12,0.50))' }}    >
              <h3>Lexus</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  )
}
