import React from 'react'
import { Box, Card, Container, Paper, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import ModalComp from '../components/ModalComp'
import Slide from '../components/Slide'
function HomePage() {

  const [data, setData] = useState([])
  const [ filterData, setFilterData] = useState([])
  const [welcome, setWelcome] = useState(true)
  const [boolean, setBoolean] = useState(true)
  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setFilterData(response.data)
        setData(response.data)
        console.log(data)

      })
  }, [])




function filter(event) {
  const search = event.target.value;
  setEventData(event.target.value)
  if (search.length <= 0) {
    setFilterData(data)
    setBoolean(true)

  }

  const searchData = [...data]
  setBoolean(false)
  const matchingName = searchData.filter((item) => {
    const place = item.location.toLowerCase();
    return place.includes(search.toLowerCase());
  });

  setFilterData(matchingName);
  console.log(filterData)

}






  return (
    <>

      { welcome ?
        <section className="bgWelcome" onClick={ () => setWelcome(false)}>
          <div className="welcomeImg"></div>
          <div className='flexFix'>
          <div className="logoImg"></div>
          </div>
          <h3 className="welcomeText">Ditt favoritställe i naturen</h3>


        </section>

        :

<div>
<Slide/>
</div>

      }


    </>
  )
}

export default HomePage
