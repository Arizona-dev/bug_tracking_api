var config = require('./config');

var express = require("express");
var app = express();
app.listen(config.port, () => {
 console.log("Server running on port"+config.port);
});