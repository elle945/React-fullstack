// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios"
import {useState,useEffect} from "react"
// import Typography from '@mui/material/Typography';

import Rating from '@mui/material/Rating';
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../App.css';
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import ModalComp1 from './ModalComp1';

 function ProductCards() {

 const [data, setData] = useState([])
 const [icon, setIcon] = useState([])
 const [sortOptions, setSortOptions] = useState({
  highRating: false,
  lowRating: false,
});


  useEffect(() => {
  axios.get('http://localhost:3000/locationinfos')
 .then(response => {
   setData(response.data);
   setIcon(response.data.map(item => item.bbq))
   //console.log(data);
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

    //console.log(data);
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
const handleSortChange = (event) => {
  setSortOptions({ ...sortOptions, [event.target.name]: event.target.checked });

  if (event.target.name === "highRating" && event.target.checked) {
    highRating();
  } else if (event.target.name === "lowRating" && event.target.checked) {
    lowRating();
  } else {
    fetchData(); // Resets data to original order when none of the checkboxes are checked
  }
};


 return ( <div>
  <div style={{backgroundColor:'rgb(240, 239, 171)', overflowX: 'hidden'}}>


<div style={{width: '50%', margin: 'auto', marginTop: '2em'}} >
  <input className='inputField' placeholder='Sök på en plats..' onInput={searchName} type='text'></input>
  <div style={{ marginTop:'5vh' }}>
  <FormLabel id="demo-checkboxes-group-label">Sortera efter: </FormLabel><br></br>
<FormControl row component="fieldset">
  <FormGroup style={{display: 'flex', flexDirection: 'row'}}>
    <FormControlLabel
      control={
        <Checkbox
          checked={sortOptions.highRating}
          onChange={handleSortChange}
          name="highRating"
        />
      }
      label="Högsta rating"
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={sortOptions.lowRating}
          onChange={handleSortChange}
          name="lowRating"
        />
      }
      label="Lägsta rating"
    />
  </FormGroup>
</FormControl>
  </div>
  </div>

  <Container className='CardContainer'>

  {data.map((item, index) => (
   <Col  sm={12} lg={12} key={item.id} style={{width: '70%', margin: 'auto'}}>
    <Card style={{margin: '1em'}}>
    <Card.Img style={{ width: '100%' }} variant="top" src={`Images/${item.image_url}`} />

    <Card.Body>
     <Card.Title style={{paddingTop: '1em', paddingLeft: '1em'}}><b>{item.location}</b></Card.Title>
     <br></br>
     <Card.Text style={{padding: '1em'}}>
    {item.description}
     </Card.Text>
     <Rating style={{padding: '1em'}} name="read-only" value={item.rating} readOnly />


     <ModalComp1 key={index} item={item}/>
    </Card.Body>
    </Card>
   </Col>
  ))}
 </Container>
 </div>
 </div>
 );

}




export default ProductCards;
