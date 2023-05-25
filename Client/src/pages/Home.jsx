import React from 'react'
import { Box, Card, Container, Paper, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'



function HomePage() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(response => {
        setData(response.data)
        console.log(data)

    })
  },[])








  return (
    <>
    <Container sx={{ bgcolor: 'bgcolor.bg', height: "100vh"}}>

      <input type="text"/>


       {data.map((data) => (

          <Card sx={{borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius:'0px', borderBottomLeftRadius: '0px', height: '100px',  color: 'cards.bg', marginTop: "3vh"}} elevation={4}>
            <img src={data.image_url} alt={data.image_url} />


            <Typography variant='p'>{data.location}</Typography>
          </Card>
        ))}


    </Container>
    </>
  )
}

export default HomePage
