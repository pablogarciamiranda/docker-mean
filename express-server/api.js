// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//Auth credentials to connect to mongo
const options = {
  user: process.env['MONGODB_ADMIN_USER'],
  pass: process.env['MONGODB_ADMIN_PASS']
};

// 'database' is the service specified in the docker-compose file.
const dbHost = 'mongodb://database/admin';


// Connect to mongodb
mongoose.connect(dbHost, options);

// create mongoose schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// create mongoose model
const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
        console.log(res)
        res.send('api works fine');
});

/* GET all users. */
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

/* Create a user. */
router.post('/users', (req, res) => {
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(error => {
        if (error) res.status(500).send(error);

        res.status(201).json({
            message: 'User created successfully'
        });
    });
});

module.exports = router;
