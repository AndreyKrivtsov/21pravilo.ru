class Item extends Model {
    constructor() {

    }

    static find() {
        db.collection('items').find().toArray(function (err, result) {
            if (err) {
                throw err
            }
            console.log(result)
        });
    }
}