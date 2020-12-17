let instance = null


/**
 * Класс cacheAdapter
 */
class cacheAdapter {

    /**
    * @constructor
    *
    * @return {cacheAdapter} Возвращает свой экземпляр
    */
    constructor() {
        if (!instance) instance = this
        else return instance

        this.hash = {}
        this.runGc()
    }

    /**
    * Добавление значения в кеш
    *
    * @param  {String} key - ключ
    * @param  {*} value - ключ
    */
    set(key, value) {
        this.hash[key] = {
            time: Date.now(),
            data: value
        }
    }

    /**
    * Получение значения из кеша
    *
    * @param  {String} key - ключ
    * @return {*}
    */
    get(key) {
        if (this.hash[key]) return this.hash[key].data
        return null
    }

    /**
    * Запуск garbage collector ;)
    */
    runGc() {
        setInterval(() => {
            let time = Date.now()
            for (let key in this.hash) {
                if (time > this.hash[key].time + 1 * 1000 * 60 * 15) delete this.hash[key]
            }
        }, 10000)
    }
}

export default cacheAdapter