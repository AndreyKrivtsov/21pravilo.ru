let instance = null

class cacheAdapter {
    constructor() {
        if (!instance) instance = this
        else return instance

        this.hash = {}
        this.runGc()
    }

    set(key, value) {
        this.hash[key] = {
            time: Date.now(),
            data: value
        }
    }

    get(key) {
        if (this.hash[key]) return this.hash[key].data
        return null
    }

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