//Import av axios då vi på denna sidan kommer att göra en POST

import axios from "axios"


import {useState} from "react"
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import {Container, Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import '../App.css';
// import Rating from '@mui/material/Rating';


const UploadForm = () => {

  // const [value, setValue] = React.useState(2);
const [confirmed, setConfirmed] = useState(false) 
const [info, setInfo] = useState({

 location : "",
 description: "",
 rating: Number,
 image_url: ""
})

const [error, setError]=useState(false);

//Tar in allt som skrivs i varje input

const handleChange = (e) => {
 setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
}

//Tar all information som skrivits in och skapar en POST

const handleClick = async (e) => {
e.preventDefault();

try{
  await axios.post("http://localhost:3000/locationinfos", info);
  setConfirmed(true)
 } catch (err) {
  console.log(err)
  
  setError(true)
 }}

return (



<div className="FormContainer">
<Card sx={{ pb: "10vh", mb: "10vh", display: "flex", flexDirection: "column", alignItems: "center", width:'80vh', height: 'auto'}}>
<Typography sx={{p: 2, mt: 2}}variant="h5" gutterBottom>Lägg till ditt smultronställe</Typography>
<Container>
 <Row>
 <Col sm={6}>
 <Typography component="legend">Namge plats*</Typography>
 <TextField
sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg'}} elevation={4}
  required
  id="outlined-basic"
  multiline
  variant="outlined"
  type="text"
  name="location"
  onChange={handleChange}
 />
 </Col>
</Row>
<Row>

{/* <Typography component="legend">Controlled</Typography>
<Rating
  name="simple-controlled"
  value={value}
  type="number"
  onChange={(event, newValue) => {
    setValue(newValue), {handleChange};
  }}
/> */}

 <Col sm={6}>
 <Typography component="legend">Rating med en siffra 1-5*</Typography>
 <TextField
sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg'}} elevation={4}
  required
  id="outlined-basic"
  multiline
  variant="outlined"
  type="number"
  name="rating"
  onChange={handleChange}
 />
 </Col>

 <Col sm={6}>
 <Typography component="legend">Lägg till bild*</Typography>
 <TextField

sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg'}} elevation={4}
  required
  id="outlined-basic"
  multiline
  // defaultValue=" Enter Rating"
  variant="outlined"
  type="text"
  name="image_url"
  onChange={handleChange}

 />

 </Col>

</Row>

</Container>
<Typography component="legend">Beskrivning*</Typography>
 <TextField

sx={{borderBottomRightRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', width: '50vw', maxWidth: '500px', height: '200px', color: 'cards.bg'}} elevation={4}
id="outlined-basic"
  multiline
  type="textarea"
  variant="outlined"
  name="description"
  rows={4}
  onChange={handleChange}

 />

<button onClick={handleClick} className="postButton">
Lägg till
 </button>

{/* <button onClick={handleClick}>Add</button> */}
<div>
{confirmed &&  <p>Din post har laddats upp!</p>}
{error &&   <p>"Something is wrong"</p>}
</div>




 </Card >

</div>

)

}

export default UploadForm
