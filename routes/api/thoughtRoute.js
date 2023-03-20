const router = require('express').Router();
const {
  getThought,
  getSingleThought,
  createAThought,
  deletethought,
  updatethought,
  addReaction,
  removeReaction
} = require('../../controllers/thought-controller.js');

// /api/thoughts
router.route('/').get( getThought).post( createAThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).delete(deletethought).put(updatethought);


// these are my reaction routes
router.route('/:thoughtId').post(addReaction);

router.route('/:thoughtId/:reactionId').delete(removeReaction);
module.exports = router;