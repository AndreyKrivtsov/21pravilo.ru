import Items from '../models/Items.js'
import cacheAdapter from '../core/cacheAdapter.js'
import settings from '../core/settings.js'


/**
 * Класс ItemController
 */
class ItemController {

    /**
    * Создает экземпляр ItemController.
    *
    * @constructor
    */
    constructor() {
        this.cache = new cacheAdapter()
        this.timeoutForVote = settings.timeoutForVote
        this.voteItems = settings.voteItems
    }

    /**
    * Получение элементов
    *
    * @return {Array} Массив элементов
    */
    async actionGetItems() {
        let item = new Items()
        let res = await item.getItems()
        return res
    }

    /**
    * Добавление элемента
    *
    * @param  {object} data - элемент с клиента
    * @return {array|object} Массив элементов, или объект с ошибкой
    */
    async actionSetItem(data) {
        let item = new Items()

        if (data.name.length <= item.MAX_LENGTH) {
            let result = await item.setItem(data)
            return result
        }

        return { error: `Укоротите текст. Максимум: ${item.MAX_LENGTH} символов` }
    }

    /**
    * Добавление элемента
    *
    * @return {Object} Массив элементов
    */
    async actionGetVoteItems() {
        // Сделать нормальный криптостойкий идентификатор
        //let uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, (c,r) => ('x'==с?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16))
        let token = this.token()

        let item = new Items()
        let list = await item.getVoteItems(this.voteItems)
        let ids = list.map(item => String(item._id))
        this.cache.set(token, { ids: ids, time: Date.now() })

        ids.forEach(id => item.increaseShowsItem(id))

        return { items: list, token: token, timeout: this.timeoutForVote }
    }

    /**
    * Добавление лайка
    *
    * @param  {object} data - данные с клиента
    * @return {Array} Массив элементов
    */
    async actionLikeItem(data) {
        if (data?.token) {
            let token = data.token
            let id = data.id

            let cacheData = this.cache.get(token)
            if (cacheData) {
                let searchIndex = cacheData.ids.indexOf(id)

                if (searchIndex !== -1) {

                    let allowedByTimeout = Date.now() > cacheData.time + this.timeoutForVote

                    if (allowedByTimeout) {
                        let item = new Items()
                        let res = await item.setItemLike(id)

                        cacheData.ids[searchIndex] = ''
                        this.cache.set(token, cacheData)

                        return res
                    }
                }
            }

            return {}
        }
    }

    /**
    * Добавление дислайка
    *
    * @param  {object} data - данные с клиента
    * @return {Array} Массив элементов
    */
    async actionDislikeItem(data) {
        if (data?.token) {
            let token = data.token
            let id = data.id

            let cacheData = this.cache.get(token)
            if (cacheData) {
                let searchIndex = cacheData.ids.indexOf(id)

                if (searchIndex !== -1) {

                    let allowedByTimeout = Date.now() > cacheData.time + this.timeoutForVote

                    if (allowedByTimeout) {
                        let item = new Items()
                        let res = await item.setItemDislike(id)

                        cacheData.ids[searchIndex] = ''
                        this.cache.set(token, cacheData)

                        return res
                    }
                }
            }

            return {}
        }
    }

    /**
    * Генерация токена
    *
    * @return {String} Токен
    */
    token() {
        return Date.now()
    }
}

export default ItemController