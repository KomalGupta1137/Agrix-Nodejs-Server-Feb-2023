const { authJwt } = require("../middleware");

module.exports = app => {
    const identifier = require("../controller/implement-identifier-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken,authJwt.isAdmin], identifier.getIdentifier);
    router.post("/", [authJwt.verifyToken,authJwt.isAdmin], identifier.addIdentifier);
    
    app.use('/api/identifier', router);
};