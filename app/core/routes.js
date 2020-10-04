import express from 'express'
import bodyParser from 'body-parser'
import ItemController from './../controllers/ItemConroller.js'

import Items from './../models/Items.js'
import cacheAdapter from './cacheAdapter.js'
let cache = new cacheAdapter()
setInterval(() => console.log(cache.hash), 20000)

let router = express.Router()

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    console.log('Path: ', req.path)
    next();
});

router.get('/items', (req, res) => {
    new ItemController().actionGetItems()
        .then(result => res.json(result))
})

router.put('/items', (req, res) => {
    new ItemController().actionSetItem(req.body)
        .then(result => res.json(result))
})

router.get('/voteitems/', (req, res) => {
    new ItemController().actionGetVoteItems()
        .then(result => res.json(result))
})

router.put('/voteitems/like', (req, res) => {
    new ItemController().actionLikeItem(req.body)
        .then(result => res.json(result))
})

router.put('/voteitems/dislike', (req, res) => {
    new ItemController().actionDislikeItem(req.body)
        .then(result => res.json(result))
})

export default router