const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    mongodb
        .getDatabase()
        .db()
        .collection('cart')
        .find({})
        .toArray().then((cartItems) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(cartItems);
        });
}

const addItem = async (req, res) => {
    
    item = {
        productId: req.body.productId,
        productName: req.body.productName,
        quantity: req.body.quantity

    };
    mongodb
        .getDatabase()
        .db()
        .collection('cart')
        .insertOne(item)
        .then((result) => {
            res.json(result);
        });
}

const updateItem = async (req, res) => {
    const itemId = { _id: new ObjectId(req.params.id) };
    let newValues = {
        $set: {
            quantity: req.body.quantity
        }
    };

    mongodb
        .getDatabase()
        .db()
        .collection('cart')
        .updateOne(itemId, newValues)
        .then((result) => {
            res.json(result);
        });
}

const deleteItem = async (req, res) => {
    const itemId = { _id: new ObjectId(req.params.id) }
    
    mongodb
        .getDatabase()
        .db()
        .collection('cart')
        .deleteOne(itemId)
        .then((result) => {
            res.json(result);
        })
}

module.exports = { 
    getAll,
    addItem,
    updateItem,
    deleteItem
}