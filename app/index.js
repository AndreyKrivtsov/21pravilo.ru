import express from 'express'
import bodyParser from 'body-parser'
import MongoClient from 'mongodb'
import Model from './models/Model.js'

new Model(MongoClient.MongoClient)

const app = express()
const port = 4700
const host = 'localhost'

app.use(function(req, res, next) {
  console.log(req.path)
  next()
});

app.get('/items', (req, res) => {
  res.send('Items')
})

app.get('/', (req, res) => {
  console.error('route /');
  res.status(400).send('Not found');
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})