import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import HomePage from './pages/Home'
import PlacesPage from './pages/Places'
import ReviewPage from './pages/Review'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  const [data, setData] = useState([])
  const [success, setSuccess] = useState(false)



useEffect(() => {
  axios.get('http://localhost:3000/persons')
  .then(response => {
      setData(response.data)
  })
.catch(() => {
  //handle errors
});
}, []);

//Post data
const [formData, setFormData] = useState({
  name: ''
})

const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name] : event.target.value
  })
};

const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://localhost:3000/persons/submit-form', formData)
  .then(() => {
    // Hantera success på olika sätt
    setSuccess(true);
  })
  .catch(() => {
    //handle errors
  });
}

  return (
    <>
    <div>
      <NavBar/>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' name='name' onChange={handleChange} />
      </label>

      <br/>
      <button type='submit'>Submit</button>
      <div>
        {success && <p>Form is submitted</p>}
      </div>

    </form>

    {data.map(item => (
      <div key={item.id}>
        <p>{item.name}</p>
      </div>
    ))}

<Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platser" element={<PlacesPage />} />
          <Route path="/recensioner" element={<ReviewPage />} />
          </Routes>
    <Footer/>

      </div>
      </>
  )

}

export default App
