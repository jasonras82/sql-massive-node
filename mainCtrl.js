let db = require('./db');

module.exports = {
  create(req, res, next) {
    let newProduct = req.body;
    db.create_product([newProduct.name, newProduct.description, newProduct.price, newProduct.imageurl], (err, response) => {
      res.status(201).json({newProduct})
    });
  },
  getAll(req, res, next) {
    db.read_products([], (err, response) => {
      res.send(response);
    })
  },
  getOne(req, res, next) {
    db.read_product([req.params.productid], (err, response) => {
      res.send(response);
    })
  },
  updateProduct(req, res, next) {
    db.update_product([req.params.productid, req.body.description], (err, response) => {
      res.send(response);
    })
  },
  deleteProduct(req, res, next) {
    db.delete_product([req.params.productid], (err, response) => {
      res.send(response);
    })
  }



};
