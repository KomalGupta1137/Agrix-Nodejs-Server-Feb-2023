const { authJwt } = require("../middleware");

module.exports = app => {
    const vendor = require("../controller/vendor-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], vendor.getVendor);
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], vendor.addVendor);

    app.use('/api/vendor', router);
};