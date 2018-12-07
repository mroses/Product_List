const { Product } = require('../models');
const { Http } = require('@status/codes');


module.exports = {
  index(request, response) {
    Product.find({})
      .then(products => response.json(products))
      .catch(error => response.json(error));
  },
  create(request, response) {
    Product.create(request.body)
      .then(product => response.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
        key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
        });
  },

  show(request, response) {
    Product.findById(request.params._id)
      .then(product => response.json(product))
      .catch(error => response.status(500).json(error));
  },
  update(request, response) {
    Product.findByIdAndUpdate(request.params._id, { $set: request.body }, { new: true, runValidators: true  })
      .then(product => response.json(product))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
        key => error.errors[key].message);
        response.status(Http.UnprocessableEntity).json(errors);
        console.log(errors);
        });
  },
  destroy(request, response) {
    Product.findByIdAndRemove(request.params._id)
      .then(product => response.json(product))
      .catch(error => response.json(error));
  }
};
