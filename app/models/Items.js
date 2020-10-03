import { request } from 'express'
import BaseModel from './BaseModel.js'

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

    async setItem(item) {
        if (item.name) {
            let data = {
                name: item.name,
                like: 0,
                dislike: 0,
            }
            const result = await this.items.insertOne(item)
            return result
        }
        return {}
    }
}

export default Item