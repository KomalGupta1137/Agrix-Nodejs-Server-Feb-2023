const authJwt = require("../middleware/authJwt.js");
module.exports = app => {
  const farmer = require("../controller/farmer-controller");
  var router = require("express").Router();

  router.get("/page", [authJwt.verifyToken, authJwt.isAdmin], farmer.farmer);
  router.get("/", [authJwt.verifyToken, authJwt.isAdmin], farmer.allFarmer);
  router.get("/:id", [authJwt.verifyToken, authJwt.isAdmin], farmer.farmerById);
  router.get("/farmerSearch/data", [authJwt.verifyToken, authJwt.isAdmin], farmer.searchFarmer);
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], farmer.addFarmer);
  router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], farmer.updateFarmerById);
  router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], farmer.deleteFarmerById);
  router.get("/cluster/:clusterid", [authJwt.verifyToken, authJwt.isAdmin], farmer.farmersByClusterId);
  router.get("/clusterSearch/:key", [authJwt.verifyToken, authJwt.isAdmin], farmer.farmerCluster);

  app.use('/api/farmer', [authJwt.verifyToken, authJwt.isAdmin], router);

};