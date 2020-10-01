let instance = null

class Model {
    client = Object
    statusConnect = false

    constructor(client) {
        if (!instance) {
            instance = this
        }

        this.client = client
        this.connect(client)

        return instance
    }

    connect(client) {
        if (!this.statusConnect) {
            client.connect('mongodb://localhost:27017/21pravilo', function (err, db) {
                if (err) {
                    throw err
                }
                this.statusConnect = true
            })
        }
    }
}

export default Model