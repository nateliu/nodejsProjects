var http = require("http");
var url = require("url");
function start(route,handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("There has a request of " + pathname + " comming....");
        var content = route(handle, pathname);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(9000);
    console.log("The server has starting......");
}
exports.start = start;