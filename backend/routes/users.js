const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../models/users");
const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get("/me", auth, async (req, res) => {
  res.send(req.user);
});

//register
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["username", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(_.pick(user, ["_id", "username", "email"]));
});

router.post(
  "/login",
  passport.authenticate("local"),
  (req, res) => {
    res.redirect("/api/users/me");
  }
);

router.put("/:id", async (req, res) => {
  const { username, email, shippingAddress } = req.body;
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      email,
      shippingAddress,
    },
    {
      new: true,
    }
  );

  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(user);
});

module.exports = router;
