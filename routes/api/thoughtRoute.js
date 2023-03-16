const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createAThought,
  deletethought,
  updatethought,
} = require('../../controllers/thought-controller.js');

// /api/thoughts
router.route('/').get( getThought).post( createAThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deletethought).put(updatethought);

module.exports = router;