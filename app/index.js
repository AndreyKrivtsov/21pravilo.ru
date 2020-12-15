import express from 'express'
import bodyParser from 'body-parser'
import route from './core/routes.js'
import http from 'http';
import WebSocket from 'ws'
import socket from './core/socket.js'
import Db from './core/Db.js'

//new Db()

let a = new socket(123)

const app = express()
const port = 4700
const host = 'localhost'

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });




wss.on('connection', (ws) => {
  ws.on('message', (message) => {
      console.log('received: %s', message);
      ws.send(`Hello, you sent -> ${message}`);
  }); 
  ws.send('Hi there, I am a WebSocket server');
});





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

server.listen(process.env.PORT || port, process.env.HOST || host, () => {
  console.log(`Server started on port ${server.address().port}`);
});

// app.listen(port, host, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })