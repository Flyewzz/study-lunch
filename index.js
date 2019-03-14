const express = require('express');
const app = express();
const router = require('./routes');
const ejs = require('ejs');

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/static'));
app.use("/", router);
app.listen(80);