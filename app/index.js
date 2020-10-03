import express from 'express'
import bodyParser from 'body-parser'
import route from './core/routes.js'

const app = express()
const port = 4700
const host = 'localhost'

app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Access-Control-Allow-Credentials', 'true')
  next()
});

app.use('/', route);

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send('ok');
});

app.get('/', (req, res) => {
  res.status(400).send('Not found');
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})