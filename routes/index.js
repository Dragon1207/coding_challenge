const app = require('express');
const users = require('./users');
const arts = require('./arts');

const router = app.Router();

router.use('/users', users);
router.use('/art', arts);

module.exports = router;