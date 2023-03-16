const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createAThought,
} = require('../../controllers/thought-controller.js');

// /api/thoughts
router.route('/').get( getThought).post( createAThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought);

module.exports = router;