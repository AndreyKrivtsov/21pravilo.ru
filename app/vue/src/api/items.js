import http from '../plugins/Http'

export default {
    getRandomItems() {
        http('https://example.com/answer')
            .then((data) => {
                console.log(data); // JSON data parsed by `response.json()` call
            });
    }
}