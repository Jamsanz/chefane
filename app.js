require('dotenv').config();
const express = require('express');
const { connect } = require('mongoose');
const userController = require('./controllers/user');
const orderController = require('./controllers/order');
const productController = require('./controllers/product');
const cors = require('cors');

const app = express();


connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    if (err) console.log(err);
    console.log("Mongo Server Connected Successfully");
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use('/user', userController);
app.use('/order', orderController);
app.use('/product', productController);

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server started at port ${process.env.PORT}`);
}); 