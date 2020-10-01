export default async (url = '', method = 'GET', data = {}) => {
    let config = {
        method,
        mode: 'cors', //no-cors
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    }

    if (method !== 'GET' && method !== 'HEAD')
        config.body = JSON.stringify(data)

    const response = await fetch(url, config);
    return await response.json();
}