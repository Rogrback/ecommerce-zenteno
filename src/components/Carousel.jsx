import React from 'react'
import imagen01 from '../img/imagen01.jpg';
import imagen02 from '../img/imagen2.jpg';
import imagen03 from '../img/imagen3.jpg';


export const Carousel = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ferrari</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen02}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Lamborgini</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagen03}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Lexus</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}
