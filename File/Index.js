/*实现一个静态文件服务器,如果网站本地目录能找到，就显示内容，找不到就显示
404文件没有找到的信息就可以了。
要用到的模块：
http,fs,url,path
http用来建立web服务器，fs用来读取文件，url用来获取web路径，而path则可以用
来获取文件本地路径及相关检测操作.
自定义的一个MIME模块
*/
var mime = require("./Mime");
var http = require("http"),fs = require("fs"), url = require("url"), path = require("path");
http.createServer(function (request, response) {
    var webpath = url.parse(request.url).pathname;
    var abspath = __dirname + webpath;
    path.exists(abspath, function (exist) {
        if (exist) {
            //使用二进制读取文件，最后也是用二进制写内容。如response.write(xxx,"binanry");
            fs.readFile(abspath, "binary", function (err, data) {
                if (err) {
                    throw err;
                }

                //获取文件的后缀名
                var ext = path.extname(webpath);
                ext = ext ? ext.slice(1) : "unknown";
                console.log(ext);

                //根据文件的后缀名得到对应的MIME
                var contentType = mime.mimes[ext];
                console.log(contentType);

                response.writeHead(200, { 'Content-Type': contentType });
                response.write(data, "binary");
                response.end();
            });
        }
        else {
            response.end("404,file not found.");
        }
    });

}).listen(9000);
console.log("file server start in port 9000");