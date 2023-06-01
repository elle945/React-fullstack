//Import av axios då vi på denna sidan kommer att göra en POST

import axios from "axios"


import {useState} from "react"
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import {Container, Row, Col } from 'react-bootstrap';
import Typography from '@mui/material/Typography';
import '../App.css';
import Radio from '@mui/material/Radio';
// import Rating from '@mui/material/Rating';


const UploadForm = () => {

  // const [value, setValue] = React.useState(2);
const [confirmed, setConfirmed] = useState(false)


const [error, setError]=useState(false);

//Knapp för refresh
//const refresh = () => window.location.reload(true)
<Button onClick={refresh} variant="success">Uppdatera sidan innan nytt uppladdning</Button>


{/*
const handleChange = (e) => {
 setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
}
*/}

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  const newValue = type === "radio" ? (checked ? true : false) : value;
  setInfo((prev) => ({ ...prev, [name]: newValue }));
};
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


<div style={{backgroundColor:'rgb(240, 239, 171)'}}>
<div className="FormContainer">
<Card className="formCard" >
<Typography sx={{p: 2, mt: 2}}variant="h5" gutterBottom>Lägg till ditt smultronställe</Typography>
<Container style={{margin: 'auto', padding: '20vw'}}>
 <Row>
 <Col sm={12} lg={12} >
 <Typography component="legend">Namnge plats*</Typography>
 <TextField
sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg', textAlign: 'center'}} elevation={4}
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

 <Col sm={12}>
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

 <Col sm={12}>
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

sx={{borderBottomRightRadius: '0px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', width: '50vw', maxWidth: '500px', height: '200px', color: 'cards.bg', margin: 'auto', padding: '5vw'}} elevation={4}
id="outlined-basic"
  multiline
  type="textarea"
  variant="outlined"
  name="description"
  rows={4}
  onChange={handleChange}

 />
 <div>
  <label>
    Grillplats tillgängligt:
    <Radio
      checked={info.bbq === true}
      onChange={handleChange}
      value={true}
      color="success"
      name="bbq"
    />
  </label>
  <label>
    Grillplats inte tillgängligt:
    <Radio
     checked={info.bbq === false}
     onChange={handleChange}
     value={false}
     color="success"
     name="bbq"
    />
  </label>
</div>

<button onClick={handleClick} className="postButton">
Lägg till
 </button>

{/* <button onClick={handleClick}>Add</button> */}
<div>
{confirmed &&  <p>Din post har laddats upp!</p>}
{error &&   <p>"Allt fällt måste vara ifyllda. Vänligen korrigera och försök igen!"</p>}
</div>




 </Card >

</div>
</div>
)

}

export default UploadForm

