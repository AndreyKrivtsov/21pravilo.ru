import Items from './../models/Items.js'
import cacheAdapter from './../core/cacheAdapter.js'

class ItemController {
    constructor() {
        this.cache = new cacheAdapter()
    }

    async actionGetItems() {
        let item = new Items()
        let res = await item.getItems()
        return res
    }

    async actionSetItem(data) {
        let item = new Items()
        let res = await item.setItem(data)
        return res
    }

    async actionGetVoteItems() {
        let item = new Items()
        let list = await item.getVoteItems()
        // Сделать нормальный криптостойкий идентификатор
        //let uuid = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g, (c,r) => ('x'==с?(r=Math.random()*16|0):(r&0x3|0x8)).toString(16))
        let token = this.token()
        let ids = list.map(item => String(item._id))
        this.cache.set(token, { ids: ids, time: Date.now() })

        ids.forEach(id => item.increaseShowsItem(id))

        return { items: list, token: token }
    }

    async actionLikeItem(data) {
        if (data.token) {
            let token = data.token
            let id = data.id

            let cacheData = this.cache.get(token)
            if (cacheData) {
                let index = cacheData.ids.indexOf(id)
                if (index !== -1) {
                    let item = new Items()
                    let res = await item.setItemLike(id)

                    cacheData.ids[index] = ''
                    this.cache.set(token, cacheData)

                    return res
                }
            }

            return {}
        }
    }

    async actionDislikeItem(data) {
        if (data.token) {
            let token = data.token
            let id = data.id

            if (this.cache.get(token)) {
                if (this.cache.get(token).ids.includes(id)) {
                    let item = new Items()
                    let res = await item.setItemDislike(id)
                    return res
                }
            }

            return {}
        }
    }

    token() {
        return Date.now()
    }
}

export default ItemController