const express = require("express");
const router = express.Router();
const product = require("../models/Product");


router.get("/", (req, res) => {
  res.send(product);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const oneProduct = product.find((p) => p.id == id);
  if(!oneProduct) return res.status(404).send("notFound");
  res.send(oneProduct);
});

module.exports = router;
