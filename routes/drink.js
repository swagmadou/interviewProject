const express = require("express");
const router = express.Router();
const product = require("../models/Product");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const drink = product
    .filter((p) => p.category == "Drink")
    .find((p) => p.id == id);
    if(!drink) return res.status(404).send("notFound")
  res.send(drink);
});

module.exports = router;
