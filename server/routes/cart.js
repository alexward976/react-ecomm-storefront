const router = require('express').Router();
const cartController = require('../controllers/cart');

router.get('/', cartController.getAll);

router.post('/add', cartController.addItem);

router.put('/update/:id', cartController.updateItem);

router.delete('/delete/:id', cartController.deleteItem);

module.exports = router;