const app = require('express');

const { getArts, getArtById, addCommentForArt } = require('../controllers/arts');

const router = app.Router();

router.get('/', getArts);
router.get('/:id', getArtById);
router.post('/:id/comments', addCommentForArt);

module.exports = router;