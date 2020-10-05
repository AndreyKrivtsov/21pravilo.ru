import http from '../plugins/Http'

export default {
    async getTopItems() {
        return await http(window.config.apiUrl + '/api/items', 'GET')
    },

    async setItem(item) {
        return await http(window.config.apiUrl + '/api/items', 'PUT', item)
    },

    async getVoteItems() {
        return await http(window.config.apiUrl + '/api/voteitems', 'GET')
    },

    async setLike(data) {
        return await http(window.config.apiUrl + '/api/voteitems/like', 'PUT', data)
    },

    async setDislike(data) {
        return await http(window.config.apiUrl + '/api/voteitems/dislike', 'PUT', data)
    },
}