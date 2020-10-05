import Mongo from 'mongodb'

let instance = null

class Db {
    constructor() {
        if (instance) {
            return instance
        }
        this.db = null
        this.statusConnect = false
        this.connect(Mongo.MongoClient)

        instance = this
    }

    connect(client) {
        if (!this.statusConnect) {
            client.connect('mongodb://127.0.0.1:27017/', {
                useNewUrlParser: true,
                //auth: {username: "root", password: "root"},
              }, (err, db) => {
                if (err) {
                    throw err
                }
                console.log('[mongodb] Connected to MongoDb')
                this.statusConnect = true
                this.db = db
            })
        }
    }
}

export default Db