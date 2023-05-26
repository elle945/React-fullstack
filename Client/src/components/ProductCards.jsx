// import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

import axios from "axios"

import {useState,useEffect} from "react"

// import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';

import { Container, Row, Col } from 'react-bootstrap'

import '../App.css';




function ProductCards() {



 const [data, setData] = useState([])



 useEffect(() => {
 axios.get('http://localhost:3000/locationinfos')
 .then(response => {
   setData(response.data)
 })
 .catch(() => {
 //handle errors
 });
 }, []);





 return ( <div>
  <Container className='CardContainer'>
 <Row>
  {data.map((item) => (
   <Col xl={12} md={4} key={item.id}>
    <Card style={{ width: '18rem' }}>
    <Card.Img style={{ width: '20rem' }} variant="top" src={`Images/${item.image_url}`} />
    <Card.Body>
     <Card.Title>{item.location}</Card.Title>
     <Card.Text>
    {item.description}
     </Card.Text>
     <Rating name="read-only" value={item.rating} readOnly />
    </Card.Body>
    </Card>
   </Col>
  ))}
 </Row>
 </Container>
 </div>
 );

}




export default ProductCards;
