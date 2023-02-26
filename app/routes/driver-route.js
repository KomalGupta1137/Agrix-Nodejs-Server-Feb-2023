const authJwt = require("../middleware/authJwt.js");

module.exports = app => {
    const driver = require("../controller/driver-controller.js");
    var router = require("express").Router();

    router.get("/page", [authJwt.verifyToken, authJwt.isAdmin], driver.Driver)
    router.get("/", [authJwt.verifyToken, authJwt.isAdmin], driver.allDriver)
    router.post("/", [authJwt.verifyToken, authJwt.isAdmin], driver.addDriver)
    router.get("/:id", [authJwt.verifyToken, authJwt.isAdmin], driver.driverById)
    router.get("/driverSearch/data", [authJwt.verifyToken, authJwt.isAdmin], driver.searchDriver);
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], driver.updateDriverById)
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], driver.deleteDriverById)

    app.use("/api/driver", router);
};