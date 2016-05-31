var express = require("express");
var morgan = require("morgan");

var bodyParser = require('body-parser');

var app = express();
var config = require("./app/configs/config");


var basicrouter = require("./app/routers/basic.router");




// Middleware Config
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use("/api", basicrouter);
app.listen(config.port);
