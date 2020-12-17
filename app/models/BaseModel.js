import Db from '../core/db.js'


/**
 * Класс BaseModel
 * 
 * @extends BaseModel
 */
class BaseModel {

    /**
    * Создает экземпляр BaseModel.
    * 
    * @constructor
    */
    constructor() {
        this.db = new Db().db.db('21pravilo')
    }
}

export default BaseModel