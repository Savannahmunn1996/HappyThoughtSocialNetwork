const router = require("express").Router();
const userRoute = require("./userRoute");
const thoughtRoute = require("./thoughtRoute");
const thoughtRoutes = require("./thoughtRoute");
router.use("/api/users", userRoute);
router.use("/api/thoughts", thoughtRoute);
router.use("/api/reactions", thoughtRoutes);
//I am not sure why the reaction route is not working,
// I created another piece of middleware here thinking this would do the trick, still not working.

module.exports = router;
