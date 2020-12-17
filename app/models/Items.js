import BaseModel from './BaseModel.js'
import Mongo from 'mongodb'


/**
 * Класс Item - модель
 * 
 * @extends BaseModel
 */
class Item extends BaseModel {

    /**
    * Создает экземпляр Item.
    * 
    * @constructor
    */
    constructor() {
        super()
        this.items = this.db.collection('items')

        this.MAX_LENGTH = 200
    }

    /**
    * Получение элементов
    *
    * @return {Object} Информация о выполнении запроса
    */
    async getItems() {
        let result = await this.items.find({}).toArray()
        return result
    }

    /**
    * Добавление элемента в базу
    *
    * @param  {Object} item - элемент с клиента
    * @return {Object} Информация о выполнении запроса
    */
    async setItem(item) {
        if (item.name) {
            let data = {
                name: item.name,
                likes: 0,
                dislikes: 0,
                shows: 0,
                date: Date.now()
            }
            let query = await this.items.insertOne(data)
            if (query.result.ok) return {}
            else return { error: 'Ошибка добавления' }
        }
        return { error: 'Поле не может быть пустым' }
    }

    /**
    * Получение элементов из базы
    *
    * @param  {Number} limit - кол-во элементов
    * @return {Object} Информация о выполнении запроса
    */
    async getVoteItems(limit) {
        let result = await this.items.find({})
        .limit(limit)
        .toArray()
        return result
    }

    /**
    * Запись лайка в базу
    *
    * @param  {Number} id - id элемента коллекции
    * @return {Object} Информация о выполнении запроса
    */
    async setItemLike(id) {
        if (id) {
            return await this.items.updateOne({ '_id' : Mongo.ObjectID(id) }, { $inc: { likes: 1 } })
        }
        return {}
    }

    /**
    * Запись дизлайка в базу
    *
    * @param  {Number} id - id элемента коллекции
    * @return {Object} Информация о выполнении запроса
    */
    async setItemDislike(id) {
        if (id) {
            return await this.items.updateOne({ '_id' : Mongo.ObjectID(id) }, { $inc: { dislikes: 1 } })
        }
        return {}
    }

    /**
    * Запись просмотра в базу
    *
    * @param  {Number} id - id элемента коллекции
    * @return {Object} Информация о выполнении запроса
    */
    async increaseShowsItem(id) {
        if (id) {
            this.items.updateOne({ '_id' : Mongo.ObjectID(id) }, { $inc: { shows: 1 } })
        }
    }
}

export default Item