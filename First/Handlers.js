function start() {
    console.log("This is from start method");
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    sleep(10000);
    return "Hello,This is from start method";
}
function upload() {
    console.log("This is from upload method");
    return "Hello,This is from upload method";
}
exports.start = start;
exports.upload = upload;