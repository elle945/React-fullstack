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
        
            <div className='homeForm'>
            <input className='inputField' type="text" placeholder='Sök efter plats' value={eventData} onChange={filter}/>
            <button className='inputBtn'><TuneIcon></TuneIcon></button>
            </div>
        
            {filterData.map((item, index) => (
              <Card key={index} sx={{ borderBottomRightRadius: '12px', borderTopLeftRadius: '12px', borderTopRightRadius: '0px', borderBottomLeftRadius: '0px', height: '100px', color: 'cards.bg', marginTop: "3vh", display:"flex"}} elevation={4}>
        
                <img className='cardImg' src={`Images/${item.profile_url}`} alt={`Images/${item.profile_url}`} />
        
        
                    <Typography variant='p' align="center" sx={{fontSize: "14pt", fontWeight: "400", margin:"auto", height:"inherit", marginTop:"2rem"}}>{item.firstname} {item.lastname}</Typography>
        
        
              <ModalComp key={index} item={item}/>
        
              </Card>
            ))}
        
        
          </Container>
          </div>
        </section>
      }


    </>
  )
}

export default Creators
