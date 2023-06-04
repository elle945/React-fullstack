//Importerar allt man behöver
import { config } from 'dotenv'
import pkg from 'pg'
const { Client } = pkg

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()

//Dotenv

config()


//Middleware glöm ej parantesen

app.use(bodyParser.json())

app.use(
 bodyParser.urlencoded({
 extended: true
 })

)


app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*')
 res.header('Access-Control-Allow-Headers', 'Content-Type')
 next()

})


app.use(cors())

app.use(express.json())


//Importerar Databasen


const client = new Client({
 database: process.env.PGDATABASE,
 host: process.env.PGHOST,
 password: process.env.PGPASSWORD,
 port: process.env.PGPORT,
 user: process.env.PGUSER

})


client.connect(function (err) {
 if (err) throw err
 console.log('Database Connected')

})

//Creators post
app.get('/creaters', async (req, res) => {
  try {
  const result = await client.query('SELECT * FROM creaters')
  res.json(result.rows)
  } catch (err) {
  console.error(err)
  res.status(500).send('Error retrieving creaters')
  }
 
 })


//locationinfos post
app.get('/locationinfos', async (req, res) => {
 try {
 const result = await client.query('SELECT * FROM locationinfos')
 res.json(result.rows)
 } catch (err) {
 console.error(err)
 res.status(500).send('Error retrieving locationinfos')
 }

})


//POST , 

app.post('/locationinfos', async (req, res) => {
 const { location, description, rating, image_url, bbq, parking, swim, utility } = req.body
 const values = [location, description, rating, image_url, bbq, parking, swim, utility]
 await client.query(
 'INSERT INTO locationinfos (location, description, rating, image_url, bbq, parking, swim, utility) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
 values
 )
 res.send('Post successfully added')

})

// Delete 
app.delete('/locationinfos/:id', async (req, res) => {
  try {const id = req.params.id
  const result = await client.query( 'DELETE FROM locationinfos WHERE location_id = $1 RETURNING *', [id])
  if (result.rows.length > 0) {
      //200 för Ok
      res.status(200).send('Deleted sucessfully');
    } else {
      // 404 för ej hittad id
      res.status(404).send('Post with given ID not found');
    }
} catch (error){
  res.status(500).send('Server error')
}
})


app.listen(3000, () => {
 console.log('Server is running on port 3000')

})
