
const { authJwt } = require("../middleware");
module.exports = app => {
    const state = require('../controller/state-controller');
    var router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], state.addState);
    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], state.getState);
    router.get("/:_id", [authJwt.verifyToken, authJwt.isAdmin], state.getStateById)

    app.use('/api/state', router);
};

