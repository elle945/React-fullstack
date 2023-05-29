// import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import axios from "axios"
import {useState,useEffect} from "react"
// import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
import { Container, Row, Col, Placeholder } from 'react-bootstrap'
import '../App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



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
const lowRating = () => {
  const sortedData = [...data];
  sortedData.sort((a, b) => a.rating - b.rating);
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
  <div className='bgimg'>
 </div>

<div style={{width: '50%', margin: 'auto', marginTop: '2em'}}>
  <input className='inputField' placeholder='Sök på en plats..' onInput={searchName} type='text'></input>
  <div style={{ marginTop:'5vh' }}>
 <FormLabel  id="demo-radio-buttons-group-label">Sortera efter:</FormLabel>
  <RadioGroup
  row
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    // sx={{
    //   backgroundColor: pink[800],
    //   '&.Mui-checked': {
    //     color: pink[600],
    //   },
    // }}
    
  >
    <FormControlLabel onClick={highRating} value="highRating" control={<Radio/>} label="Högsta rating" />
    <FormControlLabel onClick={lowRating} value="lowRating" control={<Radio />} label="Lägsta rating" />
    
  </RadioGroup>
  </div>
  </div>
  <Container className='CardContainer'>
 <Row>
  {data.map((item) => (
   <Col xl={12} md={4} key={item.id}>
    <Card style={{ width: '80vw', paddingBottom: '10vh', backgroundColor: 'white', margin: 'auto', marginTop: '10px' }}>
    <Card.Img style={{ width: '80vw' }} variant="top" src={`Images/${item.image_url}`} />
    <Card.Body>
     <Card.Title style={{paddingTop: '1em', paddingLeft: '1em'}}><b>{item.location}</b></Card.Title>
     <br></br>
     <Card.Text style={{padding: '1em'}}>
    {item.description}
     </Card.Text>
     <Rating style={{padding: '1em'}} name="read-only" value={item.rating} readOnly />
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
