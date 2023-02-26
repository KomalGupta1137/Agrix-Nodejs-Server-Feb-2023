module.exports = app => {
    const clusterId = require("../controller/clusterId.controller")
    var router = require("express").Router();

    router.post("/addCluster" , clusterId.addCluster);
    router.get("/" , clusterId.getClusterId);
    router.get("/:id" , clusterId.getByClusterId);    
    
    app.use('/api/cluster', router);
};
