const express = require("express");
const router = express.Router();
const product = require("../models/Product");

router.get("/", (req, res) => {
  const allFood = product.filter((p) => p.category == "Food");
  res.send(allFood);
});

module.exports = router;
