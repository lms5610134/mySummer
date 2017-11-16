function router(handle,pathname,res) {
    if(typeof handle[pathname] == "function"){
        handle[pathname](res);
    }else {
        handle['/'](res);
    }
}
exports.router = router;