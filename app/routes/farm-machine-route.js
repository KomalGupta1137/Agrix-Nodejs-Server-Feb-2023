const { authJwt } = require("../middleware");

module.exports = app => {
  const farmMachine = require("../controller/farm-machine-controller");
  var router = require("express").Router();

  router.post("/operation/start", farmMachine.operationStart);
  router.post("/operation/stop", farmMachine.operationStop);
  router.get("/operation", farmMachine.operationAll);
  router.get("/page", farmMachine.operationByPage);
  router.get("/operation/:key", farmMachine.operationByMachineId);
  router.get("/operationhistory/:phoneNumber" ,farmMachine.getHistoryByPhone)

  app.use('/api/farm-machine', router);
};