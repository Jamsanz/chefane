const router = require('express').Router();
const Order = require('../models/orderModel');

router.get('/', (req, res) => {
  Order.find({},(err, orders) => {
    if (err) {
      throw Error(err);
    } else{
      if (orders) {
        res.status(200).json(Orders);
      }
      else{
        res.status(404).json({mesage: 'No orders'})
      }
    }
  })
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Order.findById(id, (err, order) => {
    if (err) throw Error(err);
    if (order) res.status(200).json(order);
    res.status(404).json({message: 'Order not found'});
  });
})
router.post('/', (req, res) => {
  const newOrder = new Order({...req.body});
  newOrder.save((err, order) => {
    if (err) throw Error(err);
    res.status(201).json({message: 'order successfully added', order});
  })
});

router.delete('/:id', (req, res)=>{
  const { id } = req.params;
  Order.findByIdAndDelete(id, (err, order) => {
    if (!err) {
      if (!order) {
        res.status(404).json({message: 'order not found'});
      }else{
        res.status(200).json({message:'order sucessfully deleted'});
      }
    }else{
      throw Error(err)
    }
  });
});


router.put('/:id', (req, res)=>{
  const { id } = req.params;
  Order.findByIdAndUpdate(id,{...req.body},(err, order)=>{
    if (!err){
        if(!order){
            res.status(404).json({message:'order not found'});
            
        }else{
            res.status(200).json({message:'order paid'});
        }
    }else{
        throw Error (err)
    }
    
  });
});

module.exports = router;