const router = require('express').Router();
const Product = require('../models/productModel');

router.post('/', (req, res)=> {
  const newProduct = new Product({...req.body});
  newProduct.save((err, product)=>{
    if (err) throw Error(err);
    res.status(201).json({message: 'Product sucessfully added', product})
  })
});

router.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) throw Error(err);
    res.status(200).json(products);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Product.findById(id, (err, product) => {
    if (err) Error(err);
    if (product) res.status(200).json(product);
    res.status(404).json({message: 'Product not found'});
  });
});

router.put('/:id', (req, res)=> {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, {...req.body},(err, product) => {
    if (err) throw Error(err);
    if (product) res.status(200).json(product);
    res.status(404).json({message: 'Your product was not found'})
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id, (err, product) =>{
    if (err) throw Error(err);
    if (product) res.status(200).json({message: 'Product deleted successfully', product});
    res.status(404).json({ message: 'Product not found' });
  })
});

module.exports = router;
