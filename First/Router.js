function route(handle,pathname) {
    console.log("Get a Request from " + pathname);
    if (typeof handle[pathname] === "function") {
        return handle[pathname]();
    }
    else {
        console.log("has error: no router for this.");
        return ("404 error occured");
    }
}
exports.route = route;