const app = require('express');

const { createUser, getUsers } = require('../controllers/users');

const router = app.Router();

router.post('/', createUser);
router.get('/', getUsers);

module.exports = router;