import React from 'react'
import { Box, Card, Container, Paper, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune';


function HomePage() {

  const [data, setData] = useState([])
  const [ filterData, setFilterData] = useState([])
  const [welcome, setWelcome] = useState(true)

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
  if (search.length <= 0) {
    setFilterData(data)
  }

  const searchData = [...data]
  const matchingName = searchData.filter((item) => {
    const place = item.location.toLowerCase();
    return place.includes(search.toLowerCase());
  });
  setFilterData(matchingName);
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

        <section className='cardSection'>
          <div className='bgimg'></div>
            <Container sx={{ height: "100vh" }}>

              <div className='homeForm'>
              <input className='inputField'       type="text" onChange={filter}/>
              <button className='inputBtn'><TuneIcon></TuneIcon></button>
              </div>

              {filterData.map((item) => (

                <Card key={item.id} sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg', marginTop: "3vh" }} elevation={4}>

                  <img className='cardImg' src={`Images/${item.image_url}`} alt={`Images/${item.image_url}`} />
                  <Typography variant='p'>{item.location}</Typography>
                  <Typography variant='p'>{item.description}</Typography>


                  {/* <Rating name="read-only" value={item.rating} readOnly /> */}

                </Card>
              ))}


            </Container>

        </section>
      }


    </>
  )
}

export default HomePage
