const router = require('express').Router();
const { get } = require('express/lib/response');
const {User, Post, Vote} = require('../../models');

//Get api /users
router.get('/', (req, res) => {
    //Access our user model and run .findAll() method
    User.findAll({
        attributes: {exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//Get api /users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: {exclude: ['password']},
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData){
            re.status(404).json({message: 'No user fond with this id'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

//Post api /users
get.post('/', (req, res) => {
    // expect {username , email, password}
    User.create ({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.error(err);
        res.status(500).json(err);
    });
});

//Put api /users/1
get.put('/:id', (req, res) => {
    //if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]) {
            res.status(404).json({ message: 'Not user found with this id.' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

//delete api /users/1
get.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message:'Not user fond with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;