import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
export const Product = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    // getUsers();
    (async () => {
      try{
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setProduct(data);
      } catch(error) {
        console.log("error API", error);
      }
    })();
  }, []);

  return (
    <div>
      Product
    </div>
  )
}