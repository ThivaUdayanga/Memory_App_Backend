import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import postRoutes from './routes/post.js'

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

const CONNECTION_URL =
  'mongodb+srv://thivanka:thivanka123@cluster0.c14ivi4.mongodb.net/?appName=Cluster0'
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running in port: ${PORT}`)
    })
  )
  .catch((err) => {
    console.log('Error:', err.message)
  })
