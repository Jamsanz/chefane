const express = require('express');
const User = require('../models/userModel');

const router = express.Router();

router.post('/login', (req, res) =>{
    const { email, password } = req.body;
    User.findOne({email}, (err, foundUser)=>{
        if (err) console.log(err);
        if (foundUser.password === password) res.status(200).json(foundUser);
    });
});

router.post('/register', (req, res) =>{
    const { fullName, email, password, phone } = req.body;
    const newUser = new User({ fullName, email, password, phone });

    User.findOne({email}, (err, foundUser)=>{
        if(err) console.log(err);
        if (foundUser) res.status(403).json({"msg": "User already exists"});

        newUser.save((err, user)=>{
            if (err) console.log(err);
            res.status(201).json(user);
        });
    });

});

router.get('/', (req, res)=>{
    User.find({}, (err, users)=>{
        if (err) console.log(err);
        res.status(200).json(users);
    });
});


module.exports = router;