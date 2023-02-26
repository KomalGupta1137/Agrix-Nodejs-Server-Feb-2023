const { authJwt } = require("../middleware");

module.exports = app => {
    const machinebrand = require("../controller/machine-brand-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin], machinebrand.getMachinebrand);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], machinebrand.addMachinebrand);

    app.use('/api/machinebrand', router);
};