const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRoute);
app.get("*", (req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

module.exports = app;
