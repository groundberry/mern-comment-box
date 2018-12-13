const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use("/api", router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
