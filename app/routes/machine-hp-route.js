const { authJwt } = require("../middleware");

module.exports = app => {
    const machinehp = require("../controller/machine-hp-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin], machinehp.getMachinehp);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], machinehp.addMachinehp);

    app.use('/api/machinehp', router);
};