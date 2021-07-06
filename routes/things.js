const express = require("express");
const passport = require("passport");
const {
  getTreasures,
  getGarbages,
} = require("../controllers/thingsControllers");
const router = express.Router();

router.get(
  "/treasures",
  passport.authenticate("jwt", { session: false }),
  getTreasures
);
router.get("/garbages", getGarbages);

module.exports = router;
