const router = require('express').Router();
var User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error'+err));
});

router.route('/add').post((req, res) => {
    const newUser = new User({ username: req.body.username });

    newUser.save()
        .then(() => res.json('User added Successfully!'))
        .catch(err => res.status(400).json('Error:'+err));
});

module.exports = router;