const { model, Schema, ObjectId } = require('mongoose');

const orderSchema = Schema({
  user_id: {
    type: ObjectId,
    ref: 'users',
    required: true
  },
  orderStatus:{
    type: Boolean,
    default: false
  },
  product : {
    type: Object,
    ref: 'products',
    required: false
  }
},{timestamps: true});

module.exports = model('Order', orderSchema);