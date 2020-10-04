import BaseModel from './BaseModel.js'
import Mongo from 'mongodb'

class Item extends BaseModel {
    constructor() {
        super()
        this.items = this.db.collection('items')
    }

    async getItems() {
        let result = await this.items.find({}).toArray()
        return result
    }

    async setItem(item) {
        if (item.name) {
            let data = {
                name: item.name,
                likes: 0,
                dislikes: 0,
                shows: 0,
                date: Date.now()
            }
            let result = await this.items.insertOne(data)
            return result
        }
        return {}
    }

    async getVoteItems() {
        return await this.items.find({}).toArray()
    }

    async setItemLike(id) {
        if (id) {
            return await this.items.updateOne({ '_id' : Mongo.ObjectID(id) }, { $inc: { likes: 1 } })
        }
        return {}
    }

    async setItemDislike(id) {
        if (id) {
            return await this.items.updateOne({ '_id' : Mongo.ObjectID(id) }, { $inc: { dislikes: 1 } })
        }
        return {}
    }

    async increaseShowsItem(id) {
        if (id) {
            this.items.updateOne({ '_id' : Mongo.ObjectID(id) }, { $inc: { shows: 1 } })
        }
    }
}

export default Item