//Importerar allt man behöver
import {config} from 'dotenv'
import pkg from 'pg'

const {Client} = pkg;

import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';


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

  client.connect(function(err){
    if(err) throw err
    console.log('Database Connected')
  })

  //Rutterna
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



  app.post('/persons/submit-form', async (req, res) => {
    const {name} = req.body;
    try {
      await client.query(
        'INSERT INTO persons (name) VALUES ($1)',
    [name]
    );
      res.sendStatus(200)
    }
    catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving persons');
    }
  })



  app.listen(3000, () => {
    console.log('Server is running on port 3000')
  })
