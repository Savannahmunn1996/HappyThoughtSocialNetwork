const router = require("express").Router();
const userRoute = require("./userRoute");
const thoughtRoute = require("./thoughtRoute");
const thoughtRoutes = require("./thoughtRoute");
const friendship = require("./userRoute")
router.use("/api/users", userRoute);
router.use("/api/thoughts", thoughtRoute);
router.use("/api/reactions", thoughtRoutes);
router.use("/api/friends", friendship);


module.exports = router;
