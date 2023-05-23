import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

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
      </div>
      </>
  )

}

export default App