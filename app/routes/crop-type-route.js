const { authJwt } = require('../middleware');

module.exports = app => {
    const croptype = require('../controller/crop-type-controller')
    var router = require('express').Router();

    router.post('/', [authJwt.verifyToken, authJwt.isAdmin], croptype.addCropType);
    router.get('/', [authJwt.verifyToken, authJwt.isAdmin], croptype.getCropType);
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], croptype.updateCropTypebyId);
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], croptype.deleteCropTypebyId);


    app.use('/api/croptype', router);
}