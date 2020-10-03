import BaseModel from './BaseModel.js'
import Mongo from 'mongodb'

class Item extends BaseModel {
    constructor() {
        super()
        this.items = this.db.collection('items')
    }

    getItems(handler) {
        this.items.find({}).toArray((err, items) => {
            handler(err, items)
        })
    }

    setItem(item) {
        if (item.name) {
            let data = {
                name: item.name,
                likes: 0,
                dislikes: 0,
                date: Date.now()
            }
            this.items.insertOne(data, (err, res) => {
                if (err) throw err;
            })
        }
        return {}
    }

    getVoteItems(handler) {
        this.items.find({}).toArray((err, items) => {
            handler(err, items)
        })
    }

    setItemLike(data, handler) {
        if (data.id) {
            this.items.updateOne({ '_id' : Mongo.ObjectID(data.id) }, { $inc: { likes: 1 } }, (err, res) => {
                handler(err, res)
                if (err) throw err;
            })
        }
        return {}
    }

    setItemDislike(data, handler) {
        if (data.id) {
            this.items.updateOne({ '_id' : Mongo.ObjectID(data.id) }, { $inc: { dislikes: 1 } }, (err, res) => {
                handler(err, res)
                if (err) throw err;
            })
        }
        return {}
    }
}

export default Item