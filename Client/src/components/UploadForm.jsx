//Import av axios då vi på denna sidan kommer att göra en POST




import axios from "axios"




//När vi lagt till en ny bok så updateras vårt "book" state (vår array), därav använder vi usestate




import {useState} from "react"







import Card from '@mui/material/Card';




import TextField from '@mui/material/TextField';




import ThemeProvider from 'react-bootstrap/ThemeProvider'




import {Container, Row, Col } from 'react-bootstrap';




import Typography from '@mui/material/Typography';




import Button from '@mui/material/Button';




import '../App.css';







const UploadForm = () => {






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

 }catch (err) {

  console.log(err)

  setError(true)

 }

}






return (




<ThemeProvider

breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}

minBreakpoint="xxs"




>




<div className="FormContainer">






<Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 800, height: 650}}>







<Typography sx={{p: 2, mt: 2}}variant="h5" gutterBottom>Lägg till ditt smultronställe</Typography>

<Container>

 <Row>

 <Col sm={6}>

 <TextField

 sx={{borderRadius: 6, m: 2}}

  required

  id="outlined-basic"

  label="Required"

  multiline

  // defaultValue=" Enter Location"

  variant="outlined"

  type="text"

  name="location"

  placeholder="Location"

  onChange={handleChange}

 />

 </Col>

</Row>

<Row>

 <Col sm={6}>

 <TextField

 sx={{borderRadius: 6, m: 2}}

  required

  id="outlined-basic"

  label="Required"

  multiline

  // defaultValue=" Enter Rating"

  variant="outlined"

  type="number"

  placeholder="rating"

  name="rating"

  onChange={handleChange}

 />

 </Col>

 <Col sm={6}>

 <TextField

 sx={{borderRadius: 6, m: 2}}

  required

  id="outlined-basic"

  label="Required"

  multiline

  // defaultValue=" Enter Rating"

  variant="outlined"

  type="text"

  placeholder="Enter image"

  name="image_url"

  onChange={handleChange}

 />

 </Col>

 <Col sm={6}>

 <TextField

 sx={{borderRadius: 6, m: 2}}

  required

  id="outlined-basic"

  multiline

  rows={6}

  label="Required"

  // defaultValue=" Enter Description"

  variant="outlined"

  type="textarea"

  placeholder="Description"

  name="description"

  onChange={handleChange}

 />

 </Col>

</Row>

</Container>

<Button onClick={handleClick} variant="contained" size="large" color="success">

  Large

 </Button>

{/* <button onClick={handleClick}>Add</button> */}

{error && "Something is wrong"}







 </Card >







</div>




</ThemeProvider>

)




}




export default UploadForm
