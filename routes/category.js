const express = require("express");
const router = express.Router();
const product = require("../models/Product");

router.get("/:category/:id", (req, res) => {
  const { category, id } = req.params;
  const oneProduct = product
    .filter((p) => p.category == category)
    .find((p) => p.id == id);
  if (!oneProduct) return res.status(404).send("notFound");
  res.send(oneProduct);
});

module.exports = router;
