const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Simple example: Create User
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email)
    return res.status(400).json({ error: "Name and email required" });

  const user = new User({ name, email });
  await user.save();
  res.status(201).json(user);
});

module.exports = router;
