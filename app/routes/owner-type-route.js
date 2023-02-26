const authJwt = require('../middleware/authJwt');

module.exports = app => {
   const ownertype = require('../controller/owner-type-controller');
   var router = require("express").Router();

   router.get('/', [authJwt.verifyToken, authJwt.isAdmin], ownertype.getOwnerType);
   router.post('/', [authJwt.verifyToken, authJwt.isAdmin], ownertype.addOwnerType);

   app.use('/api/ownertype', router);
}