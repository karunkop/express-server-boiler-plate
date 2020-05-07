const express = require("express");
const dotenv = require("dotenv");
const app = express();

//load env vars
dotenv.config({ path: "./config/config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup Cors
app.use(require("cors")());

module.exports = app;
