const router = require('express').Router();
const userRotes = require('./user-routes');

router.use('/users', userRotes);

module.exports = router;