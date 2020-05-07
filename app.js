const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Setup Cross Origin
app.use(require("cors")());

module.exports = app;
