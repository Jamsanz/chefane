const { Schema } = require('mongoose');
const { model } = require('mongoose');

const productSchema = Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {
        secure_url: String,
        version: String,
        public_id: String
    },
    category: {
        type: String,
        enum: ['Vegetables', 'Fruits', 'Diaries'],
        default: 'Vegetables'
    }
},{timestamps: true});

module.exports = model('Product', productSchema);