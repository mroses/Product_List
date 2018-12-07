const router = require('express').Router();
const productRoutes = require('./product.routes');

module.exports = router.use('/products', productRoutes);
