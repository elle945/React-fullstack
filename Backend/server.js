
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


app.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM locationinfos');
    res.json(result.rows)

  }
  catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving persons');
  }
})
app.get('/:id', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM locationinfos');
    res.json(result.rows)

  }
  catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving locationinfos');
  }
})

app.get('/locationinfos', async (req, res) => {
 try {
 const result = await client.query('SELECT * FROM locationinfos')
 res.json(result.rows)
 } catch (err) {
 console.error(err)
 res.status(500).send('Error retrieving persons')
 }

})




//POST , så att vi kan skapa böcker




app.post('/locationinfos', async (req, res) => {
 const { location, description, rating, image_url } = req.body
 const values = [location, description, rating, image_url]
 await client.query(
 'INSERT INTO locationinfos (location, description, rating, image_url) VALUES($1,$2,$3,$4)',
 values
 )
 res.send('image added')

})




app.listen(3000, () => {
 console.log('Server is running on port 3000')

})
