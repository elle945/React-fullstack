import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from "axios"
import {useState} from "react"
import '../App.css';




function NewForm() {

    // const [value, setValue] = React.useState(2);
  const [confirmed, setConfirmed] = useState(false)
  const initialInfoState = {
    location: "",
    description: "",
    rating: 1,
    image_url: null,
    bbq: false,
    parking: false,
    swim: false,
    utility: false
 };


 const [info, setInfo] = useState(initialInfoState);

  const [error, setError]=useState(false);

//Läser in varje input
  const handleChange = (e) => {
    setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
   }

   //Tar all information som skrivits in och skapar en POST
const handleSubmit = async (e) => {
  if(info.location === "" || info.description === "") {
    setError(true)
    setConfirmed(false)
    return;
}

   e.preventDefault();
    try{
      await axios.post("http://localhost:3000/locationinfos", info);
      setError(false)
      setConfirmed(true)
      setInfo(initialInfoState); // reset form här
     } catch (err) {
      console.log(err)
    setConfirmed(false)
      setError(true)

     }}

     //Refresh form



     // Lägger man till detta i Form tagen så gör formen submit på enter = onSubmit={handleSubmit}

  return (

    <div className='formBg' style={{overflowX: 'hidden'}} >
         <h4 className='formHeader'>Lägg till ditt smultronställe</h4>
         <div className='outerForm'>
    <Form className='newForm' >
      <Form.Group className="mb-3" controlId="location">
      <Form.Text className="text-muted">
          Fältet är obligatoriskt*
        </Form.Text>
        <FloatingLabel
        controlId="location"
        label="Namnge plats"
        className="mb-3"
      >
        <Form.Control as="input" type="text" placeholder="Namnge plats" name="location" value={info.location || ''}
  onChange={handleChange} />
        </FloatingLabel>
      </Form.Group>


      <Form.Group className="mb-3" controlId="rating">
      <Form.Text className="text-muted">
          Fältet är obligatoriskt*
        </Form.Text>
        <FloatingLabel
        controlId="rating"
        label="Ge rating där ifrån 1-5"
        className="mb-3"
      >
        <Form.Control name="rating" value={info.rating} as="select"
  onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Control>
        </FloatingLabel>
      </Form.Group>


      <Form.Group className="mb-3" controlId="image">
        <FloatingLabel
        controlId="image"
        label="Lägg till bild"
        className="mb-3"
      >
        <Form.Control type="file" multiple  name="image_url"
  onChange={handleChange}/>
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="description">
      <Form.Text className="text-muted">
          Fältet är obligatoriskt*
        </Form.Text>
        <FloatingLabel
        controlId="description"
        label="Ge din beskrivning"
        className="mb-3"
      >
        {/* Lägger till value={info.description || ''} för att restea inputfält i frontend */}
        <Form.Control as="textarea" type="text" rows={4} value={info.description || ''}  placeholder="Ge din beskrivning" name="description"   onChange={handleChange} />
        </FloatingLabel>
      </Form.Group>
      <Form.Text className="text-muted">
          Finns tillgängligt?
        </Form.Text>
      <Form.Group className="mb-3" controlId="bbq">
        <Form.Check type="checkbox" label="Grillplats" name="bbq" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="parking">
        <Form.Check type="checkbox" label="Parkeringsplats" name="parking" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="swim">
        <Form.Check type="checkbox" label="Badplats" name="swim" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="utility">
        <Form.Check type="checkbox" label="Toaletter " name="utility" onChange={handleChange} />
      </Form.Group>

      <button type="button" onClick={handleSubmit} className="postButton">
        Lägg till
      </button>

      <div>
      {confirmed &&  <div><p>Din post har laddats upp!</p></div>}
{error &&   <p>"Allt fällt måste vara ifyllda. Vänligen korrigera och försök igen!"</p>}
</div>
    </Form>
    </div>
    </div>
  );
}

export default NewForm;
