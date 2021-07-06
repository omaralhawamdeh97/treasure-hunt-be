const express = require("express");
const passport = require("passport");

const { signup, signin } = require("../controllers/usersController");

const router = express.Router();

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);
router.post("/signup", signup);

module.exports = router;
