import express from 'express'
import bodyParser from 'body-parser'
import Db from './core/Db.js'
import Items from './models/Items.js'

new Db()

const app = express()
const port = 4700
const host = 'localhost'

app.use(bodyParser.json())


app.use(function (req, res, next) {
  console.log(req.path)
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.set('Access-Control-Allow-Credentials', 'true')
  next()
});

app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send('ok');
});

app.get('/items', (req, res) => {
  let item = new Items()
  item.getItems((err, items) => {
    if (err) console.log(err)
    else res.json(items)
  })
})

app.put('/items', (req, res) => {
  console.log(req.body)
  let item = new Items()
  let result = item.setItem(req.body)
  res.json(result)
  res.send(JSON.stringify({
    data: result
  }));
})

app.get('/', (req, res) => {
  console.error('route /');
  res.status(400).send('Not found');
})

app.listen(port, host, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})