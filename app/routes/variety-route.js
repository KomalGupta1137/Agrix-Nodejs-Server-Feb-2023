const { authJwt } = require("../middleware");


module.exports = app => {
    const varieties = require("../controller/variety-controller");
    var router = require("express").Router();

    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], varieties.addVariety);
    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], varieties.variety);
    router.get("/:cropId", [authJwt.verifyToken, authJwt.isAdmin], varieties.getBycroptype);
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], varieties.updateVarietyById);
    router.delete("/:_id", [authJwt.verifyToken, authJwt.isAdmin], varieties.deleteVarietyById);

    app.use('/api/varieties', router);
}