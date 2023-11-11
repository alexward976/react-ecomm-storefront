const router = require('express').Router();
const productsController = require('../controllers/products');

router.get('/', productsController.getAll);

router.use('/cart', require('./cart'));

module.exports = router;