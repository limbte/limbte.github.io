var express = require("express");
var path = require("path");
var bodyParser = require("body-parser")

const NODE_PORT = 3000;
const CLIENT_FOLDER = path.join(__dirname, "../client");
const ERRMSG_FOLDER = path.join(CLIENT_FOLDER, "/assets/msg");
const IMG_FOLDER = path.join(CLIENT_FOLDER, "/assets/img");

var app = express();
app.use(express.static(__dirname + '/'));
app.use(express.static(CLIENT_FOLDER));
app.use(express.static(IMG_FOLDER));

console.log("Absolute path of the application directory: %s", __dirname);

app.listen(NODE_PORT, function(){
    console.log("%s \nApplication started at:%d", new Date(),NODE_PORT );
});
