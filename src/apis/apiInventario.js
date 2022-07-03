import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const ApiInventario = () => {

    const [product, setProduct] = useState([])

    // const url = '../json/inventario.json'
    // const api= axios.get(url)
    //     .then(result => {
    //         const res = res.json;
    //     })

    useEffect(() => {
      (async () => {
        try{
          await axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(result => {
              console.log(result.data.results);
              setProduct(result.data)
            }) 
        } catch(error) {
          console.log("error API", error);
        }
      })();
    }, []);

    // fetch('../db.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     setProduct(JSON.stringify(data))
    //     console.log(data);
    //   })

    // {product.map((products) => (
      //       products.id 
      // ))}

  return (
    <>
      
    </>
  )
  
}
