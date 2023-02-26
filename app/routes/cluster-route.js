const { authJwt } = require("../middleware");

module.exports = app => {
    const cluster = require("../controller/cluster-controller");
    var router = require("express").Router();

    router.post("/" ,[authJwt.verifyToken,authJwt.isAdmin], cluster.addCluster);
    router.get("/page" , [authJwt.verifyToken,authJwt.isAdmin],cluster.cluster);
    router.get("/" , [authJwt.verifyToken,authJwt.isAdmin],cluster.allCluster);
    router.get("/:id" , [authJwt.verifyToken,authJwt.isAdmin],cluster.clusterById);
    router.get("/clusterSearch/data" , [authJwt.verifyToken,authJwt.isAdmin],cluster.searchCluster);    
    router.put("/:id" , [authJwt.verifyToken,authJwt.isAdmin],cluster.updateClusterById);    
    router.delete("/:id" , [authJwt.verifyToken,authJwt.isAdmin],cluster.deleteClusterById);
    
    
    app.use('/api/cluster', [authJwt.verifyToken,authJwt.isAdmin],router);
  };
