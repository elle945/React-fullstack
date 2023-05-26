import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'
import HomePage from './pages/Home'
import PlacesPage from './pages/Places'
import ReviewPage from './pages/Review'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import ProductCards from './components/ProductCards'
import UploadForm from './components/UploadForm'
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


<Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platser" element={<UploadForm />} />
          <Route path="/recensioner" element={<ProductCards />} />

          </Routes>
    <Footer/>

      </div>
      </>
  )

}

export default App
