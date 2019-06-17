var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});