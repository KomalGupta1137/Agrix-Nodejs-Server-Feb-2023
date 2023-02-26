const { authJwt } = require("../middleware");

module.exports = app => {
  const districts = require("../controller/district-controller");
  var router = require("express").Router();

  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], districts.addDistrict);
  router.get("/", [authJwt.verifyToken, authJwt.isAdmin], districts.getDistrict);
  router.get("/:stateId", [authJwt.verifyToken, authJwt.isAdmin], districts.getDistrictByState);

  app.use('/api/district', router);

};