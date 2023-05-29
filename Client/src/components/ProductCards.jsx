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
   setData(response.data);
   console.log(data);
 })
 .catch(() => {
 //handle errors
 });
 }, []);


//Creates a copy of data and a new array using spread-operator(...)
const fetchData = () => {
  axios.get('http://localhost:3000/locationinfos')
  .then(response => {
    setData(response.data);
    console.log(data);
  })
  .catch(() => {
  //handle errors
  });
}
 const highRating = () => {
  const sortedData = [...data];
  sortedData.sort((a, b) => b.rating - a.rating);
  setData(sortedData);
}


const searchName = (event) => {
  const search = event.target.value;

  if(search === '') { // If input field is empty, reset data to original data
    fetchData()

     }

   else {
    const searchData = [...data]
    const matchingName = searchData.filter((item) => {
      const plats = item.location.toLowerCase();
      return plats.includes(search.toLowerCase());
    });
    setData(matchingName);
  }
}


 return ( <div>
  <button onClick={highRating}>Rating högst till lägst</button>
  <input onInput={searchName} type='text'></input>
  <Container className='CardContainer'>
 <Row>
  {data.map((item) => (
   <Col xl={12} md={4} key={item.id}>
    <Card style={{ width: '18rem', paddingBottom: '10vh', margin: 'auto' }}>
    <Card.Img style={{ width: '20rem' }} variant="top" src={`Images/${item.image_url}`} />
    <Card.Body>
     <Card.Title><b>{item.location}</b></Card.Title>
     <br></br>
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
