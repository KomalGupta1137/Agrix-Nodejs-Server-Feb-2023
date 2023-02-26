const { authJwt } = require("../middleware");

module.exports = app => {
    const category = require("../controller/category-controller");
    var router = require("express").Router();

    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], category.getCategory);
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], category.addCategory);

    app.use('/api/category', router);
};