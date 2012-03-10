var server = require("./Server");
var route = require("./Router");
var handler = require("./Handlers");
var handle = {};
handle["/"] = handler.start;
handle["/start"] = handler.start;
handle["/upload"] = handler.upload;
server.start(route.route, handle);