import Test from '../models/Test.js'

class testController {
    constructor() {
        //super()
    }

    async test() {
        let test = new Test()
        return test.getAll()
    }
}

export default testController