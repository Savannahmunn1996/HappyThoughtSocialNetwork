const router = require("express").Router();
const userRoute = require("./userRoute");
const thoughtRoute = require("./thoughtRoute");

router.use("/api/users", userRoute);
router.use("/api/thoughts", thoughtRoute);

module.exports = router;
