import React from 'react'
import { Box, Card, Container, Paper, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'




function HomePage() {

  const [data, setData] = useState([])
  const [welcome, setWelcome] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(response => {
        setData(response.data)
        console.log(data)

      })
  }, [])








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
          <div className='bgimg'>
            <Container sx={{ height: "100vh" }}>

              <input type="text" />


              {data.map((item) => (

                <Card key={item.id} sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg', marginTop: "3vh" }} elevation={4}>

                  <img className='cardImg' src={`files/${item.image_url}`} alt={`files/${item.image_url}`} />
                  <Typography variant='p'>{item.location}</Typography>
                  <Typography variant='p'>{item.description}</Typography>


                  {/* <Rating name="read-only" value={item.rating} readOnly /> */}

                </Card>
              ))}


            </Container>
          </div>
        </section>
      }


    </>
  )
}

export default HomePage
