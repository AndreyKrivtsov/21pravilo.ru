import http from '../plugins/Http'

export default {
    getRandomItems() {
        http('http://localhost/api/items')
            .then((data) => {
                console.log(data);
            });
    },

    setItem(item) {
        http('http://localhost/api/items', 'PUT', item)
            .then((data) => {
                console.log(data);
            });
    }
}