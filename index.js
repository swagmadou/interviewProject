const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const all = require("./routes/all");
const drink = require("./routes/drink");
const food = require("./routes/food");
const category = require("./routes/category");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/all", all);
app.use("/food", food);
app.use("/drink", drink);
app.use("/", category);

app.listen(port, () => console.log("listing the port on " + port));
