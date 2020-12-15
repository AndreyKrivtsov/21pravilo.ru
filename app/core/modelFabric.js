import Db from './db.js'

class modelFabric {
    #collectionName = ''

    constructor () {
        this.db = new Db().db.db('21pravilo')
    }

    getCollection() {
        return this.collectionName
    }

    async getAll() {
        let result = await this.db.collection(this.collectionName).find({}).toArray()
        return result
    }
}

export default modelFabric