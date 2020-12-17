import Mongo from 'mongodb'

let instance = null

/**
 * Класс Db
 */
class Db {

    /**
    * @constructor
    *
    * @return {Db} Возвращает свой экземпляр
    */
    constructor() {
        if (instance) {
            return instance
        }
        this.db = null
        this.statusConnect = false
        this.connect(Mongo.MongoClient)

        instance = this
    }

    /**
    * Подключение к базе данных
    *
    * @param  {Object} client - импортированный объект базы данных
    */
    async connect(client) {
        if (!this.statusConnect) {
            await client.connect('mongodb://127.0.0.1:27017/', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                //auth: {username: "root", password: "root"},
              },
              (err, db) => {
                if (err) {
                    console.log('[mongodb]')
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