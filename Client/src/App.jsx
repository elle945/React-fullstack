import './App.css'
import HomePage from './pages/Home'
import PlacesPage from './pages/Places'
import ReviewPage from './pages/Review'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
    <div>
      <NavBar/>

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
