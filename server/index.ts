import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
import { config } from './config'

const app = express()

const { ENDPOINT, CLIENT_ID, CLIENT_SECRET } = config

// Setting up body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// CORS
app.use(function(_, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// GETTING AUTH JWT
app.get('/api/auth', async (_, res) => {
  const authRequest = await fetch(ENDPOINT, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: 'password',
    }),
  })
  const token = await authRequest.json()
  res.status(200).send(token)
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`)
})
