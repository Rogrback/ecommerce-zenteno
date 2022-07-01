import axios from 'axios';
import React from 'react'
import image01 from '../img/product.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import 'bootstrap/dist/css/bootstrap.css';
export const Product = () => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    // getUsers();
    (async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setProduct(data);
      } catch (error) {
        console.log("error API", error);
      }
    })();
  }, []);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={image01}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  )
}