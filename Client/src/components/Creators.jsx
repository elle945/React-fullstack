import React from 'react'
import { Box, Card, Container, Paper, Typography } from '@mui/material'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import ModalComp from './ModalComp'
function Creators() {

  const [data, setData] = useState([])
  const [ filterData, setFilterData] = useState([])
  const [welcome, setWelcome] = useState(true)
  const [boolean, setBoolean] = useState(true)
  const [eventData, setEventData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/creaters')
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
        <section className='cardSection' style={{overflowX: 'hidden'}}>
        <div className='bgimg'>
          <Container sx={{ height: "100vh" }}>

            <div className='homeForm'>
            </div>

            {filterData.map((item, index) => (
              <Card key={index} sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '160px', color: 'cards.bg', marginTop: "7vh", display:"flex"}} elevation={4}>

                <img className='cardImg' src={`Images/${item.profile_url}`} alt={`Images/${item.profile_url}`} />


                    <Typography variant='p' align="center" sx={{fontSize: "2em", fontWeight: "400", margin:"auto"}}>{item.firstname} {item.lastname}</Typography>


              <ModalComp key={index} item={item}/>

              </Card>
            ))}


          </Container>
          </div>
        </section>
    </>
  )
}

export default Creators
