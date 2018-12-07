const { productController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', productController.index)
  .post('/', productController.create)
  .get('/:_id', productController.show)
  .put('/:_id', productController.update)
  .delete('/:_id', productController.destroy);
