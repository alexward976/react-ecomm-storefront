const mongodb = require('../data/database');

const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection('products').find();
    result.toArray().then((products) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(products);
    })
}

module.exports = { getAll };