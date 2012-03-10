/*
本次我们需要使用一个叫socket.io的模块，这个模块，我们可以在线安装，命令是
npm install socket.io
有些地方有人说要加上-d,但我做的时候，确实没有加，也成功了，只是不知道这个
-d到底是何作用。先不管了，等以后了解了自然也就知道了。
建立一个聊天服务器，首先当然是建立一个服务器，然后就侦听这个服务器就OK了。
注意这个服务器跟我们上一次讲得那个静态文件服务器中使用的fs一样，如果我们侦
听的html，即交互文件存在的话，读取他，并返回浏览器中，达到交互的功效。
*/
var http = require("http"),socketio = require("socket.io"),fs=require("fs");
var chatserver = http.createServer(function (request, response) {
    fs.readFile(__dirname +"/ChatClient.html",	function (err, data) {
        response.writeHead(200);
        response.end(data);
	});
}).listen(9000);
console.log("chat server start at port 9000");
var websocket = socketio.listen(chatserver);
websocket.sockets.on("connection", function (socket) {
    console.log("websocket connect ok.");
    socket.on("msg", function (data) {
        console.log("Get a msg from client ...");
        console.log(data);
        socket.broadcast.emit("user message", data);
    });
});
