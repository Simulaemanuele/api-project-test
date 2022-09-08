"use strict";
exports.__esModule = true;
var express_1 = require("express");
require("express-async-errors");
var app = (0, express_1["default"])();
app.get("/", function (request, response) {
    response.send("Up and running");
});
var port = 3000;
app.listen(port, function () {
    console.log("[server]: Server is running at https://localhost:".concat(port));
});
