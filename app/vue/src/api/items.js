import http from '../plugins/Http'

export default {
    async getTopItems() {
        return await http('http://localhost/api/items', 'GET')
    },

    async setItem(item) {
        return await http('http://localhost/api/items', 'PUT', item)
    },

    async getVoteItems() {
        return await http('http://localhost/api/voteitems', 'GET')
    },

    async setLike(data) {
        return await http('http://localhost/api/voteitems/like', 'PUT', data)
    },

    async setDislike(data) {
        return await http('http://localhost/api/voteitems/dislike', 'PUT', data)
    },
}