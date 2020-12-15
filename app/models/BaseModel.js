import Db from '../core/db.js'

class BaseModel {
    constructor(client) {
        this.db = new Db().db.db('21pravilo')
    }
}

export default BaseModel