const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json([{ id: "aaa", username: "bbb" }]);
});

module.exports = router;
