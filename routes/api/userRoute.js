const router = require("express").Router();
const {
  createUser,
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  noFriend,
} = require("../../controllers/user-controller.js");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/friends/
router.route("/:userId").post(addFriend);
router.route("/:userId/:friendId").delete(noFriend);

module.exports = router;
