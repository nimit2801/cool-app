const express = require("express");

const router = express.Router();

router.post("/user", (req, res) => {
  const { id } = req.body;
  let found = false;
  database.users.forEach((user) => {
    if (user.id === +id) {
      found = true;
      return res.json(user);
    }
  });
  if (!found) {
    return res.status(400).json("User not found");
  }
});

module.exports = router;
